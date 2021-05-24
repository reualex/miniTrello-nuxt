<template>
  <div class="container">
    <div class="icon-container">
      <img
        src="~/assets/png/google-icon.png"
        class="icon icon-google"
        @click.prevent="loginGoogleClicked"
      />

      <img
        src="~/assets/png/github-icon.png"
        @click.prevent="loginGitClicked"
        class="icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'empty',
  head() {
    return {
      title: `Login`,
    }
  },
  methods: {
    async loginGitClicked() {
      try {
        let res = await this.$auth.loginWith('github')
        console.log('login result: ', res)
      } catch (err) {
        console.log('login error: ', err)
      }
    },
    async loginGoogleClicked() {
      try {
        let res = await this.$auth.loginWith('google')
        console.log('login result: ', res)
      } catch (err) {
        console.log('login error: ', err)
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
    -webkit-box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.18);
    -moz-box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.18);
    box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.18);
  }
}
</style>
