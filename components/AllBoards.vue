<template>
  <div class="container all-boards">
    <ul>
      <li v-for="board in allBoards" :key="board.id">
        <nuxt-link :to="'/board/' + board.id">
          <v-card elevation="3" class="mb-5 px-8 py-12">
            <div class="content flex justify-between">
              <p class="w-4/12 mr-2">
                {{ board.name }}
              </p>
              <p class="w-3/12 mr-2">
                Total columns: {{ board.columns.length }}
              </p>
              <p class="w-3/12">Total tasks: {{ totalTasks(board.id) }}</p>
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
  methods: {
    totalTasks(boardId) {
      return this.$store.getters['boards/getTotalTasks'](boardId)
    },
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
