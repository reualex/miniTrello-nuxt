export const state = () => ({
  list: [],
})

export const actions = {
  addBoard({ commit }, newBoard) {
    commit('addBoard', newBoard)
  },
  addTaskToBoard({ commit }, newColumn) {
    commit('addTaskToBoard', newColumn)
  },
}

export const mutations = {
  addBoard(state, newBoard) {
    state.list.push(newBoard)
  },

  addTaskToBoard(state, newColumn) {
    const currentBoard = state.list.find(
      el => el.id.toString() === newColumn.boardId.toString()
    )
    if (!currentBoard.columns) currentBoard.columns = []
    currentBoard.columns.push(newColumn)
  },

  removeBoard(state, board_id) {
    const index = state.list
      .map(x => {
        return x.Id
      })
      .indexOf(board_id)
    state.list.splice(index, 1)
  },
}

export const getters = {
  getCurrentBoard: state => id => {
    return state.list.find(el => el.id.toString() === id.toString())
  },
}
