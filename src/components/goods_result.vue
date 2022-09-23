<template>
  <div id="sale"></div>
</template>

<script>
import * as echarts from 'echarts';
import {getSale} from '@/api/api'
export default {
  name: "goods_result",
  data(){
    return{
      data:{
        id:[],
        sales:[]
      }
    }
  },
  methods:{
    getData(){
      getSale().then(res => {
        this.data = res;
        console.log(res);
        this.initChart();

      }).catch(err =>{
        console.log(err);
      })
    },
    initChart(){
      var myChart = echarts.init(document.getElementById('sale'));
      window.onresize = function() {
        myChart.resize();
      };
      const option = {
        xAxis: {
          type: 'category',
          name:'商品id',
          data:this.data.id,
        },
        yAxis: {
          type: 'value',
          name:"商品销售量",
          min:298,
          max:300
        },
        series: [
          {
            data: this.data.sales,
            type: 'bar',
            //设置柱内数字
            label: {
              show: true,
              position: 'inside',
              color:'#ffffff'
            },
            //设置柱子颜色
            itemStyle: {
              color: 'red'
            },
          }
        ]
      };
      myChart.setOption(option)
    }
  },
  mounted() {
    this.getData();

  },

}
</script>

<style scoped>
#sale{
  width: 100%;
  height: 270px;
}
</style>