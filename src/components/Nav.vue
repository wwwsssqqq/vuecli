
<template>
  <div :class="navbar">
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/parctise">练习</router-link>
      <router-link to="/testData">考试资料</router-link>
      <router-link to="/testMemory">考试回忆</router-link>
      <router-link to="/yida">易达</router-link>
      <router-link to="/my">个人中心</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import {navData} from "./data"
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      navData: navData
    }
  },
  props: {

  },
  watch: {},
  computed: {
  },
  created:{},
  method:{
    reverseMessage: function () {
      // 
    }
  },
  
};
</script>
<style lang="stylus">
  .navbar
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
