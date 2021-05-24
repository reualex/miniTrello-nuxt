<template>
  <div class="container">
    Home
    <hr />
    <div v-if="$store.state.boards.list.length"><AllBoard /></div>
    <div v-else>
      <h2 class="h2">Nothing board, create your first board:</h2>
      <div class="board-form">
        <label for="newBoard" class="mr-4">Take name:</label>
        <input v-model="boardName" placeholder="please, enter board name" />
        <v-btn @click="$store.commit('boards/addBoard', { name: boardName })"
          >Add</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import AllBoard from '~/components/AllBoard'
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
  components: {
    AllBoard,
  },
  created() {
    console.log('state: ', this.$store)
  },
}
</script>
