import store from '@/store'

export function checkTokenBeforeEnter (to, from, next) {
  store.dispatch('checkToken')
    .then(isValidToken => {
      if (isValidToken) {
        next(true)
        return
      }
      next({ name: 'Login' })
    })
}
