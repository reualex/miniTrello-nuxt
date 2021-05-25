<template>
  <div class="container">
    <h2 class="h2">Board name: {{ currentBoard.name }}</h2>
    <h3>Columns:</h3>
    <ul v-if="currentBoard.columns && currentBoard.columns.length">
      <li v-for="column in currentBoard.columns" :key="column.id">
        {{ column.name }}
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
    }
  },
  methods: {
    addColumn() {
      this.columnName.trim() &&
        this.$store.dispatch('boards/addTaskToBoard', {
          boardId: this.boardId,
          name: this.columnName,
          id: `${this.currentBoard.columns || 0}${Math.floor(
            Math.random() * (999 - 100) + 100
          )}`,
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
  },
  created() {
    console.log('currentBoard: ', this.currentBoard)
    !this.currentBoard.id && this.$router.push('/')
  },
}
</script>
