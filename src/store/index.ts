import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [] as string[],
    doneList: [],
    deleteList: []
  },
  mutations: {
    addTodoList (state, payload) {
      state.todoList.push(payload)
    }
  },
  actions: {},
  modules: {}
})
