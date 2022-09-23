<template>
  <div class="all">
    <el-card class="box-card box1">
      <div>spark支持向量机SVM分类器预测回头客</div>
      <svm-result/>
    </el-card>
    <el-card class="box-card box2">
      <div>各个年龄段对比图</div>
      <age-result/>
    </el-card>
  </div>
</template>

<script>
import SvmResult from "@/components/svm";
import AgeResult from "@/components/age_result";
export default {
  name: "dowm",
  components:{
    SvmResult,
    AgeResult
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
  height: 270px;
}
.box1{
  width: 48%;
}
.box2{
  width: 48%;
}
</style>