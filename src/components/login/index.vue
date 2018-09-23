<template>
    <el-card class="login-card">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>

            <!-- <el-form-item label="记住账号"> <el-switch></el-switch></el-form-item> -->

            <el-form-item>
                <el-button type="primary" :loading="loading" @click="onTourist">游客登录</el-button>
                <el-button type="primary" :loading="loading" @click="onSubmit">登陆</el-button>
            </el-form-item>
            
            
        </el-form>
    </el-card>
</template>

<script>
    import getBrowserInfo from '@/utils/getbower'
    import Fingerprint from '@/utils/fingerprint'
    import md5 from '@/utils/md5.min'
    export default {
        data: function() {
            return {
                form: {
                    number: '',
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
                        if(this.form.number =='' || this.form.password== ''){
                            this.loading = false
                            return this.$message({
                                message: '账号或密码不能为空！',
                                type: 'warning'
                            });
                        }
                        this.form.password = md5(this.form.password)
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
                //生成uuid
                var fingerprint = new Fingerprint({canvas: true}).get();
                let form = {
                    number: fingerprint,
                    intro:getBrowserInfo()
                }
                this.$store.dispatch('loginByTourist', form).then(() => {
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
    .login-card{
        /* width: 50%; */
        margin: 10% auto;
    }
</style>
