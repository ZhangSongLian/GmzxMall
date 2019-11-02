<template>
	<div class="lunbo">
		<van-swipe @change="onChange">
		  <van-swipe-item v-for="item in bannerList" :key="item.id">
		  	<img :src="item.imgs" alt="" />
		  </van-swipe-item>
		  <div class="custom-indicator" slot="indicator">
		    {{ current + 1 }}/{{bannerList.length}}
		  </div>
		</van-swipe>
	</div>
	
</template>

<script>
	import get from '@/utils/https'
	import { Swipe, SwipeItem } from 'vant'
	export default {
		name:"Swiper",
		props:{
			bannerList:Array
		},
//		js中用驼峰式命名，在html中替换成短横线分隔式命名
		components:{
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem
		},
		data(){
			return {
				current: 0
			}
		},
		methods:{
			onChange(index) {
		      this.current = index;
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.lunbo {
		width: 100%;
		height: 750px;
		margin-bottom: 20px;
		.van-swipe {
			width: 100%;
			height: 750px;
			.van-swipe-item{
				width: 100%;
				height:100% !important;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.custom-indicator {
				width: 10%;
				height: 45px;
				background: #eee;
				opacity: 0.5;
				text-align: center;
				font-size: 28px;
				position: absolute;
				right: 20px;
				bottom: 20px;
				
			}
		}
		
	}

</style>