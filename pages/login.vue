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
/**
 * [] Enums
 */
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
      closeModalWindow: false,
    }
  },
  watch: {
    closeModalWindow(value) {
      console.log('WATCH VALUE: ', this.$router)
      if (value) {
        const bc = new BroadcastChannel('login_channel')
        bc.close()
        // this.openWindow.close()
        // don't work $router.push
        this.$router.push({ name: 'Home' })
        // window.location.replace('/')
      }
    },
  },

  methods: {
    async loginClick(methodType) {
      const params = `width=600,height=600,left=600,top=200`
      const routeData = this.$router.resolve({
        name: 'login-modal',
        query: { type: methodType },
      })
      const bc = new BroadcastChannel('login_channel')
      bc.onmessage = ev => {
        console.log(`message event received: ${ev.data}`)
        this.closeModalWindow = ev.data
      }

      // [x] TODO: URL query
      this.openWindow = window.open(routeData.href, '_blank', params)

      // if (!this.$auth.loggedIn) {
      //   try {
      //     await this.$auth.loginWith(methodType)
      //   } catch (error) {
      //     console.error('Error: ', error)
      //   }
      // }
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
