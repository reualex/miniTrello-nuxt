<template>
  <div class="container">
    <h2 class="h2">
      Board name:
      <input
        :value="currentBoard.name"
        class="input-bg"
        @input="handleChange"
      />
    </h2>
    <h3>Columns:</h3>
    <BoardAllColumns :columns="currentBoard.columns" :board-id="boardId" />
    <form class="mt-4" @submit.prevent="addColumn">
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
import BoardAllColumns from '~/components/BoardAllColumns'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CurrentBoard',
  components: {
    BasicInput,
    BoardAllColumns,
  },

  data() {
    return {
      boardId: this.$route.params.id,
      columnName: '',
      taskName: '',
    }
  },
  methods: {
    ...mapActions('sessionStorage', [
      'addColumnToBoard',
      'addNewTask',
      'changeBoardName',
    ]),
    addColumn(e) {
      const newColumnID = this.$uuid.v4()

      this._.trim(this.columnName) &&
        this.addColumnToBoard({
          boardId: this.boardId,
          name: this.columnName,
          tasks: [],
          id: newColumnID,
        })
      this.columnName = ''
    },

    handleChange(e) {
      const newBoardName = e.target.value
      this._.trim(newBoardName) &&
        this.changeBoardName({ boardId: this.boardId, newName: newBoardName })
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

.input-bg {
  border-radius: 7px;
  background: #efefef;
  border: 1px #cacaca solid;
}
</style>
