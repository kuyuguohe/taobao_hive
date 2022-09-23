<template>
  <div id="consume"></div>
</template>

<script>
import {getConsume} from "@/api/api";
import * as echarts from 'echarts';
export default {
  name: "buyer_result",
  data(){
    return{
      data:"",
    }
  },
  methods:{
    getData(){
      getConsume().then( res => {
        this.data = res;
        console.log(res);
        this.initChart();
      }).catch(err => {
        console.log(err);
      })
    },
    initChart(){
      var myChart = echarts.init(document.getElementById('consume'));
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
            name: 'Consume',
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
#consume{
  width: 100%;
  height: 270px;
}
</style>