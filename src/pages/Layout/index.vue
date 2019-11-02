<template>
    <div class="app-wrapper">
        <!-- main -->
         <!--一个渲染组件可以包含自己的嵌套<router-view>，在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置-->
         <router-view class="main-container"></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>

import FooterNav from './footer'
export default {
   name: 'layout',
    components:{
        FooterNav
    },
    data(){
        return{
            title:'首页'
        }
    }

}
</script>

<style lang="less" scoped>
    .app-wrapper {
        width: 100%;
        height: 100%;
    }
    .main-container {
        width: 100%;
        height: calc(100% - 120px);
        position: relative;
    }
</style>