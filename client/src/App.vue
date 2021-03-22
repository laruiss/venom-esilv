<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link> |
    <router-link to="/about">About</router-link>
    <fa-icon icon="power-off" v-if="isLoggedIn" />
  </div>
  <form>
    <BaseSelect
      :options="categories"
      v-model="event.category"
      label="Select a category"
    />

    <h3>Name & describe your event</h3>

    <BaseInput
      v-model="event.title"
      label="Title"
      type="text"
    />

    <BaseInput
      v-model="event.description"
      label="Description"
      type="text"
    />

    <h3>Where is your event?</h3>

    <BaseInput
      v-model="event.location"
      label="Location"
      type="text"
    />

    <h3>Are pets allowed?</h3>
    <div>
      <input
          type="radio"
          v-model="event.pets"
          :value="1"
          name="pets"
        />
      <label>Yes</label>
    </div>

    <div>
      <input
        type="radio"
        v-model="event.pets"
        :value="0"
        name="pets"
      />
      <label>No</label>
    </div>

    <h3>Extras</h3>
    <div>
      <input
        type="checkbox"
        v-model="event.extras.catering"
        class="field"
      />
      <label>Catering</label>
    </div>

    <div>
      <input
        type="checkbox"
        v-model="event.extras.music"
        class="field"
      />
      <label>Live music</label>
    </div>

    <button type="submit">Submit</button>
  </form>
  <router-view/>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'App',

  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    ...mapGetters(['isLoggedIn'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
