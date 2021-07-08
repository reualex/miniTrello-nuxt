<template>
  <div class="container mt-12">
    <h2 class="h2 ml-28">Profile Info</h2>
    <hr />
    <div class="profile-form max-w-lg mx-auto mt-8">
      <v-card elevation="2">
        <div class="profile-form-container">
          <div class="w-max mb-4 mx-auto">
            <AppAvatar :link="avatarLink" :full-name="getFullName" />
          </div>
          <div class="profile-form-filed mb-8">
            <p class="mr-4">Your name:</p>
            <p>{{ getFullName }}</p>
          </div>
          <div class="profile-form-filed mb-8">
            <p class="mr-4">Your email:</p>
            <p>{{ getEmail }}</p>
          </div>
          <div class="profile-form-filed">
            <p class="mr-4">Your login:</p>
            <p>{{ getLogin }}</p>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import AppAvatar from '~/components/AppAvatar'
export default {
  name: 'Profile',
  middleware: 'auth',
  components: {
    AppAvatar,
  },
  computed: {
    user() {
      return this.$auth.user
    },
    getFullName() {
      return this.user.name || this.user.login || this.user.name || '-'
    },
    getEmail() {
      return this.user.email || '-'
    },
    getLogin() {
      return this.user.login || '-'
    },
    avatarLink() {
      return this.user.picture || this.user.avatar_url
    },
  },
}
</script>

<style lang="scss">
.profile-form {
  &-container {
    padding: 50px 35px;
  }
  &-filed {
    @apply flex ml-8;
  }
}
</style>
