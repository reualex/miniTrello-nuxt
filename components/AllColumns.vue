<template>
  <ul class="flex overflow-x-auto">
    <li v-for="column in columns" :key="column.id" class="one-column">
      <p>{{ column.name }}</p>

      <hr class="border-indigo-100" />

      <ul v-if="column.tasks.length" class="one-column-tasks">
        <li
          v-for="task in column.tasks"
          :key="task.id"
          class="mb-3 cursor-pointer"
        >
          <v-card>
            {{ task.name }}
          </v-card>
        </li>
      </ul>
      <span v-else class="pt-4">Nothing tasks</span>
      <form class="task-form" @submit.prevent="addTask(column.id)">
        <label class="mr-4" :for="column.id">Create new task:</label>

        <BasicInput
          v-model="taskName"
          :id="column.id"
          label="New Task"
          placeholder="Enter your task name"
          name="taskName"
          type="text"
        />

        <v-btn type="submit" class="mt-3">Add task</v-btn>
      </form>
    </li>
  </ul>
</template>

<script>
import BasicInput from '~/components/Common/BasicInput'
import { mapActions } from 'vuex'
export default {
  name: 'AllColumns',
  props: {
    columns: { type: Array, default: [] },
    boardId: { type: String, default: '' },
  },
  components: {
    BasicInput,
  },
  data() {
    return {
      taskName: '',
    }
  },

  methods: {
    ...mapActions('sessionStorage', ['addNewTask']),
    addTask(columnId) {
      const newTaskID = this.$uuid.v4()
      this._.trim(this.taskName) &&
        this.addNewTask({
          columnId,
          boardId: this.boardId,
          name: this.taskName,
          id: newTaskID,
        })
    },
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
