<template>
  <div class="container">
    Home
    <hr />
    <div v-if="$store.state.boards.list.length"><AllBoards /></div>
    <div v-else>
      <h2 class="h2">Nothing board, create your first board:</h2>
    </div>
    <form class="board-form" @submit.prevent="addBoardTest">
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

    <p>Total board: {{ boardsLengthState }}</p>
  </div>
</template>

<script>
import AllBoards from '~/components/AllBoards'
import BasicInput from '~/components/Common/BasicInput'
import { mapActions, mapState } from 'vuex'
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
    ...mapState({
      boardsLengthState: state => state.boards.list.length,
    }),
  },
  components: {
    AllBoards,
    BasicInput,
  },

  methods: {
    ...mapActions('boards', ['addBoard']),
    addBoardTest(e) {
      this.boardName.trim() &&
      this.addBoard({
        name: this.boardName,
        columns: [],
        id: `${this.boardsLengthState}${Math.floor(
          Math.random() * (999 - 100) + 100
        )}`, // uuid
      })
      e.target.reset()
    },
  },
}
</script>
