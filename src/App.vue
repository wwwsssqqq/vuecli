
<!-- 入口   -->
<template>
  <div id="app">
    <cardList/>
  </div>
</template>
<script>
/* eslint-disable */
import cardList from "./components/cardList";
export default {
  name: "app",
  components: {
    cardList
  },
  data() {
    return {
      name: "card"
    };
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
