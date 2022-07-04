<template>
  <div class="navbar">
    <div class="navbar-left">
      <Hamburger class="hamburger-container"></Hamburger>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="navbar-right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="40" :src="avatarUrl" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item command="profile">课程主页</el-dropdown-item>
            <el-dropdown-item command="logout" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRouteR } from 'vue-router'
import { useStore } from 'vuex'
import Breadcrumb from '../../components/Breadcrumb'
import Hamburger from '../../components/Hamburger'
const store = useStore()
const router = useRouter()
const avatarUrl = computed(() => {
  return store.getters.userInfo.avatar
})

const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
//回到首页
const handleToHome = () => {
  router.push('/')
  // console.log(123);
}
const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: white;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

  .navbar-left {
    float: left;
  }
  .navbar-right {
    float: right;
  }

  .el-dropdown {
    margin: 5px 10px 0 0;
  }

  .el-avatar {
    background: none;
  }

  .hamburger-container {
    float: left;
  }
}
</style>
