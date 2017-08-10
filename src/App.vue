<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import AdminAppbar from './components/commons/AdminAppbar.vue'

  export default {
    components: {AdminAppbar}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

@import 'https://fonts.googleapis.com/icon?family=Material+Icons';  /*带入 material design 图标*/
</style>
