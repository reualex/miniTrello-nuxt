<template>
  <div class="container">
    Home
    <hr />
    <div v-if="$store.state.boards.list.length"><AllBoards /></div>
    <div v-else>
      <h2 class="h2">Nothing board, create your first board:</h2>
    </div>
    <div class="board-form">
      <BasicInput
        v-model="boardName"
        label="New Board"
        placeholder="Enter your board name"
        name="boardName"
        type="text"
        class="mb-9 max-w-sm"
      />
      <v-btn @click="addBoard">Add</v-btn>
    </div>

    <p>Total board: {{ boardsLength }}</p>
  </div>
</template>

<script>
import AllBoards from '~/components/AllBoards'
import BasicInput from '~/components/BasicInput'
export default {
  name: 'Home',
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
  created() {
    console.log('state: ', this.$store)
  },
  methods: {
    addBoard() {
      console.log('boardName: ', this.boardName)
      this.boardName.trim() &&
        this.$store.dispatch('boards/addBoard', {
          name: this.boardName,
          columns: [],
          id: `${this.boardsLength || 0}${Math.floor(
            Math.random() * (999 - 100) + 100
          )}`,
        })
      this.boardName = ''
    },
  },
}
</script>
