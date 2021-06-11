<template>
  <div class="container">
    <div class="icon-container">
      <img
        src="~/assets/png/google-icon.png"
        class="icon icon-google"
        @click.prevent="loginClick(loginType.google)"
      />

      <img
        src="~/assets/png/github-icon.png"
        @click.prevent="loginClick(loginType.git)"
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
  data() {
    return {
      loginType: Object.freeze({ google: 'google', git: 'github' }),
      openWindow: null,
    }
  },

  methods: {
    loginClick(methodType) {
      const params = `width=600,height=600,left=600,top=200`

      this.openWindow = window.open(`callback?${methodType}`, '_blank', params)
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
