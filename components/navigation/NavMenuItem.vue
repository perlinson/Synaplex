<template>
  <div>
    <v-list-item
      v-if="!menuItem.items"
      :input-value="menuItem.value"
      :to="localePath(menuItem.link)"
      :exact="menuItem.exact"
      :disabled="menuItem.disabled"
      active-class="primary--text"
      link
    >
      <template v-slot:prepend>
        <v-icon :size="small ? 'small' : 'default'" :class="{ 'grey--text': menuItem.disabled }">
          {{ menuItem.icon || 'mdi-circle-medium' }}
        </v-icon>
      </template>
      <v-list-item-title>
        {{ menuItem.key ? $t(menuItem.key) : menuItem.text }}
      </v-list-item-title>
    </v-list-item>

    <v-list-group
      v-else
      :value="menuItem.regex ? menuItem.regex.test($route.path) : false"
      :disabled="menuItem.disabled"
      :sub-group="subgroup"
      :to="localePath(menuItem.link)"
      link
    >

      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">
          <template v-slot:prepend v-if="!subgroup">
            <v-icon :size="small ? 'small' : 'default'">{{ menuItem.icon || 'mdi-circle-medium' }}</v-icon>
          </template>
          <v-list-item-title>
            {{ menuItem.key ? $t(menuItem.key) : menuItem.text }}
          </v-list-item-title>
        </v-list-item>
      </template>

      <slot></slot>

    </v-list-group>
  </div>
</template>

<script>
/*
|---------------------------------------------------------------------
| Navigation Menu Item Component
|---------------------------------------------------------------------
|
| Handles both menu items and menu groups
*/
export default {
  props: {
    menuItem: {
      type: Object,
      default() {
        return {}
      }
    },
    subgroup: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>
