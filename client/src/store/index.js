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
          const { success, user, token, message } = data // équivaut aux 3 lignes précédentes
          if (!success) {
            // afficher le message contenu dans `message`
            console.error(message)
            return
          }
          localStorage.setItem('token', token)
          commit('setUser', user)
        })
    },
    checkToken ({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }

      api.checkToken(token)
        .then(data => {
          const { success, message, user } = data

          if (!success) {
            // Afficher le message d'erreur à l'utilisateur
            console.warn(message)
            return
          }

          commit('setUser', user)
        })
    }
  },
  modules: {
  }
})
