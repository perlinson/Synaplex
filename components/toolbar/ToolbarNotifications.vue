<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-badge
        bordered
        content="6"
        offset-x="22"
        offset-y="22"
      >
        <v-btn icon v-bind="props">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-badge>
    </template>

    <!-- dropdown card -->
    <v-card>
      <v-list three-line density="compact" max-width="400">
        <div class="pa-2 font-weight-bold text-subtitle-1">通知</div>
        <div v-for="(item, index) in items" :key="index">
          <v-divider v-if="index > 0 && index < items.length" inset></v-divider>

          <v-list-item @click="() => {}">
            <template v-slot:prepend>
              <v-avatar size="32" :color="item.color">
                <v-icon dark size="small">{{ item.icon }}</v-icon>
              </v-avatar>
            </template>
            <div>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{ item.subtitle }}</v-list-item-subtitle>
            </div>
            <template v-slot:append>
              <div class="text-caption">{{ item.time }}</div>
            </template>
          </v-list-item>
        </div>
      </v-list>

      <div class="text-center py-2">
        <v-btn size="small">查看全部</v-btn>
      </div>
    </v-card>
  </v-menu>
</template>

<script>
/*
|---------------------------------------------------------------------
| Toolbar Notifications Component
|---------------------------------------------------------------------
|
| Notification dropdown menu for the toolbar
*/
export default {
  data() {
    return {
      items: [
        {
          title: '新的用户注册',
          subtitle: '已有 5 个新用户注册',
          time: '刚刚',
          color: 'primary',
          icon: 'mdi-account-outline'
        },
        {
          title: '新订单',
          subtitle: '有 1 个新订单待处理',
          time: '2 分钟前',
          color: 'success',
          icon: 'mdi-cart-outline'
        },
        {
          title: '服务器警告',
          subtitle: 'CPU 使用率超过 90%',
          time: '1 小时前',
          color: 'error',
          icon: 'mdi-server'
        },
        {
          title: '新评论',
          subtitle: '有 3 条新评论待审核',
          time: '1 天前',
          color: 'info',
          icon: 'mdi-comment-text-outline'
        },
        {
          title: '更新可用',
          subtitle: '有新版本可用',
          time: '1 周前',
          color: 'warning',
          icon: 'mdi-update'
        }
      ]
    }
  }
}
</script>
