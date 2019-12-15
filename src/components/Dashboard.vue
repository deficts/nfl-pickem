<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-img id="imagen" :aspect-ratio="16/9" opacity="0.8" class="white--text align-end" src="@/assets/football.jpg">
          <v-card-title id="texto">Bienvenido a VuePick'em!</v-card-title>
        </v-img>
        <v-card-text class="text--primary">
          <div>Aquí podras hacer cada semana la eleccion de tus equipos favoritos de la NFL</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push('/ingreso')" color="blue-grey" class="white--text">
            <span>Ingresar</span>
          </v-btn>
          <v-btn @click="$router.push('/registro')" color="blue-grey" class="white--text">
            <span>Registrarse</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({

  }),
};
</script>

<style media="screen">
</style>
