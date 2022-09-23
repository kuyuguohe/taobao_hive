<template>
  <div class="all">
    <el-card class="box-card box1">
      <div>双“11”商品销量排行前五</div>
      <goods-result/>
    </el-card>
    <el-card class="box-card box2">
      <div>男女购物比例</div>
      <gender-result/>
    </el-card>
    <el-card class="box-card box3">
      <div>买家消费行为比例图</div>
      <buyer-result/>
    </el-card>
  </div>
</template>

<script>
import GoodsResult from "@/components/goods_result";
import BuyerResult from "@/components/buyer_result";
import GenderResult from "@/components/gender_result";
export default {
  name: "up",
  components:{
    BuyerResult,
    GoodsResult,
    GenderResult
  }
}
</script>

<style scoped>
.all{
  display: flex;
}
.box-card{
  margin-left: 1%;
  margin-top: 10px;
  height: 280px;
}
.box1{
  width: 38%;

}
.box2{
  width: 28%;
}
.box3{
  width: 28%;
}
</style>