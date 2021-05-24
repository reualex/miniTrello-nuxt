<template>
  <div class="container">
    Home
    <hr />
    <nuxt-link to="/login">Login page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      title: `Home`,
    }
  },
}
</script>
