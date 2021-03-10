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
          const { success, user, token, message } = data
          if (!success) {
            // TODO: Afficher proprement le message contenu dans `message` dans l'interface
            //       et non dans la console comme ici
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

      return api.checkToken(token)
        .then(data => {
          const { success, message, user } = data

          if (!success) {
            // Afficher le message d'erreur à l'utilisateur
            console.warn(message)
            return false
          }

          commit('setUser', user)
          return true
        })
    }
  },

  modules: {
  }
})
