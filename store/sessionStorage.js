import { findIndex } from 'lodash'

export const state = () => ({
  list: [],
})

export const actions = {
  addBoard({ commit }, newBoard) {
    commit('addBoard', newBoard)
  },
  changeBoardName({ commit }, obj) {
    commit('changeBoardName', obj)
  },
  changeColumnName({ commit }, obj) {
    commit('changeColumnName', obj)
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
  removeColumn({ commit }, columnObj) {
    commit('removeColumn', columnObj)
  },
  removeTask({ commit }, id) {
    commit('removeBoard', id)
  },
}

export const mutations = {
  addBoard(state, newBoard) {
    state.list.push(newBoard)
  },
  changeBoardName(state, obj) {
    const currentBoard = state.list.find(
      el => el.id?.toString() === obj.boardId?.toString()
    )

    currentBoard.name = obj.newName
  },
  changeColumnName(state, obj) {
    const currentColumn = this.getters['sessionStorage/getCurrentColumn'](
      obj.boardId,
      obj.columnId
    )
    console.log('!!currentColumn: ', currentColumn)
    currentColumn.name = obj.newName
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
  removeColumn(state, columnObj) {
    const currentBoard = state.list.find(
      el => el.id?.toString() === columnObj.boardId?.toString()
    )
    const index = findIndex(
      currentBoard.columns,
      el => el.id === columnObj.columnId
    )

    currentBoard.columns.splice(index, 1)
  },

  addNewTask(state, newTask) {
    const currentColumn = this.getters['sessionStorage/getCurrentColumn'](
      newTask.boardId,
      newTask.columnId
    )

    currentColumn.tasks.push(newTask)
  },

  updateList(state, { tasks, boardId, columnId }) {
    const currentColumn = this.getters['sessionStorage/getCurrentColumn'](
      boardId,
      columnId
    )

    currentColumn.tasks = tasks
  },
  updateBoardList(state, { currentList }) {
    state.list = currentList
  },
  updateColumnList(state, { currentList, boardId }) {
    let currrentBoard = state.list.find(
      el => el.id?.toString() === boardId?.toString()
    )
    currrentBoard.columns = currentList
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

  getColumnTasks: (state, getters) => (boardId, columnId) => {
    const currentColumn = getters.getCurrentColumn(boardId, columnId)

    return currentColumn.tasks
  },

  getCurrentColumn: state => (boardId, columnId) => {
    const currentBoard = state.list.find(
      el => el.id.toString() === boardId.toString()
    )
    const currentColumn = currentBoard.columns.find(
      el => el.id.toString() === columnId.toString()
    )

    return currentColumn
  },
}
