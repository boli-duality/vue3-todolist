<template>
  <div class="home-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div
          class="navbar-brand"
          style="cursor: default; user-select: none"
          @dragstart.prevent
        >
          <img class="logo" src="../assets/logo.jpg" alt="" />
          ToDoList
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/all">全部</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/doing">进行中</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/done">已完成</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/delete">已删除</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>
<style lang="scss" scoped>
.home-container {
  width: 1200px;
  margin: auto;
}

.logo {
  width: 30px;
  height: 30px;
}
</style>
