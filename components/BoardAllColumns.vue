<template>
  <ul v-if="columns && columns.length" class="flex overflow-x-auto">
    <draggable v-model="myColumns" class="flex overflow-x-auto">
      <li v-for="column in columns" :key="column.id" class="one-column">
        <div class="flex justify-between">
          <p>
            <input
              :value="column.name"
              @input.prevent="handleInput($event, column.id)"
            />
          </p>
          <button
            class="delete-btn"
            type="button"
            @click="deleteClick(column.id)"
          >
            X
          </button>
        </div>

        <hr class="border-indigo-100" />
        <AllTasks
          :tasks="column.tasks"
          :column-id="column.id"
          :board-id="boardId"
        />
      </li>
    </draggable>
  </ul>
  <span v-else>Nothing column, create new</span>
</template>

<script>
import { mapActions } from 'vuex'
import draggable from 'vuedraggable'
import AllTasks from '~/components/AllTasks'

export default {
  name: 'BoardAllColumns',
  props: {
    columns: { type: Array, default: [] },
    boardId: { type: String, default: '' },
  },
  components: {
    AllTasks,
    draggable,
  },
  data() {
    return {
      taskName: '',
    }
  },
  computed: {
    myColumns: {
      get() {
        return this.columns
      },

      set(value) {
        this.$store.commit('sessionStorage/updateColumnList', {
          currentList: value,
          boardId: this.boardId,
        })
      },
    },
  },
  methods: {
    ...mapActions('sessionStorage', ['removeColumn', 'changeColumnName']),
    deleteClick(columnId) {
      this.removeColumn({ boardId: this.boardId, columnId })
    },
    handleInput(e, columnId) {
      this.changeColumnName({
        boardId: this.boardId,
        columnId,
        newName: e.target.value,
      })
    },
  },
}
</script>

<style lang="scss"></style>
