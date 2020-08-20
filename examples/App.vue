<!--
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
-->
<template>
  <div id="app">
    <super-flow :link-style="linkStyle"></super-flow>
  </div>
</template>

<script>

  export default {
    components: {},
    methods: {
      linkStyle(link) {
        console.log(link)
      }
    }
  }
</script>

<style lang="less">
  html, body {
    width   : 100%;
    height  : 100%;
    margin  : 0;
    padding : 0;
    .super-flow {
      width: 100%;
      height: 100%;
    }
  }
</style>
