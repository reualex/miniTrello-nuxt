<template>
  <div class="container">
    <h2 class="h2">Board name: {{ currentBoard.name }}</h2>
    <h3>Columns:</h3>
    <AllColumns
      v-if="currentBoard.columns && currentBoard.columns.length"
      :columns="currentBoard.columns"
      :board-id="boardId"
    />
    <span v-else>Nothing column, create new</span>
    <form class="column-form" @submit.prevent="addColumn">
      <BasicInput
        v-model="columnName"
        label="New Column"
        placeholder="Enter your column name"
        name="columnName"
        type="text"
        class="mb-9 max-w-sm"
      />

      <v-btn type="submit" class="max-w-xs mt-4">Add</v-btn>
    </form>
  </div>
</template>

<script>
import BasicInput from '~/components/Common/BasicInput'
import AllColumns from '~/components/AllColumns'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CurrentBoard',
  components: {
    BasicInput,
    AllColumns,
  },

  data() {
    return {
      boardId: this.$route.params.id,
      columnName: '',
      taskName: '',
    }
  },
  methods: {
    ...mapActions('sessionStorage', ['addColumnToBoard', 'addNewTask']),
    addColumn(e) {
      const newColumnID = this.$uuid.v4()

      this._.trim(this.columnName) &&
        this.addColumnToBoard({
          boardId: this.boardId,
          name: this.columnName,
          tasks: [],
          id: newColumnID,
        })
      // e.target.reset()
    },
  },
  computed: {
    ...mapGetters({
      getCurrentBoardAction: 'sessionStorage/getCurrentBoard',
    }),

    currentBoard() {
      return this.getCurrentBoardAction(this.boardId) || {}
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
