import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    allTodos (state) {
      return state.todos
    },
    activeTodos (state) {
      return state.todos.filter(todo => !todo.completed)
    },
    completedTodos (state) {
      return state.todos.filter(todo => todo.completed)
    }
  },
  mutations: {
    SET_TODOS (state, todos) {
      console.log('SET_TODOS')
      state.todos = todos
    },
    ADD_TODO (state, todo) {
      console.log(typeof state.todos)
      state.todos.push(todo)
    },
    REMOVE_TODO (state, todo) {
      var i = state.todos.indexOf(todo)
      state.todos.splice(i, 1)
    },
    FILTER_TODOS (state, value) {
      state.todos.forEach((todo) => {
        todo.completed = !value
      })
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    setTodos ({ commit }, todos) {
      commit('SET_TODOS', todos)
    },
    removeTodo ({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    allDone ({ state, commit }) {
      var value = state.todos.filter(todo => todo.completed).length === state.todos.length
      commit('FILTER_TODOS', value)
    },
    saveTodos ({ state }) {
      console.log('saveTodos')
      axios.post('/api/todos', { todos: state.todos })
    },
    nuxtServerInit ({ commit }, { req }) {
      console.log('nuxtServerInit', req.data)
      commit('SET_TODOS', req.data ? (req.data || []) : [])
    }
  }
})

export default store
