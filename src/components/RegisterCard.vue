<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-form>
          <v-container>
            <h1>Sign In</h1>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="email"
                  label="Email"
                  :type="show1 ? 'text' : 'email'"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="name"
                  label="Nombre"
                  :type="show1 ? 'text' : 'text'"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="username"
                  label="Username"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="password"
                  label="Password"
                  :type="show1 ? 'text' : 'password'"
                ></v-text-field>
              </v-col>
            </v-row>
            <span>¿Ya tienes cuenta? <router-link to="ingreso">Ingresar</router-link>
            </span>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$router.push('/ingreso')" color="blue-grey" class="white--text">
            <span>Ingresar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'RegisterCard',
  data: () => ({

  }),
};
</script>

<style media="screen">
</style>
