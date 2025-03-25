<template>
  <div class="dashboard-page">
    <h1>仪表盘</h1>
    <div class="dashboard-stats">
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-info">
          <div class="stat-value">128</div>
          <div class="stat-label">用户总数</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📦</div>
        <div class="stat-info">
          <div class="stat-value">45</div>
          <div class="stat-label">产品总数</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-info">
          <div class="stat-value">¥9,876</div>
          <div class="stat-label">本月收入</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-info">
          <div class="stat-value">24%</div>
          <div class="stat-label">增长率</div>
        </div>
      </div>
    </div>
    <div class="recent-activity">
      <h2>最近活动</h2>
      <div class="activity-list">
        <div class="activity-item">
          <div class="activity-time">10:25</div>
          <div class="activity-content">新用户注册: 张三</div>
        </div>
        <div class="activity-item">
          <div class="activity-time">09:40</div>
          <div class="activity-content">产品更新: 智能手表 v2.0</div>
        </div>
        <div class="activity-item">
          <div class="activity-time">08:15</div>
          <div class="activity-content">系统维护完成</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
});
</script>

<style scoped>
.dashboard-page {
  padding: 20px;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.stat-icon {
  font-size: 2.5rem;
  margin-right: 20px;
  color: #3498db;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
}

.stat-label {
  color: #7f8c8d;
  margin-top: 5px;
}

.recent-activity {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.activity-list {
  margin-top: 15px;
}

.activity-item {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #f1f1f1;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-time {
  width: 60px;
  color: #7f8c8d;
}

.activity-content {
  flex-grow: 1;
  color: #2c3e50;
}
</style>
