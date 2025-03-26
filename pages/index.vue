<template>
  <div>
    <h1>欢迎来到首页</h1>
    <NuxtLink to="/dashboard">进入仪表盘</NuxtLink>
  </div>
</template>

<script setup>
// 你可以在这里添加任何需要的脚本逻辑
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #2c3e50;
}

a {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

a:hover {
  background-color: #2980b9;
}
</style>
