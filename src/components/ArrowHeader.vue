<template>
	<div>
		<van-nav-bar
		  :title="title"
		  left-arrow
		  @click-left="onClickLeft"
		/>
	</div>
</template>

<script>
import { NavBar } from 'vant';
export default {
	name:"ArrowHeader",
	components:{
		  [NavBar.name]:NavBar,
	},
	props:{
		title:{
			type:String,
			default:"GmzxMall"
		}
	},
	data(){
		return {
			showArrow:false,
			
		}
		
	},
	methods:{
		onClickLeft() {
	       this.$router.go(-1);
	   }	
	}
}
</script>

<style lang="less" scoped>
.head {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	width: 100%;
	height: 85px;
	background: #fff;
	line-height: 85px;
	text-align: center;
	border-bottom: 1px solid #eee;
	
}
</style>