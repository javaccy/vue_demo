<template>
  <div id="adminSimpleForm">
    <mu-text-field fullWidth hintText="姓名"/>
    <mu-text-field fullWidth hintText="学历"/>
    <mu-text-field fullWidth hintText="出生日期"/>
    <mu-text-field fullWidth hintText="家庭住址"/>
  </div>
</template>
<script>
  export default {
    name: 'AdminSimpleForm',
    data () {
      return {
        msg: 'form'
      }
    }
  }
</script>
