<template>
  <div>
    <form @submit.prevent="tryLogin">
      <p>
        <label for="login">Login :</label>
        <input type="tel" v-model="login" id="login" placeholder="thorgal">
      </p>
      <p>
        <label for="password">Mot de passe :</label>
        <input type="tel" v-model="password" id="password" placeholder="5CR37P455">
      </p>
      <p>
        <input type="submit" value="Se connecter">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      login: undefined,
      password: undefined
    }
  },

  methods: {
    tryLogin () {
      const login = this.login
      const password = this.password
      this.$store.dispatch('login', { login, password })
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
