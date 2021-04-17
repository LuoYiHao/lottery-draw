<template>
  <div>
    <center class="name">抽奖系统</center>
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
  font-size: 30px;
  letter-spacing: 1em;
}
</style>
