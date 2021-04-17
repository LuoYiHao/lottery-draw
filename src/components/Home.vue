<template> 
  <div>
    <center class="btns">
      <el-button type="primary" class="config" @click="config">配置</el-button>
      <el-button type="success" class="draw" @click="draw">抽奖</el-button>
    </center>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    config() {
      this.$router.push('/Config')
    },
    draw() {
      this.$router.push('/Draw')
    }
  }
}
</script>

<style scoped>
  .btns{
    margin-top: 40px;
  }
</style>