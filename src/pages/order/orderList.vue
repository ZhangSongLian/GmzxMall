<template>
    <div>
        <arrow-header :title="title"></arrow-header>

        <van-tabs v-model="active">
            <div v-for="type in types">
                <van-tab :title="type">
                    <div class="order-list">
                       <span :style="{color: activeColor}">{{type}}</span> 
                         暂无订单
                    </div>

                </van-tab>
            </div>
        </van-tabs>

        
     
    </div>
</template>

<script>
//引入子组件
import ArrowHeader from '../../components/ArrowHeader'
import { Tab, Tabs } from 'vant';

import { Icon } from 'vant';

export default {
    name:'Mall',
    //初始化组件
    components:{
        ArrowHeader,
        [Icon.name]:Icon,
        [Tab.name]:Tab,
        [Tabs.name]:Tabs
    },

    data(){
        return {
          title:"全部订单",
          active: 0,
          types:['待付款','待收货','待评价','全部订单'],

          activeColor: 'red',
         
        }
    },
     mounted () {
         this.slidePage(this.$route.params.type)
    },
    methods:{
        slidePage (index) {
            this.active = index || 0 ;  
        },
    },
    watch: { //响应路由参数的变化
        $route () {
            console.log(this.$route.params.type)
            this.slidePage(this.$route.params.type)
        }
    },
   
}
</script>

<style lang="less" scoped> // 在style标签中写入scoped 目的是使css只在当前组件起作用
   .order-list {
       padding: 20px;
       text-align: center;
       font-size: 28px;
       color: #7d7e80;
   }

    
</style>
