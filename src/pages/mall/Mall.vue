<template>
    <div> 
    	<header-nav :title="title"></header-nav>
    	<swiper :banner-list="bannerList"></swiper>
		<section class="sort">
			 <div class="list-control-order">
                <span>排序：</span>
                <span class="list-control-order-item" 
				:class="{on:order === ''}"
				 @click="handleOrderDefault"
				 >默认</span>
                <span class="list-control-order-item"
				:class="{on:order === 'sales'}"
				 @click="handleOrderSales">销量
				  <template v-if="order === 'sales'">↓</template>
                </span>
                <span class="list-control-order-item"
				:class="{on:order.indexOf('price') >-1}"
				 @click="handleOrderPrice">价格
				  <template v-if="order === 'price-asc'">↑</template>
				  <template v-if="order === 'price-desc'">↓</template>
                </span>
            </div>
		</section>
		<section :class="{ mgbottom: isShow }" class="clearfix"> 
	   		<goods-list v-for="item in orderListSort" :info = item :key="item.id" ></goods-list>
		</section>
  	</div>
</template>

<script>

import HeaderNav from '../../components/header'
import Swiper from '../../components/Swiper'
import GoodsList from './components/goodsList'

import { mapGetters } from 'vuex'
import axios from 'axios' 
export default {
    name:'Home',
    components:{
    	HeaderNav,
    	Swiper,
    	GoodsList
        
	},
	computed:{
		...mapGetters(['bannerList']),
		list(){
			return this.$store.state.goodlist.goodsList
		},

		// 价格销量排序
		orderListSort(){
			let list = [...this.list]; //(...)展开运算符可以展开数组
			if(this.order !== ""){
				if(this.order === "sales"){
					list = list.sort((a,b) => b.sales - a.sales)
				}else if(this.order === "price-asc"){
					// 价格从小到大
					list = list.sort((a,b) => a.price - b.price)
				} else if(this.order === "price-desc"){
					// 价格从大到小
					list = list.sort((a,b) => b.price - a.price)
				}
			}
			// console.log(list)
			return list;
		}
	},
    data(){
    	return {
			title:"广美商城",
			order:'',
			isShow:true
    	}
	},
	methods:{
		// 默认
		handleOrderDefault(){
			this.order = "";
		},
		handleOrderSales(){
			this.order = "sales";
		},
		handleOrderPrice(){
			if(this.order === 'price-desc'){
				this.order = 'price-asc'
			}else {
				this.order = 'price-desc'
			}
		},
	},
	async created(){
		await this.$store.dispatch('loadGoodList');
	}
		
 
}
</script>

<style lang="less" scoped>
	.sort {
		padding: 20px;
		font-size: 28px;
		background: #fff;
		margin-bottom: 20px;
		.list-control-filter-item,
		.list-control-order-item {
			cursor: pointer;
			display: inline-block;
			border: 1px solid #e9eaec;
			border-radius: 4px;
			margin-right: 6px;
			padding: 5px 10px;
		}
		.list-control-filter-item.on,
		.list-control-order-item.on{
			background: #f2352e;
			border: 1px solid #f2352e;
			color: #fff;
		}
	}
	.mgbottom {
		margin-bottom: 135px;
	}
	

</style>
