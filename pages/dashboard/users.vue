<template>
  <div class="users-page">
    <h1>用户管理</h1>
    <div class="users-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>邮箱</th>
            <th>注册时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.registerDate }}</td>
            <td>
              <span :class="`status ${user.status.toLowerCase()}`">{{ user.status }}</span>
            </td>
            <td class="actions">
              <button class="btn btn-edit">编辑</button>
              <button class="btn btn-delete">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
});

const users = [
  { id: 1, username: '张三', email: 'zhangsan@example.com', registerDate: '2025-02-15', status: '活跃' },
  { id: 2, username: '李四', email: 'lisi@example.com', registerDate: '2025-02-20', status: '活跃' },
  { id: 3, username: '王五', email: 'wangwu@example.com', registerDate: '2025-03-01', status: '暂停' },
  { id: 4, username: '赵六', email: 'zhaoliu@example.com', registerDate: '2025-03-10', status: '活跃' },
  { id: 5, username: '钱七', email: 'qianqi@example.com', registerDate: '2025-03-15', status: '活跃' },
];
</script>

<style scoped>
.users-page {
  padding: 20px;
}

.users-table {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #f1f1f1;
}

th {
  background-color: #f8f9fa;
  color: #2c3e50;
  font-weight: 600;
}

tr:hover {
  background-color: #f9f9f9;
}

.status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.status.活跃 {
  background-color: #e6f7ee;
  color: #27ae60;
}

.status.暂停 {
  background-color: #ffeaea;
  color: #e74c3c;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}

.btn-edit {
  background-color: #3498db;
  color: white;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
}
</style>
