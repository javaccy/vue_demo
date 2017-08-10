<template>
  <div id="admin-appbar">
    <mu-appbar title="Title" class="admin-appbar" :class="{'nav-hide': !open}">
      <mu-icon-button icon="menu" slot="left" @click="toggle()" />
      <mu-icon-button slot="right">
        {{username}}
      </mu-icon-button>
      <mu-icon-menu icon="more_vert" slot="right">
        <router-link to="/login">登录</router-link>
      </mu-icon-menu>
    </mu-appbar>
    <admin-sidebar :show="open" v-on:changeState="toggle"></admin-sidebar>
    <div class="admin-content" :class="{'nav-hide': !open}">

    </div>
  </div>
</template>
<script>
  import AdminSidebar from './AdminSidebar.vue'

  export default {
    components: {
      AdminSidebar},
    name: 'admin-appbar',
    props: ['show'],
    data () {
      return {
        open: true,
        username: '用户名',
        password: '密码'
      }
    },
    methods: {
      toggle (msg) {
        console.log(msg)
        this.open = !this.open
      }
    }
  }
</script>
<style lang="less">
  .admin-appbar{
    position: fixed;
    left: 256px;
    right: 0;
    top: 0;
    width: auto;
  &.nav-hide {
     left: 0;
   }
  }
  .admin-content{
    padding-top: 56px;
    padding-left: 256px;
  &.nav-hide {
     padding-left: 0;
   }
  }
</style>
