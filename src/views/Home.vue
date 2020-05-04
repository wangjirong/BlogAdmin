<template>
  <div id="home">
    <elHeader/>
    <leftTool/>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components:{
    elHeader:()=>import('../components/Home/elHeader'),
    leftTool:()=>import('../components/Home/leftTool')
  }
}
</script>
<style lang="less">
  @import "../style/Home/public";
</style>
