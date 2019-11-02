<template>
    <div class="footer">
        <ul>
            <li v-for="item in footerBarList">
                <router-link :to="item.path" class="tab-item" active-class="active" exact>
                 <van-icon :name="item.icon" size="24px"/>
                 <span>{{item.title}}</span>
                  <i class="num" v-if="item.title=='购物车' && cartList.length>0">{{cartList.length}}</i>
                </router-link>
             </li>
        </ul>
    </div>
</template>

<script>
import { Cookie } from '../../utils/storage'
import { Icon } from 'vant';

export default {
    name:'FooterNav',
    components:{
        [Icon.name]:Icon,
    },
    data(){
        return{
            linkExactActiveClass:'active',
            footerBarList:[
                 {title: '首页', icon: 'wap-home', path: '/home'},
                 {title: '商城', icon: 'shop-o', path: '/mall'},
                 {title: '购物车', icon: 'shopping-cart-o', path: '/cart'},
                 {title: `${Cookie.get('username')?'我的':'未登录'}`, icon: 'user-o', path: '/my'}
            ]
        }
    },
    computed:{
        cartList(){
			return this.$store.state.cart.cartList
		}
    }
  
}
</script>

<style lang="less" scoped>
.footer {
	  width: 100%;
	  position: fixed;
      left: 0px;
      bottom: 0px;
      z-index: 999;
	  border-top:1px solid #eee;
	  background:#fff;
	  ul {
      width: 100%;
      height: 85px;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
        li{     
        width: 32%;
        text-align: center;
        background:#fff;
        font-size: 28px;
        color: #fff;
        position: relative;
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #9A9A9A;
            /* color: #; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .num {
                display:block;
                width: 35px;
                height: 35px;
                text-align: center;
                color: #fff;
                border-radius: 50%;
                font-size: 22px;
                background: red;
                position: absolute;
                top:-10px;
                right:35px;
            }
        }
        .active {
            color: #d2235a;
        }
    }
  }
}
  
   

  

   
</style>
