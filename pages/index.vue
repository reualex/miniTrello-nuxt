<template>
  <div class="container">
    Home
    <hr />
    <div v-if="boardCount"><AllBoards /></div>
    <div v-else>
      <h2 class="h2">Nothing board, create your first board:</h2>
    </div>
    <form class="board-form" @submit.prevent="submitForm">
      <BasicInput
        :value="boardName"
        label="New Board"
        placeholder="Enter your board name"
        name="boardName"
        type="text"
        class="mb-9 max-w-sm"
      />
      <v-btn type="submit">Add</v-btn>
    </form>

    <p>Total board: {{ boardCount }}</p>
  </div>
</template>

<script>
/**
 * [x] ...mapState, ...mapGetters, ...mapActions
 * [x] add function reset form
 */
import AllBoards from '~/components/AllBoards'
import BasicInput from '~/components/Common/BasicInput'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  middleware: 'auth',
  components: {
    AllBoards,
    BasicInput,
  },
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
  // mounted() {
  //   if (window.opener) {
  //     window.opener?.location.replace('/')
  //     window.close()
  //   }
  // },
  computed: {
    ...mapGetters('boards', ['boardCount']),
  },

  methods: {
    ...mapActions('boards', ['addBoard']),
    submitForm(e) {
      const newID = this.$uuid.v4()
      this.boardName.trim() &&
        this.addBoard({
          name: this.boardName,
          columns: [],
          id: newID,
        })
      this.resetForm()
    },
    resetForm() {
      this.boardName = ''
    },
  },
}
</script>
