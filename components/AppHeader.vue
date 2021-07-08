<template>
  <v-app-bar class="app-bar">
    <div class="app-bar_content">
      <nuxt-link to="/">
        <img class="app-logo" src="/favicon.png" />
      </nuxt-link>

      <div class="app-bar-buttons">
        <div v-if="$auth.loggedIn" class="flex items-center">
          <nuxt-link to="/profile">
            <AppAvatar
              :link="avatarLink"
              :full-name="getFullName"
              class="avatar_sm mr-4"
            />
          </nuxt-link>

          <v-btn @click="$auth.logout($auth.strategy.options.name)">
            Logout
          </v-btn>
        </div>
        <nuxt-link class="app-bar-buttons-login" v-else to="/login">
          <v-btn>Login</v-btn>
        </nuxt-link>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import AppAvatar from '~/components/AppAvatar'
export default {
  name: 'AppHeader',
  components: {
    AppAvatar,
  },
  computed: {
    user() {
      return this.$auth.user
    },
    avatarLink() {
      return this.user.picture || this.user.avatar_url
    },
    getFullName() {
      return this.user.name || this.user.login || '-'
    },
  },
}
</script>

<style lang="scss">
.app {
  &-bar {
    &_content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-logo {
    max-width: 32px;
  }

  &-buttons {
    height: max-content;

    &-login {
    }
  }
}
</style>
