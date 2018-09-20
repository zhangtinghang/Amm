<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading" @click="onTourist">游客登录</el-button>
                <el-button type="primary" :loading="loading" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import getBrowserInfo from '@/utils/getbower'
    import crypto from 'crypto'
    export default {
        data: function() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                loading: false
            }
        },
        methods: {
            onSubmit() {
                this.loading = true;
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.loading = true
                        this.$store.dispatch('loginByUsername', this.form).then(() => {
                            this.loading = false
                            this.$router.push({
                                path: '/'
                            })
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        return false
                    }
                })
            },
            onTourist() {
                this.loading = true;
                var md5 = crypto.createHash("md5");
                md5.update(JSON.stringify(getBrowserInfo()));
                var name = md5.digest('hex');
                let form = {
                    username: name,
                    password: 123456,
                    isTourist: true
                }
                this.$store.dispatch('loginByUsername', form).then(() => {
                    this.loading = false
                    this.$router.push({
                        path: '/'
                    })
                }).catch(() => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>
    html,
    body {
        height: 100% !important;
    }
</style>
