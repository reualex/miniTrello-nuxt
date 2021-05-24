export const state = () => ({
  list: [],
})

export const mutations = {
  addBoard(state, newBoard) {
    state.list.push(newBoard)
  },

  addTaskToBoard(board_id) {
  const board = this.getCurrentBoard(board_id)
  }
}

export const getters = {
  getCurrentBoard(state, id) {
    return state.list.find((el) => el.id === '0')
  }
}
