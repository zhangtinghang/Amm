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
                                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item>
                                        <div class="component-item">
                                            <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
                                                您 好： <br />{{usernameObj}}
                                            </pan-thumb>
                                        </div>
                                    </el-form-item>
                                </el-col>

                                <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                        <el-form-item >
                                            <el-button type="primary" @click="modifyData">{{dataEdit?'确认修改':'修改资料'}}</el-button>
                                            <el-button v-show="dataEdit" @click="dataEdit=false">取消</el-button>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                         <el-form-item :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                            <el-button type="primary" @click="modifyPwd">{{pwdEdit?'确认修改':'修改密码'}}</el-button>
                                            <el-button v-show="pwdEdit" @click="pwdEdit=false">取消</el-button>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                        <el-form-item :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                            <el-button type="primary" @click="Logout">退出登录</el-button>
                                        </el-form-item>
                                    </el-col>                   
                                </el-col>
                            </el-row>

                            <el-row :gutter="12">
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="账号类型 :">
                                        {{form.roles}}
                                        <el-input v-show="dataEdit" :disabled="true" v-model="form.roles"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="账号状态 :">
                                        {{form.status}}
                                        <el-input v-show="dataEdit" :disabled="true" v-model="form.status"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="创建时间 :">
                                        {{form.creatTime}}
                                        <el-input v-show="dataEdit" :disabled="true" v-model="form.creatTime"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                                    <el-form-item label="所属部门 :">
                                        {{form.type | typeConversion}}
                                        <!-- <el-input v-model="form.type"></el-input> -->
                                        <el-select v-show="dataEdit" v-model="form.type" placeholder="请选择所属部门:">
                                            <el-option label="Andrid / 安卓开发" value="Andrid / 安卓开发"></el-option>
                                            <el-option label="Web / Web前端" value="Web / Web前端"></el-option>
                                            <el-option label="Python / Python开发" value="Python / Python开发"></el-option>
                                            <el-option label="Games / 游戏开发" value="Games / 游戏开发"></el-option>
                                            <el-option label="UI / UI设计" value="UI / UI设计"></el-option>
                                            <el-option label="Other / 其他" value="Other / 其他"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="12">
                                <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="旧密码">
                                        <el-input v-model="form.oldPwd"  placeholder="请输入旧密码"></el-input>
                                    </el-form-item>
                                </el-col>
                                 <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="新密码">
                                        <el-input v-model="form.newPwd"  placeholder="请输入新密码"></el-input>
                                    </el-form-item>
                                </el-col>
                                 <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="确认密码">
                                        <el-input v-model="form.confirmPwd"  placeholder="请确认新密码"></el-input>
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
import store from '@/store'
import { parseTime, seleSwitch, payload } from '@/utils'
export default {
    components: {
    PanThumb
  },
  data(){
      return {
          form:{
              roles:payload(store.getters.roles),
              status:store.getters.status === 0 ? '启用' : '禁用',
              creatTime:parseTime(store.getters.createTime, '{y}-{m}-{d} {h}:{i}'),
              type:seleSwitch(store.getters.type),
              oldPwd:'',
              newPwd:'',
              confirmPwd:''
          },
          dataEdit: false,
          pwdEdit: false
      }
  },
  computed:{
    usernameObj(){
        return store.getters.name
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
          let that = this;
          store.dispatch('FedLogOut').then( res => {
            that.$message({
                message: '退出成功',
                type: 'success'
            });
            this.$router.push('/');
          }).catch(err => {
              Message.error(err || 'logOut error')
          })
      }
  },
  filters:{
      typeConversion:function(val){
          if(typeof val === Number){
              return seleSwitch(val);
          }
          return val;
          
      }
  }
}
</script>

<style scoped>
/* .el-row-header{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
} */
.el-select{
    width: 100%;
}
</style>
