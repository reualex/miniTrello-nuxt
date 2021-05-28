<template>
  <div class="container">
    <div class="icon-container">
      <img
        src="~/assets/png/google-icon.png"
        class="icon icon-google"
        @click.prevent="loginClick('google')"
      />

      <img
        src="~/assets/png/github-icon.png"
        @click.prevent="loginClick('github')"
        class="icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'empty',
  head() {
    return {
      title: `Login`,
    }
  },
  methods: {
    async loginClick(methodType) {
      try {
        await this.$auth.loginWith(methodType)
      } catch (error) {
        console.log('Error: ', error)
      }
    },
  },
  mounted() {
    this.$auth.loggedIn && this.$router.push('/')
  },
}
</script>

<style lang="scss">
.icon {
  cursor: pointer;
  &-container {
    display: flex;
    justify-content: center;
  }
  &-google {
    margin-right: 30px;
  }

  &:hover {
    transition: 0.2s;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.18);
  }
}
</style>
