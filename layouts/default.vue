<template>
  <div>
    <client-only>
      <AppHeader />
      <Nuxt />
    </client-only>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader'
export default {
  name: 'default',
  components: {
    AppHeader,
  },
}
</script>
