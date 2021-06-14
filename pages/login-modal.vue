<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: 'LoginModal',
  layout: 'empty',
  computed: {
    // type() {
    //   return this.$route.query.type
    // },
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
  async mounted() {
    if (!this.$auth.loggedIn) {
      try {
        await this.$auth.loginWith(this.$route.query.type)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
  },
}
</script>
