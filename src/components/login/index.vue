<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
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
                        console.log('error submit!!')
                        return false
                    }
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
