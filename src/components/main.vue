<template>
  <el-container>
    <el-header class="head">淘宝双11购物数据可视化分析与预测</el-header>
    <el-main class="main">
      <div class="up">
        <up/>
      </div>
      <div class="down">
        <down/>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Up from '@/components/up'
import Down from '@/components/dowm'
export default {
  name: 'HelloWorld',
  components: {
    Up,
    Down
  },
  data(){
    return{
      msg:""
    }
  }
}
</script>
<style scoped>
.head {
  height: 200px;
  background-color: #8e030f;
  font-size: 50px;
  color: #ffffff;
}
.main {
  background-color: #8e030f;
}
.up{
  height: 300px;
  background-color: #ff0048;
}
.down{
  height: 300px;
  background-color: #ff0048;
}
</style>
