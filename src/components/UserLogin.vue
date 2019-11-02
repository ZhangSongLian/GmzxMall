<template>
  <div class="container">
		<div class="content">
			<div class="t-center">
				<transition 
					name="fade"
					appear 
					enter-active-class="animated slideInDown" 
					leave-active-class="animated slideInUp"
					appear-active-class="animated shake"
					>
					<img src="../assets/img/gmbn.jpg" alt="">
     	 </transition>
				<h2>面部整形到广美</h2>
			</div>

			 <div class="cont-midden">
          <span class="circle lt"></span>
          <span class="circle rt"></span>
        </div>
			<div class="form">
				<van-cell-group>
					<van-field
					<van-field
						@input="inputPhone(11,'phone')"
						v-model.trim="phone"
						clearable
						left-icon="phone-o"
						placeholder="请输入您的手机号"
					/>
						<van-field
							@input="inputPhone(6,'vcode')"
						v-model.number="vcode"
						center
						clearable
						left-icon="more-o"
						placeholder="请输入短信验证码"
					>
					<van-button slot="button" size="small" type="primary">发送验证码</van-button>
				</van-field>
				</van-cell-group>
			</div>
			 <div class="btn-join" @click="postVcode">
          <a class="btn-input hover no-touch" href="javascript:;">加入我们</a>
        </div>

		</div>
  </div>

</template>

<script>
import request from '@/utils/request';
import { Cell, CellGroup } from 'vant';
import { Field } from 'vant';
import { Button } from 'vant';

export default {
  name: 'UserLogin',
	components:{
		 	[Cell.name]: Cell,
		  [CellGroup.name]: CellGroup,
      [Field.name]: Field,
      [Button.name]: Button
      
   },
  data () {
    return {
			msg: '面部整形到广美',
			phone:'',
			vcode:'',
			show:true
    }
	},
	watch:{
		'phone':function(n,o){
			console.log(n.length)
		}
	},
	methods:{
		// 限制input的输入字数
		inputPhone(val,key){
			this[key] = this[key].substr(0,val)
		},
		// 点击发送验证码
		async clickSendVcode (){
			const phone = this.phone;
			const reg = /^1\d{10}$/;
			var timer = 59;
				if (!phone) {
				Toast('手机号码不能为空');
				return;
			}
			if(!reg.test(phone)){
				Toast('手机格式不正确');
				return;
			}

		},
		async postVcode () { 
			// const phone = this.phone;
			// const vcode = this.vcode;
			// const reg = /^1\d{10}$/;
			// if (!phone) {
			// 	Toast('手机号码不能为空');
			// 	return;
			// }
			// if(!reg.test(phone)){
			// 	Toast('手机格式不正确');
			// 	return;
			// }
			// if (!vcode) {
			// 	Toast('验证码不能为空');
			// 	return;
			// }
			// if((vcode + "").length != 6) {
			// 	Toast('验证码格式不正确');
			// }
			this.$router.push({path: '/home'});//vue编程式（ js 跳转） router.push('index')
		}
}
	
}
</script>

<style lang="less" scoped>
/*引入公共样式*/
	
	.container {
	position:absolute;
		width: 100%;
    height: 100%;
	// background: #14cebc;
	background: #fca6bf;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    letter-spacing: 0.5px;
		.content {
			width: 87%;
			// min-height: 84%; less中允许双斜线的注释
			padding: 50px 0;
			min-height: 950px;
			background: #ffffff;
			border-radius: 32px;
			.t-center {
					width: 60%;
					margin: 0 auto;
					padding: 80px 0 10px 0;
					img {
						display: block;
						width: 100%;
						height: 240px;
				
					}
					 h2{
						font-size: 42px;
						text-align: center;
						color: #fca6bf;
						padding:20px 0;
        }
			}
			
			.cont-midden { // & 代表上一级选择器，实际编译成css就是 .cont-midden:after{}
				width: 100%;
				height: 64px;
				position: relative;
				&::after {
					position: absolute;
					content: " ";
					width: 100%;
					height: 1px;
					top: 50%;
					border-bottom: 1px dashed #eacc20;
				
					left: 0;
					z-index: 1;
				}
				.circle {
					position: absolute;
					width: 64px;
					height: 64px;
					background: #fca6bf;
					border-radius: 50%;
					top: 0;
					z-index: 2;
					&.lt {
						left: -32px;
					}
					&.rt {
						right: -32px;
					}
				}
			}

			.form {
					margin:30px auto;
					width:91%;
					border: 1px solid #ebedf0;
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

			
		}
		
	}
</style>

