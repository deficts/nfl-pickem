<template>
  <v-container class="home">
    <Dashboard/>
  </v-container>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'home',
  components: {
    Dashboard
  }
}
</script>
