<template>
    <div>
        <el-row :gutter="12">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>个人资料</span>
                    </div>
                    <div>
                        <el-form :model="form" status-icon :rules="rules"  ref="form">
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
                                    <el-col v-show="isTourist" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                        <el-form-item >
                                            <el-button type="primary" @click="modifyData">{{dataEdit?'确认修改':'修改资料'}}</el-button>
                                            <el-button v-show="dataEdit" @click="exitpwdEdit(0)">取消</el-button>
                                        </el-form-item>
                                    </el-col>
                                    <el-col v-show="isTourist" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                         <el-form-item :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                                            <el-button type="primary" @click="modifyPwd">{{pwdEdit?'确认修改':'修改密码'}}</el-button>
                                            <el-button v-show="pwdEdit" @click="exitpwdEdit(1)">取消</el-button>
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
                                            <el-option label="Android / 安卓开发" value="Android / 安卓开发"></el-option>
                                            <el-option label="Web / Web前端开发" value="Web / Web前端开发"></el-option>
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
                                    <el-form-item v-show="pwdEdit" label="旧密码" prop="oldPwd">
                                        <el-input type="password"  v-model="form.oldPwd"  placeholder="请输入旧密码"></el-input>
                                    </el-form-item>
                                </el-col>
                                 <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="新密码" prop="newPwd">
                                        <el-input type="password" v-model="form.newPwd"  placeholder="请输入新密码"></el-input>
                                    </el-form-item>
                                </el-col>
                                 <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                                    <el-form-item v-show="pwdEdit" label="确认密码" prop="confirmPwd">
                                        <el-input type="password" v-model="form.confirmPwd"  placeholder="请确认新密码"></el-input>
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
import { parseTime, seleSwitch, payload, typeToCode } from '@/utils'
import { updateAccount, modifyPwd } from '@/api/account'
export default {
    components: {
    PanThumb
  },
  data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.form.newPwd !== '') {
            this.$refs.form.validateField('confirmPwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.confirmPwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
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
          pwdEdit: false,
          rules: {
            newPwd: [
                { validator: validatePass, trigger: 'blur' }
            ],
            confirmPwd: [
                { validator: validatePass2, trigger: 'blur' }
            ]
            },
            isTourist: store.getters.roles.indexOf('tourist')==-1 ? true : false
      }
  },
  computed:{
    usernameObj(){
        return store.getters.name
    }
  },
  methods:{
      modifyData:function(){
          let that = this;
          if(that.dataEdit){
              that.updateData(function(boolen){
                  if(boolen){
                      that.dataEdit = !that.dataEdit
                  }
              });
          }else{
              that.dataEdit = !that.dataEdit
          } 
      },
      modifyPwd:function(){     
          let that = this;  
          if(that.pwdEdit){
              if(that.form.newPwd != that.form.confirmPwd){
                    that.$message({
                    message: '两次密码输入不一致',
                    type: 'success'
                });
                return false;
            }
              that.updatePwd(function(boolen){
                  if(boolen){
                      that.pwdEdit = !that.pwdEdit;
                      //重置
                      that.$refs['form'].resetFields();
                  }
              });      
          }else{
              that.pwdEdit = !that.pwdEdit
          }
      },
      updateData:function(callback){
        //获取新数据，并上传
        let obj = {};
        obj.type = typeToCode(this.form.type);
        let token = store.getters.token;
        let id = store.getters.user;
        updateAccount( id, token, obj ).then(response => {
            if(response.success){
                this.$message({
                    message: '修改成功',
                    type: 'success'
                });
                return callback && callback(true);
            }
        })
        return callback && callback(false);
      },
      updatePwd:function(callback){
        let obj = {};
        obj.oldPwd = this.form.oldPwd;
        obj.newPwd = this.form.newPwd;
        obj.confirmPwd = this.form.confirmPwd;
        let token = store.getters.token;
        let id = store.getters.user;
        modifyPwd( id, token, obj ).then(response => {
            if(response.success){
                this.$message({
                    message: '修改成功',
                    type: 'success'
                });
                return callback && callback(true);
            }
        })
        return callback && callback(false);
      },
      exitpwdEdit:function(val){
          switch (val) {
              case 0:
                    this.form.type = seleSwitch(store.getters.type);
                    this.dataEdit = false;
                  break;
              case 1:
                    this.pwdEdit = false;
                    this.$refs['form'].resetFields();
                  break;
              default:
                  break;
          }
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
