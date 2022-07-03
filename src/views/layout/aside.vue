<template>
  <el-aside width="200px">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index='/Staffmanagement'>员工管理</el-menu-item>

          <el-menu-item index='/permissions'>权限列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index='/role'>角色列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group></el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="1-4">
        <template #title>文章</template>
        <el-menu-item index="TheArticleNumber">文章排名</el-menu-item>
        <el-menu-item index="Tocreatethearticle">创建文章</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style>
.el-menu{
  height: 100%;
  background-color:#304156 ;
}
.el-sub-menu{
  color:#304156 ;
}
</style>