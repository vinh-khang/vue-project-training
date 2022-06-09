<template>
    <nav>
          <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome ! You added a new project.</span>
            <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-app-bar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" color="grey">
                        <v-icon left color="grey">mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            
            <v-btn outlined color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app class="primary">
        <v-row>
            <v-col class="mt-5 text-center">
                <v-avatar size="100">
                <img src="/avatar-1.png" alt="" />
                </v-avatar>
                <p class="white--text text-subtitle-1 mt-1">
                Nguyen Vĩnh Khang
                </p>
                    <PopupView text @projectAdded="snackbar = true"/>
            </v-col>
        </v-row>
        <v-list shaped>
                <v-list-item-group>
                    <v-list-item
                        v-for="link in links" :key="link.text"
                        router :to="link.route">
                        <v-list-item-icon>
                            <v-icon class="white--text" v-text="link.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import PopupView from './PopupView.vue';
export default {
    components:{PopupView},
    data(){
        return {
            drawer: false,
            links: [
                {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
                {icon: 'mdi-account', text: 'Team', route: '/team'},
            ],
            snackbar: false
        }
    }
}
</script>