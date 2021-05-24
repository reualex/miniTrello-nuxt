<template>
  <div class="container all-boards">
    <ul>
      <li class="card" v-for="board in allBoards">
        <nuxt-link :to="'/board/' + board.id">
          {{ board.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllBoards',
  data() {
    return {
      allBoards: this.$store.state.boards.list,
    }
  },
}
</script>
