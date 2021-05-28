<template>
  <div class="container">
    Home
    <hr />
    <div v-if="$store.state.boards.list.length"><AllBoards /></div>
    <div v-else>
      <h2 class="h2">Nothing board, create your first board:</h2>
    </div>
    <form class="board-form" @submit.prevent="addBoard">
      <BasicInput
        v-model="boardName"
        label="New Board"
        placeholder="Enter your board name"
        name="boardName"
        type="text"
        class="mb-9 max-w-sm"
      />
      <v-btn type="submit">Add</v-btn>
    </form>

    <p>Total board: {{ boardsLength }}</p>
  </div>
</template>

<script>
import AllBoards from '~/components/AllBoards'
import BasicInput from '~/components/Common/BasicInput'
export default {
  name: 'Home',
  middleware: 'auth',
  head() {
    return {
      title: `Home`,
    }
  },
  data() {
    return {
      boardName: '',
    }
  },
  computed: {
    boardsLength() {
      return this.$store.state.boards.list.length
    },
  },
  components: {
    AllBoards,
    BasicInput,
  },

  methods: {
    addBoard(e) {
      this.boardName.trim() &&
        this.$store.dispatch('boards/addBoard', {
          name: this.boardName,
          columns: [],
          id: `${this.boardsLength || 0}${Math.floor(
            Math.random() * (999 - 100) + 100
          )}`,
        })
      e.target.reset()
    },
  },
}
</script>
