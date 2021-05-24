<template>
  <div class="container">
    Home
    <hr />
    <div v-if="$store.state.boards.list.length"><AllBoards /></div>
    <div v-else>
      <h2 class="h2">Nothing board, create your first board:</h2>
    </div>
    <div class="board-form">
      <label for="newBoard" class="mr-4">Create new board:</label>
      <input
        class="mr-4"
        v-model="boardName"
        placeholder="please, enter board name"
      />
      <v-btn @click="addBoard">Add</v-btn>
    </div>
  </div>
</template>

<script>
import AllBoards from '~/components/AllBoards'
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
      boardsLength: this.$store.state.boards.list.length,
    }
  },
  components: {
    AllBoards,
  },
  created() {
    console.log('state: ', this.$store)
  },
  methods: {
    addBoard() {
      this.$store.commit('boards/addBoard', {
        name: this.boardName,
        id: this.boardsLength || '0',
      })
      this.boardName = ''
    },
  },
}
</script>
