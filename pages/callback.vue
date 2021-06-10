<template>
  <div class="container">
    <p>Callback page</p>
    <p>{{ param }}</p>
  </div>
</template>

<script>
export default {
  name: 'callback',
  layout: 'empty',
  data() {
    return {
      type: 'google',
      param: this.$route.params,
    }
  },
  methods: {
    closeWindow() {
      //   window.close()
    },
  },
  async mounted() {
    if (!this.$auth.loggedIn) {
      try {
        await this.$auth.loginWith('google').then(() => this.closeWindow())
      } catch (error) {
        console.error('Error: ', error)
      }
    }
  },
}
</script>
