<template>
  <div>
    <mu-appbar title="用户登录"/>
    <mu-paper class="demo-paper" circle :zDepth="5">
      <div class="form">
        <mu-text-field hintText="用户名" fullWidth=""/>
        <mu-text-field hintText="密码" fullWidth=""/>
        <mu-raised-button label="登录" @click="login" secondary/>
      </div>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: 'login'
      }
    },
    methods: {
      login () {
        console.log('登录成功')
      },
      register () {
        console.log('注册成功')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
  .form{
    width:300px;
    margin: auto;
  }
  .demo-paper {
    padding-top: 300px;
    display: inline-block;
    height: 800px;
    width: 800px;
    margin: 20px;
    text-align: center;
  }
</style>
