<template>
  <div class="containre">Loader</div>
</template>

<script>
export default {
  name: 'Callback',
  mounted() {
    const bc = new BroadcastChannel('login_channel')
    bc.postMessage(true)
  },
}
</script>
