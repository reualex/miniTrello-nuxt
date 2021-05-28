<template>
  <div class="container all-boards">
    <ul>
      <li v-for="board in allBoards" :key="board.id">
        <nuxt-link :to="'/board/' + board.id">
          <v-card elevation="3" class="mb-5 px-8 py-12">
            <div class="content flex justify-between">
              <p>
                {{ board.name }}
              </p>
              <p>Total columns: {{ board.columns.length }}</p>
              <span
                class="delete-btn"
                @click.prevent="$store.commit('boards/removeBoard', board.id)"
                >X</span
              >
            </div>
          </v-card>
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

<style lang="scss">
.delete-btn {
  width: 32px;
  height: 32px;
  z-index: 20;
  line-height: 32px;
  text-align: center;
}
</style>
