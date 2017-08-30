<template>
  <div class="sidebar">
    <mu-drawer :open="show">
      <mu-appbar title="菜单列表"></mu-appbar>
      <mu-list>
        <mu-list-item title="表单" @click="go('form')">
        </mu-list-item>
        <mu-list-item title="列表" @click="go('list')">
        </mu-list-item>
        <mu-list-item title="城市列表" @click="go('area')">
        </mu-list-item>
        <mu-list-item title="Close" v-on:click="changeOpen"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
  export default {
    name: 'admin-sidebar',
    props: ['show'],
    data () {
      return {
        open: true
      }
    },
    methods: {
      changeOpen () {
        this.$emit('changeState', '参数')
      },
      go (path) {
        this.$router.push('/admin/' + path)
      }
    }
  }
</script>
