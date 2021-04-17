<template>
  <div>
    <center class="btns">
      <el-button type="primary" class="draw" @click='draw'>{{action}}抽奖</el-button>
    </center>
    <center class="drawContent">{{drawContent}}</center>
  </div>
</template>

<script>
export default {
  name: 'Draw',
  data () {
    return {
      list:[],
      drawContent: '',
      isDrawing: false,
      interval:null,
      action:'开始',
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if(localStorage.list){
        this.list = JSON.parse(localStorage.list)
      }
    },
    draw(){
      this.init()
      if(localStorage.list){
        if(!this.isDrawing){
          let that = this
          this.isDrawing = true
          this.action = '结束'
          this.interval = setInterval(()=>{
            let randomNum = Number(Math.floor(Math.random() * that.list.length))
            that.drawContent = that.list[randomNum].name
          },80)
        }else{
          this.end()
        }
      }else{
        this.open()
      }
    },
    end(){
      clearInterval(this.interval)
      this.drawContent = this.realDraw()
      this.isDrawing = false
      this.action = '开始'
    },
    open() {
      this.$alert('请先配置抽奖内容', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          
        }
      });
    },
    realDraw(){
      var arr = [];
      for(var i = 0; i<this.list.length; i++){
          arr.push(this.list[i]['probobility'])
      }
      return this.list[this.getResult(arr)]['name']
    },
    getResult(arr){
      var leng = 0;
      for(var i = 0; i<arr.length; i++){
          leng += arr[i]                                     //获取总数
      }
      for(var i = 0; i < arr.length; i++){
          var random = parseInt(Math.random()*leng);       //获取 0-总数 之间的一个随随机整数
          if(random < arr[i]){
              return i                                     //如果在当前的概率范围内,得到的就是当前概率
          }
          else {
              leng -= arr[i]                                 //否则减去当前的概率范围,进入下一轮循环
          }
      }
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .drawContent{
    font-size: 150px;
    font-weight: bold;
    margin-top: 40px;
  }
  .btns{
    margin-top: 30px;
  }
</style>