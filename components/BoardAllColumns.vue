<template>
  <ul v-if="columns && columns.length" class="flex overflow-x-auto">
    <li v-for="column in columns" :key="column.id" class="one-column">
      <p>{{ column.name }}</p>

      <hr class="border-indigo-100" />
      <AllTasks
        :tasks="column.tasks"
        :column-id="column.id"
        :board-id="boardId"
      />
    </li>
  </ul>
  <span v-else>Nothing column, create new</span>
</template>

<script>
import AllTasks from '~/components/AllTasks'
export default {
  name: 'BoardAllColumns',
  props: {
    columns: { type: Array, default: [] },
    boardId: { type: String, default: '' },
  },
  components: {
    AllTasks,
  },
  data() {
    return {
      taskName: '',
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
