<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text ma-5">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined color="grey" class="btn-border-none">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template> 

<script>
  export default {
    name: 'TeamView',
    data() {
    return {
      team: [
          { name: 'The Net Ninja', role: 'Web developer' },
          { name: 'Ryu', role: 'Graphic designer' },
          { name: 'Chun Li', role: 'Web developer' },
          { name: 'Gouken', role: 'Social media maverick' },
          { name: 'Yoshi', role: 'Sales guru'}
        ]
      }
    }
  }
</script>
<style>
.btn-border-none {
  border: none;
}
</style>