<template>
<nav>
  <v-app-bar app class="blue-grey--text">
    <v-toolbar-title>
      <router-link to="/">
        <span class="font-weight-light">Vue</span>
        <span>Pick'em</span>
      </router-link>
    </v-toolbar-title>
  </v-app-bar>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {

    }
  },

};
</script>
<style>
  a{
    text-decoration: none;
  }
  a span{
    text-decoration: none;
    color:#6D8794;
  }
</style>
