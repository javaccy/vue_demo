<template>
  <div class="sidebar">
    <mu-drawer :open="show">
      <mu-appbar title="Title"></mu-appbar>
      <mu-list>
        <mu-list-item title="Menu Item One"/>
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
      }
    }
  }
</script>
