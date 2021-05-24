export const state = () => ({
  list: [],
})

export const mutations = {
  addBoard(state, newBoard) {
    state.list.push(newBoard)
  },
}
