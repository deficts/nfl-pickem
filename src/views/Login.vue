<template>
  <v-container fluid fill-height>
    <LogCard/>
  </v-container>
</template>

<script>
import LogCard from '@/components/LogCard.vue'

export default {
  name: 'home',
  components: {
    LogCard
  }
}
</script>
