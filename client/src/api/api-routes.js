const API_HOST = process.env.VUE_APP_API_HOST || ''

export default {
  login: API_HOST + '/api/v1/auth/token',
  me: API_HOST + '/api/v1/me'
}
