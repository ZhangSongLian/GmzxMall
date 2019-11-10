<template>
    <div>
        <header-nav :title="title"></header-nav>
        <section class="header">
            <div class="info">
                <img :src="user.name?user.headImg:images" class="info-img" alt="">
                <div v-if="user.name">
                    <h4 class="info-name">{{user.name}}</h4> 
                    <!-- <p class="info-text">点击绑定会员卡</p>	 -->
                </div>
                <div v-else>
                    <h4 class="info-name" @click="login">点击登录</h4> 
                </div>
            </div>
        </section>
        <section class="lists">
                <div class="list-items" v-for="(item,index) in resList" @click=" skipOrder(index)">
                    <van-icon :name="item.icon" dot  size="22px"/>
                    <div class="item-names">{{item.title}}</div>
                </div>
        </section>
        <my-content v-for="item in posts":content="item" :key="item.id"></my-content>  
        <div class='esc' v-if="user.name" @click="esc">退出登录</div>
    </div>
</template>

<script>
//引入子组件
import { mapGetters } from 'vuex'
import HeaderNav from '../../components/header'
import MyContent from './components/Content'
import { Icon ,Button } from 'vant';

export default {
    name:'Mall',
    //初始化组件
    components:{
        HeaderNav,
        MyContent,
        [Icon.name]:Icon,
        [Button.name]:Button
    },

    data(){
        return {
            title:"个人中心",
            images:require('../../assets/img/xm3.png'),
            posts:[
                {id:0,title:'我的收货地址',icon:'location-o',path:'/chooseAddress'},
                {id:1,title:'购物车',icon:'shopping-cart-o',path:'/cart'},
                {id:2,title:'用户反馈',icon:'user-o',path:'/Feedback'},
                ],
            resList: [
                { icon: 'paid', title: '待付款' },
                { icon: 'logistics', title: '待收货' },
                { icon: 'comment-o', title: '待评价' },
                { icon: 'orders-o', title: '全部订单' },
            ]   
        }
    },

    methods:{
        login () {
            this.$store.state.user.isLogin = true
        },
        skipOrder (index) {
            // 命名路由
            this.$router.push({name: '订单列表', params: {type: index}})
         },

        //退出登录
        esc(){
            this.$store.dispatch('esc')
        }

    },
   
    computed: {
        ...mapGetters(['user','isLogin'])
    }
   
}
</script>

<style lang="less" scoped> // 在style标签中写入scoped 目的是使css只在当前组件起作用
    .login-active {
            opacity: 1;
            top: 0;
        }
    .header {
        padding: 25px;
        background: #fca6bf;
     .info {
        width: 100%;
        height: 185px;
        display: flex;
        justify-content: start;
        align-items: center;
        .info-img {
        width: 124px;
        height: 124px;
        border-radius: 50%;
         }
        .info-name {
            font-size: 32px;
            font-weight: 400;
            padding: 10px;
            color: #fff;
        }
        .info-text {
            padding-left: 10px;
            font-size: 28px;
        }
    }
}
.lists {
    padding: 20px;
    margin-bottom: 10px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list-items {
        width: e("calc(100% / 4)");
        text-align: center;
        font-size: 28px;
    }
}

.esc {
    background: #fff;
    text-align: center;
    line-height: 85px;
    margin-top: 45px;
    color: #f85959
}

    
</style>
