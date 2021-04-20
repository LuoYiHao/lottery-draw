<template>
  <div>
    <center class="name">幸运大抽奖</center>
    <img src="@/assets/bg.jpeg" alt="" class="bg">
    <router-view id="app"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$router.push('/Home')
  }
}
</script>

<style>
.name{
  font-size: 40px;
  letter-spacing: 0.8em;
  margin-left: 0.8em;
  margin-top: 80px;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  font-weight: bold;
}
.bg{
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
