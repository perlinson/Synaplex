<template>
  <v-menu offset-y left transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon class="elevation-2" v-bind="props">
        <v-badge
          color="success"
          dot
          bordered
          offset-x="10"
          offset-y="10"
        >
          <v-avatar size="40">
            <v-img src="/images/avatars/avatar1.svg"></v-img>
          </v-avatar>
        </v-badge>
      </v-btn>
    </template>

    <!-- user menu list -->
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        :to="localePath(item.link)"
        :exact="item.exact"
        :disabled="item.disabled"
        link
      >
        <template v-slot:prepend>
          <v-icon size="small" :class="{ 'grey--text': item.disabled }">{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.key ? $t(item.key) : item.text }}</v-list-item-title>
      </v-list-item>

      <v-divider class="my-1"></v-divider>

      <v-list-item :to="localePath('/auth/signin')">
        <template v-slot:prepend>
          <v-icon size="small">mdi-logout-variant</v-icon>
        </template>
        <v-list-item-title>{{ $t('menu.logout') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import config from '../../configs'
/*
|---------------------------------------------------------------------
| Toolbar User Component
|---------------------------------------------------------------------
|
| User dropdown menu for the toolbar
*/
export default {
  data() {
    return {
      menu: config.toolbar.user
    }
  }
}
</script>
