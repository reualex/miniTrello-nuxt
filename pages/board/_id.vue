<template>
  <div class="container">
    <h2 class="h2">Board name: {{ currentBoard.name }}</h2>
    <h3>Columns:</h3>
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
        </ul>
        <span v-else>Nothing tasks</span>
        <!--
        <div class="task-form">
          <label :for="`newTask-${column.id}`" class="mr-4"
            >Create new column:</label
          >
          <input
            :id="`newTask-${column.id}`"
            class="mr-4"
            v-model="taskName"
            placeholder="please, enter task name"
          />
          <v-btn @click="addTask(column.id)">Add</v-btn>
        </div>
        -->
      </li>
    </ul>
    <span v-else>Nothing column, create new</span>

    <div class="column-form">
      <label for="newColumn" class="mr-4">Create new column:</label>
      <input
        id="newColumn"
        class="mr-4"
        v-model="columnName"
        placeholder="please, enter board name"
      />
      <v-btn @click="addColumn">Add</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardId: this.$route.params.id,
      columnName: '',
      // taskName: '',
    }
  },
  methods: {
    addColumn() {
      const date = new Date()
      this.columnName.trim() &&
        this.$store.dispatch('boards/addColumnToBoard', {
          boardId: this.boardId,
          name: this.columnName,
          id: String(
            date.getMinutes() + date.getSeconds() + date.getMilliseconds()
          ),
        })
      this.columnName = ''
    },
    addTask(columnId) {
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
      this.columnName = ''
    },
  },
  computed: {
    currentBoard() {
      return (
        this.$store.getters['boards/getCurrentBoard'](this.boardId) || {
          name: '',
        }
      )
    },
    tasks() {
      return this.currentBoard.tasks
    },
  },
  created() {
    console.log('currentBoard: ', this.currentBoard)
    !this.currentBoard.id && this.$router.push('/')
  },
}
</script>

<style lang="scss">
.one-column {
  @apply flex flex-col;
  min-width: 200px;
  min-height: 500px;
  background: gray;
  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
