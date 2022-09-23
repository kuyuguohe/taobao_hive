<template>
<div id="svm"></div>
</template>

<script>
import * as echarts from 'echarts';
import {getsvm} from "@/api/api";

export default {
  name: "svm",
  data(){
    return{
      score:[],
      label:[],
      age_range:[],
      msg:[[]],
    }
  },
  methods:{
    getData(){
       getsvm().then(res =>{
         console.log(res)
         this.msg = res;
         console.log(this.msg)
         this.initChart()
       }).catch(err =>{
         console.log(err)
       })
    },
    initChart(){
      var myChart = echarts.init(document.getElementById('svm'));
      const option = {
        xAxis: {
          min:0,
          max:7
        },
        yAxis: {
          min:-120000,
          max:0,
        },
        series: [{
          type: 'scatter',
          name: 'score',
          data: this.msg
        }]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
#svm{
  width: 100%;
  height: 270px;
}
</style>