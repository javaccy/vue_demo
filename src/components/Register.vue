<template>
  <div>
    <mu-appbar title="用户注册"/>
    <mu-paper class="demo-paper" circle :zDepth="5">
      <div class="form">
        <mu-text-field @focus="readyInput" hintText="用户名" fullWidth="" v-model="username" v-bind:errorText="errorTexts.usernameErrorMsg"/>
        <mu-text-field @focus="readyInput" hintText="密码" fullWidth="" v-model="password" v-bind:errorText="errorTexts.passwordErrorMsg"/>
        <mu-text-field @focus="readyInput" hintText="确认密码" fullWidth="" v-model="retypePassword" v-bind:errorText="errorTexts.retypePasswordErrorMsg"/>
        <mu-raised-button label="注册" @click="register()" secondary/>
      </div>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    name: 'Register',
    data () {
      return {
        msg: 'login',
        username: '',
        password: '',
        retypePassword: '',
        errorTexts: {
          usernameErrorMsg: '',
          passwordErrorMsg: '',
          retypePasswordErrorMsg: ''
        }
      }
    },
    methods: {
      readyInput () {
        let errors = this.errorTexts
        Reflect.ownKeys(errors).forEach((t) => {
          errors[t] = ''
        })
      },
      register () {
        if (this.username === '') {
          this.errorTexts.usernameErrorMsg = '用户名必须输入'
        }
        console.log('USERNAME   ' + this.username)
        console.log('PASSWORD   ' + this.password)
        console.log('RETYPE_PASSWORD   ' + this.retypePassword)
        console.log('注册成功')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
  .form {
    width: 300px;
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
