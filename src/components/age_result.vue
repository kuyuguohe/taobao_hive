<template>
  <div id="age"></div>
</template>

<script>
import {getAge} from "@/api/api";
import * as echarts from 'echarts';
export default {
  name: "age_result",
  data(){
    return{
      man:[],
      woman:[],
      unknown:[]
    }
  },
  methods:{
    getData(){
      getAge().then(res => {
        console.log(res);
        this.man = res.man;
        this.woman = res.woman;
        this.unknown = res.unknown;
        this.initChart();
      }).catch(err =>{
        console.log(err);
      })
    },
    initChart(){
      var myChart = echarts.init(document.getElementById('age'));
      const option = {
        legend: {},
        tooltip: {},
        xAxis: {
          type: 'category',
          min:0,
          max:7,
        },
        yAxis: {
          min:440000,
          max:442000,
        },
        series: [{
          type: 'scatter',
          name: '男',
          data: this.man
          }, {
          type: 'scatter',
          name: '女',
          data: this.woman
          },{
          type: 'scatter',
          name: '未知',
          data: this.unknown
        }]
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
#age{
  width: 100%;
  height: 270px;
}
</style>