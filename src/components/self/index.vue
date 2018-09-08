<template>
    <div>
        <el-row :gutter="12">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>个人资料</span>
                    </div>
                    <div>
                        <el-form :model="form" ref="form">
                            <el-row class="el-row-header" :gutter="12">
                                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item>
                                        <div class="component-item">
                                            <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
                                                您 好： <br />游客
                                            </pan-thumb>
                                        </div>
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                                    <el-form-item>
                                        <el-button type="primary" @click="modifyData">修改资料</el-button>
                                        <el-button type="primary" @click="modifyPwd">修改密码</el-button>
                                        <el-button type="primary" @click="Logout">退出登录</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="12">
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="账号类型 :">
                                        游客
                                        <el-input v-show="dataEdit" :disabled="true" v-model="form.roles"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="账号状态 :">
                                        启用
                                        <el-input v-show="dataEdit" :disabled="true" v-model="form.status"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="创建时间 :">
                                        2018-08-03 12:10
                                        <el-input v-show="dataEdit" :disabled="true" v-model="form.creatTime"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="所属部门 :">
                                        web前端
                                        <!-- <el-input v-model="form.type"></el-input> -->
                                        <el-select v-show="dataEdit" v-model="form.type" placeholder="请选择所属部门:">
                                            <el-option label="Andrid / 安卓开发" value="0"></el-option>
                                            <el-option label="Web / Web前端" value="1"></el-option>
                                            <el-option label="Python / Python开发" value="2"></el-option>
                                            <el-option label="Games / 游戏开发" value="3"></el-option>
                                            <el-option label="UI / UI设计" value="4"></el-option>
                                            <el-option label="Other / 其他" value="5"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="12">
                                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="旧密码">
                                        <el-input v-model="form.oldPwd"  placeholder=""></el-input>
                                    </el-form-item>
                                </el-col>
                                 <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="新密码">
                                        <el-input v-model="form.newPwd"  placeholder=""></el-input>
                                    </el-form-item>
                                </el-col>
                                 <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="确认密码">
                                        <el-input v-model="form.confirmPwd"  placeholder=""></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import PanThumb from '@/components/PanThumb'
export default {
    components: {
    PanThumb
  },
  data(){
      return {
          form:{
              roles:'游客',
              status:'启用',
              creatTime:'2018-09-08 12:30',
              type:0,
              oldPwd:'',
              newPwd:'',
              confirmPwd:''
          },
          dataEdit: false,
          pwdEdit: false
      }
  },
  methods:{
      modifyData:function(){
          this.dataEdit = !this.dataEdit
      },
      modifyPwd:function(){
          this.pwdEdit = !this.pwdEdit;
      },
      Logout:function(){

      }
  }
}
</script>

<style scoped>
.el-row-header{
    display: flex;
    align-items: center;
}
.el-select{
    width: 100%;
}
</style>
