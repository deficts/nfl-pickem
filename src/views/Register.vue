<template>
  <v-container fluid fill-height>
    <RegisterCard/>
  </v-container>
</template>

<script>
import RegisterCard from '@/components/RegisterCard.vue'

export default {
  name: 'home',
  components: {
    RegisterCard
  }
}
</script>
