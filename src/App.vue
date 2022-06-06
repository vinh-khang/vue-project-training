<template>
  <v-app class="blue lighten-4">
    <NavbarView />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavbarView from '@/components/NavbarView';
export default {
  name: 'App',
  components: {
    NavbarView
  },
  data: () => ({
    //
  }),
};
</script>