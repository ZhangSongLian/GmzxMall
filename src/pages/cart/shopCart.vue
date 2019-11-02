<template>
	<div>
			<header-nav :title="title"></header-nav>
			<div v-if="cartList.length === 0" class="cart-tip">
				<img src="../../assets/img/cart.png" alt="" />
				<div>空空如也～～
					<router-link to="/mall">
						去商城逛逛吧
					</router-link>
				</div>
			</div>
			
			<div v-if="cartList.length>0">
				<h2 class="title">购物车列表</h2>
				<div class="goods" v-for="(item,index) in cartList" :key="item.id" @click.self="toDetialPage(item.id)">
					<input type="checkbox" v-bind:name="item.name" :value="item.id" v-model="checkModel"/>
					<img :src="productDictList[item.id].goodsimgs">
					<div class="detail-list">
							<h3 class="ellipsis">{{productDictList[item.id].name}}</h3>
							<p>描述信息</p>
							<div class="flex">
								<span style="color: red;">￥{{productDictList[item.id].price}}</span>
								<div>
									<button @click="handleReduce(index)">-</button>
										<span>{{item.count}}</span>
									<button @click="handleAdd(index)">+</button>
								</div>
								<button class="del" @click="del(index)">移除</button>
							</div>

						</div>
				</div>
			</div>

		<van-submit-bar
		:price="totalPrice"
		:button-text="'去结算('+ cartList.length + ')'"
		@submit="onSubmit"
		v-if="cartList.length>0"
		>
		  <van-checkbox v-model="checked" checked-color="#d2235a"  @change="checkAll">全选</van-checkbox>
		</van-submit-bar>
	</div>
</template>

<script>
	import axios from 'axios' 
	import { mapGetters } from 'vuex'
	import HeaderNav from '../../components/header'
	import { SubmitBar,Checkbox,CheckboxGroup,Toast} from 'vant';

	export default {
		name:"shopCart",
		 components:{
				HeaderNav,
		    	[SubmitBar.name]:SubmitBar,
		    	[Checkbox.name]:Checkbox,
		    	[CheckboxGroup.name]:CheckboxGroup,
		    	[Toast.name]:Toast
		    },
		    
		data(){
			return{
				title:"购物车",
				checked:false,
				checkModel:[],
			}
		},
		computed:{
			...mapGetters(['isLogin','user','cartList','cartInfo']),
			productDictList(){
				return this.$store.getters.productDictList
			},
			//计算总价
			totalPrice(){
				let i, total = 0;
				this.cartList.forEach(item => {
					if(this.checkModel.indexOf(item.id)>-1){
						total += this.productDictList[item.id].price * item.count;
					}      
                });
				return total*100
			}
		},
		watch:{
			checkModel(val){ //监听checkModel属性，当其长度 ===input元素时 全选按钮选中，否则取消
				console.log(val)
				if(val.length === this.cartList.length){
					this.checked= true;
				}else{
					this.checked= false;
				}
			}
		},
		
		methods:{
			handleAdd(index){
				this.cartList[index].count++;
			},
			handleReduce(index){
				if(this.cartList[index].count>1){
					this.cartList[index].count--;
				}
			},
			del(index){
				this.cartList.splice(index,1);
				Toast('删除成功');
			},
			// 全选
			checkAll(ev) {
				this.checkModel = ev ?
					this.cartList.map(item => item.id) :
					[]
			},
			onSubmit(){
				//  let productSkuId = []; //选中的sku id
   				//  let proNum = []; //数量
				//  var checkedGoods = this.cartList.filter(function(element, index, array) {
				// 	 console.log(element,index+1)
				// 	if (element.checked == true) {
				// 		productSkuId.push(element.id);
				// 		proNum.push( element.count );
				// 		return true;
				// 	} else {
				// 		return false;
				// 	}
				// });
				// console.log(productSkuId)
				
				if(this.user.name){
					if(this.checkModel.length <= 0){
						Toast('请选择商品');
						return false;
					}else {
					this.cartList.forEach(item =>{
						console.log(item)
						alert("★★★您购买的商品是：" + this.productDictList[item.id].name);
					})
					
					}
				}else {
					this.$store.state.user.isLogin = true
				}
				
			},
			toDetialPage(id){ //动态路由跳转页面
				this.$router.push({path: '/detail/'+id,params: {type: id}})
			}

		},
		 mounted(){
			this.$store.dispatch('getCart')
		}
	}
</script>

<style lang="less" scoped>
.flexcenter {
	display: flex;
	align-items: center;
}
@bgcolor:#d2235a;
@width:125px;
.van-submit-bar {
	bottom: 125px;
}
.van-submit-bar .van-button {
    color: #fff;
    background-color: @bgcolor;
    border: 1px solid @bgcolor;
}

.cart-tip {
	width: 100%;
	height: 850px;
	&:extend(.flexcenter);
	flex-direction: column;
	justify-content: center;
	a {
		color: red;
		text-decoration: underline;
	}
	
}
.title {
	padding: 20px;
	font-size:28px;
	font-weight: 600;
}
/*购物车*/
.goods {
	width: 94%;
	padding: 25px 10px;
	margin: 5px auto;
	background: #fff;
	font-size: 25px;
	 &:extend(.flexcenter);
	justify-content: flex-start;
	img {
		width: @width;
		height: @width;
		border-radius: 14px;
		margin: 1px;
	}
	.detail-list {
		width: 68%;
		line-height: 42px;
		padding-left: 10px;
		.flex {
			&:extend(.flexcenter);
			justify-content: space-around;
		}
	}
	
}


</style>