<template>
  <div class="dashboard-layout">
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>管理后台</h2>
      </div>
      <nav class="sidebar-nav">
        <ul>
          <li>
            <NuxtLink to="/dashboard" class="nav-link">
              <span class="icon">📊</span>
              <span>仪表盘</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dashboard/users" class="nav-link">
              <span class="icon">👥</span>
              <span>用户管理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dashboard/products" class="nav-link">
              <span class="icon">📦</span>
              <span>产品管理</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dashboard/settings" class="nav-link">
              <span class="icon">⚙️</span>
              <span>系统设置</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="sidebar-footer">
        <NuxtLink to="/" class="home-link">
          <span class="icon">🏠</span>
          <span>返回首页</span>
        </NuxtLink>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <h1>后台管理系统</h1>
      </div>
      <div class="content-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-nav {
  flex-grow: 1;
  padding: 20px 0;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s;
}

.nav-link:hover, .nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.icon {
  margin-right: 10px;
  font-size: 1.2em;
}

.sidebar-footer {
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.home-link {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.home-link:hover {
  color: white;
}

.content {
  flex-grow: 1;
  background-color: #f5f7fa;
}

.content-header {
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.content-body {
  padding: 20px;
}
</style>
