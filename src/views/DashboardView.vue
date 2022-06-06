<template>
  <div class="home">
    <div class="subheading grey--text ma-5">Dashboard</div>
    <v-container class="my-5">
      <v-layout row wrap class="mb-3">
        <v-flex xs12 md6>
          <v-btn outlined block color="indigo">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block color="indigo">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block color="indigo">3</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outlined block color="indigo">4</v-btn>
        </v-flex>
      </v-layout>
      
      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outlined block color="teal">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outlined block color="teal">2</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
