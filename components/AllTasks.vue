<template>
  <div class="flex flex-col">
    <!-- <ul v-if="tasks.length" class="one-column-tasks">
      <li v-for="task in tasks" :key="task.id" class="mb-3 cursor-pointer">
        <v-card>
          {{ task.name }}
        </v-card>
      </li>
    </ul> -->
    <draggable
      v-model="myTasks"
      group="tasks"
      @start="drag = true"
      @end="drag = false"
      class="test-drag"
    >
      <div
        v-for="task in myTasks"
        :key="task.id"
        class="cursor-pointer bg-white mb-2 border-2 rounded"
      >
        {{ task.name }}
      </div>
    </draggable>
    <form class="task-form mt-auto" @submit.prevent="addTask(columnId)">
      <label class="mr-4" :for="columnId">Create new task:</label>

      <BasicInput
        v-model="taskName"
        :id="columnId"
        label="New Task"
        placeholder="Enter your task name"
        name="taskName"
        type="text"
      />

      <v-btn type="submit" class="mt-3">Add task</v-btn>
    </form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import BasicInput from '~/components/Common/BasicInput'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AllTasks',
  props: {
    tasks: { type: Array, default: [] },
    columnId: { type: String, default: '' },
    boardId: { type: String, default: '' },
  },
  components: {
    BasicInput,
    draggable,
  },
  data() {
    return {
      taskName: '',
    }
  },
  computed: {
    ...mapGetters('sessionStorage', ['getColumnTasks']),
    myTasks: {
      get() {
        const testTasks = this.getColumnTasks(this.boardId, this.columnId)
        return testTasks
      },

      set(value) {
        this.$store.commit('sessionStorage/updateList', {
          tasks: value,
          boardId: this.boardId,
          columnId: this.columnId,
        })
      },
    },
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
      this.taskName = ''
    },
  },
}
</script>

<style lang="scss">
.test-drag {
  height: 450px;
}
</style>
