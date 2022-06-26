<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  //   text-align: center;
  //   line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  //   text-align: center;
  //   line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  //   text-align: center;
  //   line-height: 160px;
}

.el-container {
//   margin-bottom: 40px;
  height: 100%;
}
</style>
