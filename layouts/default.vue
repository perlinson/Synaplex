<template>
  <v-app>
    <div
      v-shortkey.once="['ctrl', '/']"
      class="d-flex flex-grow-1"
      @shortkey="onKeyup"
    >
      <!-- Navigation drawer -->
      <v-navigation-drawer
        v-model="drawer"
        :theme="menuTheme === 'dark' ? 'dark' : 'light'"
        floating
        :rail="mini"
        @update:rail="val => mini = val"
      >
        <!-- Navigation menu info -->
        <template v-slot:prepend>
          <div class="pa-2">
            <div class="title font-weight-bold text-uppercase primary--text">{{ product.name }}</div>
            <div class="text-overline grey--text">{{ product.version }}</div>
          </div>
        </template>

        <!-- Navigation menu -->
        <main-menu :menu="navigation.menu" />

        <!-- Navigation menu footer -->
        <template v-slot:append>
          <!-- Footer navigation links -->
          <div class="pa-1 text-center">
            <v-btn
              v-for="(item, index) in navigation.footer"
              :key="index"
              :href="item.href"
              :target="item.target"
              size="small"
              variant="text"
            >
              {{ item.key ? $t(item.key) : item.text }}
            </v-btn>
          </div>

          <!-- REMOVE ME - Shop Demo purposes -->
          <div class="pa-1">
            <v-btn
              class="buy-button"
              block
              color="primary"
              href="https://store.vuetifyjs.com/products/lux-admin-pro/"
              target="_blank"
            >
              购买模板
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <!-- Toolbar -->
      <v-app-bar
        app
        :color="isToolbarDetached ? 'surface' : undefined"
        :flat="isToolbarDetached"
        :class="[isToolbarDetached ? 'mt-3 mx-3 elevation-1' : '']"
        :dark="toolbarTheme === 'dark'"
      >
        <v-card class="flex-grow-1 d-flex" :class="[isToolbarDetached ? 'pa-1 mt-3 mx-1' : 'pa-0 ma-0']" :flat="!isToolbarDetached">
          <div class="d-flex flex-grow-1 align-center">

            <!-- search input mobile -->
            <v-text-field
              v-if="showSearch"
              append-icon="mdi-close"
              placeholder="Search"
              hide-details
              dense
              flat
              autofocus
              @click:append="showSearch = false"
            ></v-text-field>

            <div v-else class="d-flex flex-grow-1 align-center">
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

              <v-spacer class="d-none d-lg-block"></v-spacer>

              <!-- search input desktop -->
              <v-text-field
                ref="search"
                class="mx-1 hidden-xs-only"
                :placeholder="$t('menu.search')"
                prepend-inner-icon="mdi-magnify"
                filled
                rounded
                dense
              ></v-text-field>

              <v-spacer class="d-block d-sm-none"></v-spacer>

              <v-btn class="d-block d-sm-none" icon @click="showSearch = true">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>

              <toolbar-language />

              <toolbar-currency />

              <toolbar-notifications />

              <toolbar-user />
            </div>
          </div>
        </v-card>
      </v-app-bar>

      <v-main>
        <v-container class="fill-height" :fluid="!isContentBoxed">
          <v-layout>
            <NuxtPage />
          </v-layout>
        </v-container>

        <v-footer app inset>
          <v-spacer></v-spacer>
          <div class="overline">
            Built with <v-icon small color="pink">mdi-heart</v-icon> <a class="text-decoration-none" href="https://indielayer.com" target="_blank">@indielayer</a>
          </div>
        </v-footer>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import { useAppStore } from '../stores/app'
import MainMenu from '@/components/navigation/MainMenu.vue'
import configs from '@/configs'

const { navigation } = configs

export default {
  components: {
    MainMenu
  },
  data() {
    return {
      navigation,
      drawer: null,
      mini: false,
      showSearch: false
    }
  },
  computed: {
    product() {
      const appStore = useAppStore()
      return appStore.product
    },
    isContentBoxed() {
      const appStore = useAppStore()
      return appStore.isContentBoxed
    },
    menuTheme() {
      const appStore = useAppStore()
      return appStore.menuTheme
    },
    toolbarTheme() {
      const appStore = useAppStore()
      return appStore.toolbarTheme
    },
    isToolbarDetached() {
      const appStore = useAppStore()
      return appStore.isToolbarDetached
    },
    isRTL() {
      const appStore = useAppStore()
      return appStore.isRTL
    }
  },
  mounted() {
  },
  methods: {
    onKeyup() {
      this.$refs.search.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.buy-button {
  text-transform: none;
}
</style>
