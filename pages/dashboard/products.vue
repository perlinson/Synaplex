<template>
  <div class="products-page">
    <h1>产品管理</h1>
    <div class="actions-bar">
      <button class="btn btn-primary">添加新产品</button>
      <div class="search-box">
        <input type="text" placeholder="搜索产品..." />
        <button>搜索</button>
      </div>
    </div>
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="product-price">¥{{ product.price }}</p>
          <p class="product-stock">库存: {{ product.stock }}</p>
          <div class="product-actions">
            <button class="btn btn-edit">编辑</button>
            <button class="btn btn-delete">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
});

const products = [
  { 
    id: 1, 
    name: '苹果 MacBook Pro', 
    price: 1299, 
    stock: 42, 
    image: 'https://placehold.co/200x150/3498db/ffffff?text=苹果 MacBook Pro' 
  },
  { 
    id: 2, 
    name: '无线鼠标', 
    price: 899, 
    stock: 28, 
    image: 'https://placehold.co/200x150/e74c3c/ffffff?text=无线鼠标' 
  },
  { 
    id: 3, 
    name: '苹果 iPhone', 
    price: 699, 
    stock: 15, 
    image: 'https://placehold.co/200x150/2ecc71/ffffff?text=苹果 iPhone' 
  },
  { 
    id: 4, 
    name: '机械键盘', 
    price: 5999, 
    stock: 10, 
    image: 'https://placehold.co/200x150/f39c12/ffffff?text=机械键盘' 
  },
  { 
    id: 5, 
    name: '苹果 iPad', 
    price: 3999, 
    stock: 23, 
    image: 'https://placehold.co/200x150/9b59b6/ffffff?text=苹果 iPad' 
  },
  { 
    id: 6, 
    name: '蓝牙耳机', 
    price: 2999, 
    stock: 18, 
    image: 'https://placehold.co/200x150/1abc9c/ffffff?text=蓝牙耳机' 
  },
];
</script>

<style scoped>
.products-page {
  padding: 20px;
}

.actions-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-box {
  display: flex;
}

.search-box input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  width: 250px;
}

.search-box button {
  padding: 8px 16px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 150px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #2c3e50;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 5px 0;
}

.product-stock {
  color: #7f8c8d;
  margin: 5px 0 15px;
}

.product-actions {
  display: flex;
  gap: 10px;
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
