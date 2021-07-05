<template>
  <div class="flex items-center justify-between px-2">
    <p>{{ task.name }}</p>
    <button class="delete-btn">X</button>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: { type: Object, default: () => {} },
  },

  mounted() {
    console.log('TASK: ', this.task)
  },
}
</script>

<style lang="scss"></style>
