<template>
  <div>
    <h1 class="sidebar-title">usian-admin</h1>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script setup>
import sidebarMenu from './sidebarMenu'
</script>

<style lang="scss" scoped>
.sidebar-title {
  text-align: center;
  padding: 15px 0;
  font-size: 22px;
  color: #fff;
}
</style>
