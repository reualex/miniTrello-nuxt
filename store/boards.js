export const state = () => ({
  list: [],
})

export const mutations = {
  addBoard(state, newBoard) {
    state.list.push(newBoard)
  },

  addTaskToBoard(board_id) {
    const board = state.getters.getCurrentBoard(board_id)
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
