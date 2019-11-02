<template>
  <div id="app">
     <!-- <keep-alive> -->
       <router-view></router-view>
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

</style>