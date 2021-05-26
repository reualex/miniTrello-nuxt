<template>
  <div class="container all-boards">
    <!--
    <ul v-if="currentBoard.columns && currentBoard.columns.length" class="flex">
      <li
        v-for="column in currentBoard.columns"
        :key="column.id"
        class="one-column"
      >
        <p>{{ column.name }}</p>

        <hr />

        <ul v-if="tasks && tasks.length">
          <li v-for="task in tasks">{{ task.name }}</li>
        </ul> -->
  </div>
</template>

<script>
export default {
  name: 'AllColumns',
  props: {
    currentBoard: { type: Object, default: {} },
  },
  data() {
    return {
      allColumns: this.currentBoard.columns,
    }
  },
}
</script>

<style lang="scss">
.delete-btn {
  width: 32px;
  height: 32px;
  z-index: 20;
  line-height: 32px;
  text-align: center;
}
</style>
