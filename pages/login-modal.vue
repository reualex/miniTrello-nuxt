<template>
  <div class="container">
    <div v-if="!error">
      <LoadingIcon class="loading-spinner" :size="50" />
    </div>
    <div v-else>{{ error }}</div>
  </div>
</template>

<script>
import LoadingIcon from '~/components/icons/LoadingIcon'
export default {
  name: 'LoginModal',
  layout: 'empty',
  components: {
    LoadingIcon,
  },
  data() {
    return {
      error: '',
    }
  },
  // async asyncData({ $auth, route }) {
  //   // TODO: Try to use AsyncData or Fetch
  //   console.log('route: ', route)
  //   console.log('auth: ', $auth.loggedIn)

  //   if (!$auth.loggedIn) {
  //     try {
  //       await $auth.loginWith(route.query.type)
  //     } catch (error) {
  //       console.error('Error: ', error)
  //     }
  //   }
  // },
  mounted() {
    if (!this.$auth.loggedIn) {
      try {
        setTimeout(async () => {
          await this.$auth.loginWith(this.$route.query.type)
        }, 1000)
      } catch (error) {
        console.error('Error: ', error)
        this.error = error + '!!!!'
      }
    } else {
      this.error = 'Your are loggined'
    }
  },
}
</script>

<style lang="scss">
.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
