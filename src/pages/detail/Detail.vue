<template>
	<div>
		<arrow-header :title="title"></arrow-header>
		<div class="banner" @click="handleBanner">
			<img class="banner-img" :src="detailList.goodsimgs" alt=""/>
		</div>
		<div class="goods-info">
			 <div class="c">
		      <h2 class="retailPrice">￥{{detailList.price}}</h2>
		      <em class="counterPrice">原价：￥{{detailList.oldprice}}</em>
		      <div class="title">
		        <h2 class="name">{{detailList.name}}</h2>
		        <p class="sold">已售<span style="color:#f00a56">{{detailList.sales}}</span>件</p>
		      </div> 
  			</div>
		 </div>
		 <div class="detail">
			<h2>商品详情内容 </h2>
		 </div>
		 
		<div class="goods-action">
			  <p class="l-collect" @click="goToCart"><img src="../../assets/img/icon-cart.png" alt=""> 
			  	<i style="color:red;" v-if="cartList.length>0">{{cartList.length}}</i>
			  </p>
			  <div class="r common" @click="handleAddToCart">
			    <span>加入购物车</span>
			  </div>
			  <div class="buy common" @click="handleSku">
			    <span>立即购买</span>
			  </div> 
		</div>

		<gallary @close="handleCloseGallary" v-show="showGallary"></gallary>
		<sku  @close="handleCloseSku" v-show="showSku" :skuList= "detailList" :id="id"></sku>
		
	</div>
</template>

<script>
import axios from 'axios' 
import { mapGetters } from 'vuex'
import ArrowHeader from '../../components/ArrowHeader'
import Gallary from '../../components/Gallary'
import Sku from './components/sku'
import {Toast} from 'vant';
export default {
	name:"Detail",
	components:{
		ArrowHeader,
		Gallary,
		Sku,
		[Toast.name]:Toast,
	},
	
	data(){
		return{
			title:"商品详情",
			showGallary:false,
			showSku:false,
			id: parseInt(this.$route.params.id),
			detailList: []
		}
	},
	computed:{
		...mapGetters(['cartList','user']),
	},
	
	methods:{
		handleBanner(){
			this.showGallary=true
		},
		handleSku(){
			if(this.user.name){
				this.showSku = true
			}else{
				this.$store.state.user.isLogin = true
			}
		},
		handleCloseSku(){
			this.showSku = false
		},
		handleCloseGallary(){
			this.showGallary = false;
		},

		getProduct () {
			return new Promise((resolve,reject) => {
				axios.get('/api/goodsList.json')
				.then(this.getDetailList)
			})
		},
		getDetailList(res){
			res = res.data;
			if(res){
				// find()方法用于查找符合条件的第一个元素，如果找到了，返回这个元素，否则，返回undefined
				this.detailList = res.goodsList.find(item => {
					return item.id === this.id
				})
			}
		},
		//加入购物车
		handleAddToCart () {
			this.$store.commit('addCart', this.id)
			Toast('添加购物车成功');
		},
		//跳转到购物车
		goToCart(){
			this.$router.push('/cart')
		}
	},
	mounted () {
        this.getProduct();
    }
}
</script>

<style lang="less" scoped>
.banner {
	width: 100%;
	height: 750px;
	.banner-img {
		width: 100%;
		height: 100%;
	}
}
.goods-info {
  width: 100%;
  overflow: hidden;
  background: #fff;
  .c {
	  padding: 20px;
	  border-bottom: 1px solid #f4f4f4;
	  .title {
		  height: 80px;
		  display: flex;
		  justify-content: space-between;
		  align-items: flex-start;
		  .sold {
			   font-size:26px;
			}
		}
		.name {
		  text-align: left;
		  font-size: 42px;
		  padding-bottom: 10px;
		}
		.counterPrice {
		  text-decoration: line-through;
		  font-size: 30px;
		  color: #999;
		}
		.retailPrice {
		  font-size: 45px;
		  color: #f00a56;
		}
	}
}

.detail{
	padding: 20px;
}
.fcommon {
	line-height: 115px;
	text-align: center;
	color: #fff;
}

 /*底部按钮*/
.goods-action {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 115px;
  display: flex;
  justify-content: flex-start;
  background: #fff;
  font-size: 28px;
  .l-collect {
	width: 145px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		display: block;
		width: 65px;
		height: 65px;
	}
	i {
		width: 40px;
		height: 40px;
		text-align: center;
		border: 1px solid red;
		border-radius: 50%;
	}
	}
	.r {
		width: 260px;
		background: #f7945e;
		&:extend(.fcommon);
	}
	.buy {
		width: 340px;
		background: #f00a56;
		&:extend(.fcommon);
	}
}



</style>