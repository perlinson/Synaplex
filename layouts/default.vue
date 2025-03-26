<template>
  <div class="default-layout">
    <header class="site-header">
      <h1 class="site-title">我的 Nuxt 应用</h1>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="site-footer">
      <p>&copy; 2025 我的 Nuxt 应用</p>
    </footer>
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-header {
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
}

.site-title {
  margin: 0;
  font-size: 1.5rem;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.site-footer {
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  text-align: center;
  color: #6c757d;
}
</style>
