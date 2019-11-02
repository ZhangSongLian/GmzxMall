<template>
	<div>
		<van-nav-bar
		  :title="title"
		  @click-left="onClickLeft"
		/>
	</div>
</template>

<script>
import { NavBar } from 'vant';
export default {
	name:"HeaderNav",
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

</style>