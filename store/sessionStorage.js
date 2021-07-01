import { findIndex } from 'lodash'

export const state = () => ({
  list: [],
})

export const actions = {
  addBoard({ commit }, newBoard) {
    commit('addBoard', newBoard)
  },
  addColumnToBoard({ commit }, newColumn) {
    commit('addColumnToBoard', newColumn)
  },
  addNewTask({ commit }, newTask) {
    commit('addNewTask', newTask)
  },
  removeBoard({ commit }, id) {
    commit('removeBoard', id)
  },
}

export const mutations = {
  addBoard(state, newBoard) {
    state.list.push(newBoard)
  },

  addColumnToBoard(state, newColumn) {
    const currentBoard = state.list.find(
      el => el.id?.toString() === newColumn.boardId?.toString()
    )
    currentBoard.columns.push(newColumn)
  },

  removeBoard(state, boardId) {
    const index = findIndex(state.list, el => el.id === boardId)
    state.list.splice(index, 1)
  },

  addNewTask(state, newTask) {
    const currentBoard = state.list.find(
      el => el.id?.toString() === newTask.boardId?.toString()
    )
    const currentColumn = currentBoard.columns.find(
      col => col.id?.toString() === newTask.columnId
    )

    currentColumn.tasks.push(newTask)
  },
}

export const getters = {
  boardCount: state => {
    return state.list.length
  },
  getCurrentBoard: state => id => {
    return state.list.find(el => el.id?.toString() === id?.toString())
  },

  getTotalTasks: state => boardId => {
    let totalTasks = 0
    const currentBoard = state.list.find(
      el => el.id?.toString() === boardId?.toString()
    )

    currentBoard.columns.forEach(column => {
      totalTasks += column.tasks.length
    })
    return totalTasks
  },
}