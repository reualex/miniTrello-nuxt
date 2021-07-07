<template>
  <div class="flex items-center justify-between px-2">
    <p>{{ task.name }}</p>
    <button type="button" class="delete-btn" @click="handleDelete">X</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TaskCard',
  props: {
    task: { type: Object, default: () => {} },
    taskId: { type: String, default: '' },
    columnId: { type: String, default: '' },
    boardId: { type: String, default: '' },
  },
  methods: {
    ...mapActions('sessionStorage', ['removeTask']),
    handleDelete() {
      this.removeTask({
        taskId: this.taskId,
        columnId: this.columnId,
        boardId: this.boardId,
      })
    },
  },
}
</script>

<style lang="scss"></style>
