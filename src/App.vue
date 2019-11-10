<template>
  <div id="app">
     <!-- <keep-alive> -->
       <router-view id="view"></router-view>
    <!-- </keep-alive> -->
     <Login :class="{'login-active': isLogin}" @close="$store.state.user.isLogin=false"></Login>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Login from './components/Login'
export default {
 components: { Login },
  name:'App',
  computed: {
    ...mapGetters([
            'isLogin'
      ])
  }


 }
 
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
   #view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1); */
    }
</style>