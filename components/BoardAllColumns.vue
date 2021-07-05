<template>
  <ul v-if="columns && columns.length" class="flex overflow-x-auto">
    <li v-for="column in columns" :key="column.id" class="one-column">
      <div class="flex justify-between">
        <p>{{ column.name }}</p>
        <button
          class="delete-btn"
          type="button"
          @click="deleteClick(column.id)"
        >
          X
        </button>
      </div>

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
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions('sessionStorage', ['removeColumn']),
    deleteClick(columnId) {
      this.removeColumn({ boardId: this.boardId, columnId })
    },
  },
}
</script>

<style lang="scss"></style>
