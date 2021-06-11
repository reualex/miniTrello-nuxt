<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: 'callback',
  layout: 'empty',

  computed: {
    type() {
      return window.location.search.substr(1)
    },
  },
  async mounted() {
    if (!this.$auth.loggedIn) {
      try {
        await this.$auth.loginWith(this.type)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
  },
}
</script>
