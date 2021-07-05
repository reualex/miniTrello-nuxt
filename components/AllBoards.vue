<template>
  <div class="container">
    <ul>
      <draggable v-model="myBoards">
        <li v-for="board in allBoards" :key="board.id" class="current-board">
          <nuxt-link :to="`/board/${board.id}`">
            <v-card elevation="3" class="mb-5 px-8 py-12">
              <div class="content flex justify-between items-center">
                <p class="w-4/12 mr-2">
                  {{ board.name }}
                </p>
                <p class="w-3/12 mr-2">
                  Total columns: {{ board.columns.length }}
                </p>
                <p class="w-3/12">Total tasks: {{ getTotalTasks(board.id) }}</p>
                <button
                  class="delete-btn"
                  @click.prevent="removeBoard(board.id)"
                >
                  X
                </button>
              </div>
            </v-card>
          </nuxt-link>
        </li>
      </draggable>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import draggable from 'vuedraggable'
export default {
  name: 'AllBoards',
  components: {
    draggable,
  },

  computed: {
    ...mapGetters('sessionStorage', ['getTotalTasks']),
    ...mapState({
      allBoards: state => state.sessionStorage.list,
    }),

    myBoards: {
      get() {
        return this.allBoards
      },

      set(value) {
        this.$store.commit('sessionStorage/updateBoardList', {
          currentList: value,
        })
      },
    },
  },
  methods: {
    ...mapActions('sessionStorage', ['removeBoard']),
  },
}
</script>

<style lang="scss">
.current-board:hover {
  transition: 0.2s;
  box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.18);
}
.delete-btn {
  display: block;
  width: 32px;
  height: 32px;
  color: rgb(105, 104, 104);
  z-index: 20;
  line-height: 32px;
  text-align: center;

  &:hover {
    color: darkred;
  }
}
</style>
