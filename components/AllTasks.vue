<template>
  <div class="flex flex-col">
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
        <!-- {{ task.name }} -->
        <TaskCard
          :task="task"
          :taskId="task.id"
          :column-id="columnId"
          :board-id="boardId"
        />
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
import TaskCard from '~/components/TaskCard'
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
    TaskCard,
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
  overflow-y: scroll;
  height: 450px;
  padding: 20px 0;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &:-webkit-scrollbar-track {
    border-radius: 10px;
    background: linear-gradient(to left, #212121, #eceaea);
    box-shadow: 0 0 1px 1px #111;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(to left, #4a4a4a, #404040);
    box-shadow: inset 0 0 1px 1px #191919;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to left, #555555, #4e4e4e);
  }
}
</style>
