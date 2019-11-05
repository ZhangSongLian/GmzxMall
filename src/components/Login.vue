<template>
  <div class="login-wrapper" v-show="$store.state.user.isLogin">
      <div class="close" @click="$emit('close')">
          <van-icon name="close" />
      </div>
		<div class="content">
			<div class="form">
				<van-cell-group>
					<van-field
                        v-model="username"
                        clearable
                        left-icon="user-o"
                        placeholder="用户名随便填"  
                    />
					<van-field
                        v-model="password"
                        type="password"
                        clearable
						left-icon="edit"
                        placeholder="请输入密码:123456"
                    />
				</van-cell-group>
			</div> 
             <p :class="{animate: username_msg}" class="tip">请输入用户名</p>
             <p :class="{animate: password_msg}" class="tip">请输入密码</p>

			 <div class="btn-join" @click="login()">
                 <a class="btn-input" href="javascript:;">加入我们</a>
             </div>
    
		</div>
  </div>

</template>

<script>

import { mapGetters } from 'vuex'
import { Cell, CellGroup } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';
import { Icon } from 'vant';
import { Toast } from 'vant';
import axios from '@/utils/https';


export default {
  name: 'Login',
	components:{
	  [Cell.name]: Cell,
	  [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Button.name]: Button,
      [Icon.name]: Icon,
      [Toast.name]: Toast
   },
  data () {
    return {
        username:'',
        password:'',
        username_msg:'',
        password_msg:'',
        avatar:require('../assets/img/headimg.png')
     }
	},
	watch:{
	
	},
	methods:{
        async login(){
            if(!this.username){
                this.username_msg="请输入用户名"
            }else {
                this.username_msg="";
            }
            if(this.username_msg) return

            if(!this.password){
                this.password_msg="请输入密码";
            }else if(this.password&&this.password != "123456"){
                 this.password_msg="请输入密码:123456"
            }else {
                this.password_msg="";
            }

            if(this.password_msg) return;

            this.$toast.loading('加载中');

            try {
                await this.$store.dispatch('login', {
                    username: this.username,
                    password: this.password
                })
             }catch (e) {
                 console.log(e)
            }
            this.$toast.clear();

            this.$emit('close');
        }
		
    },
	 computed: {
     ...mapGetters(['isLogin'])
    }
}
</script>

<style lang="less" scoped>
.no-touch{ touch-action: none; } 
.login-wrapper {
	position: fixed;
        width: 100%;
        height: 100%;
        left: 0;top:0;
        z-index: 1000;
        // opacity: 0;
        background-color: #fff;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        // text-align: center;
        transition: top .2s ease-out;
         .close {
            position: absolute;
            right: 30px;
            top: 30px;
            font-size: 48px;
            padding: 10px;
            color: #555;
        }
		.content {
			padding: 150px 0;
			border-radius: 32px;
			.form {
                margin:30px auto;
                width:91%;
                border: 1px solid #ebedf0;
             }
             .tip{
                  padding: 0 30px 30px 30px;
                  color: red;
                 display: none;
             }
             .animate {
               display: block;
                 animation-duration: 3s;
                 animation-name:shake;
             }
            .btn-join {
                width: 80%;
                margin:0 auto;
                height: 90px;
                line-height: 90px;
                a.btn-input {
                    display: block;
                    width: 100%;
                    height: 90px;
                    line-height: 90px;
                    background: #fca6bf;
                    text-align: center;
                    font-size: 32px;
                    color: #ffffff;
                    border-radius: 12px;
                }
            }	
            .login {
                margin-top: 20px;
                width: 80%;
                height: 40px;
                border-radius: 20px;
                line-height: 40px;
                color: #f4f4f4;
                border: none;
                background-color: red;
            }
		}
		
	}
</style>

