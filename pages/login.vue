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
    }
  },
  // computed: {
  //   windowOpener() {
  //     return window.params
  //   },
  // },
  methods: {
    // async loginClick(methodType) {
    //   try {
    //     await this.$auth.loginWith(methodType)
    //   } catch (error) {
    //     console.error('Error: ', error)
    //   }
    // },
    loginClick(methodType) {
      const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`
      window.open(`/callback?${methodType}`, methodType, params)
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
