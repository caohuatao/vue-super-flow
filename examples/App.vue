<!--
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
-->
<template>
  <div id="app">
    <br>
    <demo1></demo1>
    <br>
    <br>
    <demo2></demo2>
    <br>
  </div>
</template>

<script>
  import demo1 from './demo1'
  import demo2 from './demo2'

  export default {
    components: {
      demo1,
      demo2
    }
  }
</script>

<style lang="less">
  html, body {
    width   : 100%;
    height  : 100%;
    margin  : 0;
    padding : 0;

    #app {
      width  : 100%;
      height : 100%;
    }
  }
</style>
