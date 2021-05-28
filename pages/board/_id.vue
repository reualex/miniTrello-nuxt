<template>
  <div class="container">
    <h2 class="h2">Board name: {{ currentBoard.name }}</h2>
    <h3>Columns:</h3>
    <ul
      v-if="currentBoard.columns && currentBoard.columns.length"
      class="flex overflow-x-auto"
    >
      <li
        v-for="column in currentBoard.columns"
        :key="column.id"
        class="one-column"
      >
        <p>{{ column.name }}</p>

        <hr class="border-indigo-100" />

        <!-- TaskList.vue && TaskItem.vue -->
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
        <form class="task-form" @submit.prevent="addTask($event, column.id)">
          <label class="mr-4">Create new task:</label>

          <BasicInput
            v-model="taskName"
            label="New Task"
            placeholder="Enter your task name"
            name="taskName"
            type="text"
          />

          <v-btn type="submit" class="mt-3">Add task</v-btn>
        </form>
      </li>
    </ul>
    <span v-else>Nothing column, create new</span>

    <form class="pt-5 flex flex-col" @submit.prevent="addColumn">
      <label class="mr-4">Create new column:</label>

      <BasicInput
        v-model="columnName"
        label="New Column"
        placeholder="Please, enter column name"
        name="taskName"
        type="text"
        class="max-w-xs mt-4"
      />
      <v-btn type="submit" class="max-w-xs mt-4">Add</v-btn>
    </form>
  </div>
</template>

<script>
import BasicInput from '~/components/Common/BasicInput'
export default {
  name: 'CurrentBoard',
  data() {
    return {
      boardId: this.$route.params.id,
      columnName: '',
      taskName: '',
    }
  },
  components: {
    BasicInput,
  },
  methods: {
    addColumn(e) {
      const date = new Date()
      this.columnName.trim() &&
        this.$store.dispatch('boards/addColumnToBoard', {
          boardId: this.boardId,
          name: this.columnName,
          tasks: [],
          id: String(
            date.getMinutes() + date.getSeconds() + date.getMilliseconds()
          ),
        })
      e.target.reset()
    },
    addTask(e, columnId) {
      const date = new Date()
      this.taskName.trim() &&
        this.$store.dispatch('boards/addNewTask', {
          columnId,
          boardId: this.boardId,
          name: this.taskName,
          id: String(
            date.getMinutes() + date.getSeconds() + date.getMilliseconds()
          ),
        })
      e.target.reset()
    },
  },
  computed: {
    currentBoard() {
      return this.$store.getters['boards/getCurrentBoard'](this.boardId)
    },
  },
  created() {
    !this.currentBoard.id && this.$router.push('/')
  },
}
</script>

<style lang="scss">
.one-column {
  @apply flex flex-col p-3;
  max-width: 300px;
  min-height: 500px;
  background: #efefef;
  &:not(:last-child) {
    margin-right: 10px;
  }

  &-tasks {
    @apply py-4;
    overflow-y: scroll;
    max-height: 300px;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}

.task-form {
  @apply mt-auto;
}
</style>
