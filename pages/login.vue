<template>
  <div class="container">
    <div class="icon-container">
      <img
        src="~/assets/png/google-icon.png"
        class="icon icon-google"
        @click.prevent="loginClick(loginTypes.google)"
      />

      <img
        src="~/assets/png/github-icon.png"
        @click.prevent="loginClick(loginTypes.git)"
        class="icon"
      />
    </div>
  </div>
</template>

<script>
/**
 * [x] Enums
 */
import { mapGetters } from 'vuex'
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
      openWindow: null,
      closeModalWindow: false,
    }
  },
  computed: {
    ...mapGetters({ loginTypes: 'getLoginTypes' }),
  },
  watch: {
    closeModalWindow(value) {
      console.log('WATCH VALUE: ', value)
      if (value) {
        const bc = new BroadcastChannel('login_channel')
        bc.close()
        this.openWindow.close()
        // don't work $router.push
        // this.$router.push('/')
        window.location.replace('/')
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
