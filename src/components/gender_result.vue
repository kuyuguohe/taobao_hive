<template>
  <div id="gender"></div>
</template>

<script>
import {getGender} from "@/api/api";
import * as echarts from 'echarts';
export default {
  name: "gender_result",
  data(){
    return{
      data:''
    }
  },
  methods:{
    getData(){
      getGender().then(res =>{
        console.log(res);
        this.data = res;
        this.initChart();
      }).catch(err =>{
        console.log(err);
      })
    },
    initChart(){
      var myChart = echarts.init(document.getElementById('gender'));
      window.onresize = function() {
        myChart.resize();
      };
      const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'right'
        },
        series: [
          {
            name: 'Gender',
            type: 'pie',
            radius: '50%',
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
#gender{
  width: 100%;
  height: 270px;
}
</style>