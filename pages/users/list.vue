<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center py-3">
      <div>
        <div class="display-1">Users</div>
        <v-breadcrumbs :items="breadcrumbs" class="pa-0 py-2"></v-breadcrumbs>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary">
        Create User
      </v-btn>
    </div>

    <v-card>
      <!-- users list -->
      <v-row dense class="pa-2 align-center">
        <v-col cols="6">
          <v-menu offset-y left>
            <template #activator="{ on }">
              <transition name="slide-fade" mode="out-in">
                <v-btn v-show="selectedUsers.length > 0" v-on="on">
                  Actions
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </transition>
            </template>
            <v-list dense>
              <v-list-item @click="verifyUsers">
                <v-list-item-title>Verify</v-list-item-title>
              </v-list-item>
              <v-list-item @click="disableUsers">
                <v-list-item-title>Disable</v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item @click="deleteUsers">
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-col>
        <v-col cols="6" class="d-flex text-right align-center">
          <v-text-field
            v-model="searchQuery"
            append-icon="mdi-magnify"
            class="flex-grow-1 mr-md-2"
            solo
            hide-details
            dense
            clearable
            placeholder="e.g. filter for id, email, name, etc"
            @keyup.enter="searchUser(searchQuery)"
          ></v-text-field>
          <v-btn
            :loading="isLoading"
            icon
            small
            class="ml-2"
            @click="refreshData"
          >
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-data-table
        v-model="selectedUsers"
        show-select
        :headers="headers"
        :items="users"
        :search="searchQuery"
        class="flex-grow-1"
      >
        <!-- 使用简写语法 # 替代 v-slot，并使用动态插槽名称 -->
        <template #[`item.id`]="{ item }">
          <div class="font-weight-bold"># <copy-label :text="item.id + ''" /></div>
        </template>

        <template #[`item.email`]="{ item }">
          <div class="d-flex align-center py-1">
            <v-avatar size="32" class="elevation-1 grey lighten-3">
              <v-img :src="item.avatar" />
            </v-avatar>
            <div class="ml-1 caption font-weight-bold">
              <copy-label :text="item.email" />
            </div>
          </div>
        </template>

        <template #[`item.verified`]="{ item }">
          <v-icon v-if="item.verified" small color="success">
            mdi-check-circle
          </v-icon>
          <v-icon v-else small>
            mdi-circle-outline
          </v-icon>
        </template>

        <template #[`item.disabled`]="{ item }">
          <div>{{ item.disabled.toString() | capitalize }}</div>
        </template>

        <template #[`item.role`]="{ item }">
          <v-chip
            label
            small
            class="font-weight-bold"
            :color="item.role === 'ADMIN' ? 'primary' : undefined"
          >{{ item.role | capitalize }}</v-chip>
        </template>

        <template #[`item.created`]="{ item }">
          <div>{{ item.created | formatDate('ll') }}</div>
        </template>

        <template #[`item.lastSignIn`]="{ item }">
          <div>{{ item.lastSignIn | formatDate('lll') }}</div>
        </template>

        <template #[`item.action`]="{}">
          <div class="actions">
            <v-btn icon :to="localePath('/users/edit')">
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import users from './content/users'
import CopyLabel from '../../components/common/CopyLabel'

export default {
  components: {
    CopyLabel
  },
  data() {
    return {
      isLoading: false,
      breadcrumbs: [{
        text: 'Users',
        disabled: false,
        href: '#'
      }, {
        text: 'List'
      }],

      searchQuery: '',
      selectedUsers: [],
      headers: [
        { text: 'Id', align: 'left', value: 'id' },
        { text: 'Email', value: 'email' },
        { text: 'Verified', value: 'verified' },
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Role', value: 'role' },
        { text: 'Created', value: 'created' },
        { text: 'Last SignIn', value: 'lastSignIn' },
        { text: 'Disabled', value: 'disabled' },
        { text: '', sortable: false, align: 'right', value: 'action' }
      ],

      users
    }
  },
  watch: {
    selectedUsers(val) {

    }
  },
  methods: {
    searchUser() {},
    open() {},
    refreshData() {
      // 刷新数据的逻辑
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
    verifyUsers() {
      // 验证用户的逻辑
      console.log('验证选中的用户', this.selectedUsers)
    },
    disableUsers() {
      // 禁用用户的逻辑
      console.log('禁用选中的用户', this.selectedUsers)
    },
    deleteUsers() {
      // 删除用户的逻辑
      console.log('删除选中的用户', this.selectedUsers)
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
