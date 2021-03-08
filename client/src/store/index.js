import { createStore } from 'vuex'
import api from '@/api/api'

export default createStore({
  state: {
    user: undefined
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login ({ commit }, credentials) {
      api.login(credentials)
        .then(data => {
          const { success, user, message } = data // équivaut aux 3 lignes précédentes
          if (!success) {
            // afficher le message contenu dans `message`
            console.error(message)
            return
          }
          commit('setUser', user)
        })
    }
  },
  modules: {
  }
})
