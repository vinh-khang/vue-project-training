<template>
  <div class="text-center">
    <v-dialog
      width="600"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            class="success"
            v-bind="attrs"
            v-on="on"
            >
            Add new project
            </v-btn>
        </template>

        <v-card>
        <v-card-title>
            <h2>Add a New Project</h2>
        </v-card-title>

        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
                <v-menu max-width="290">
                    <template v-slot:activator="{ on }">
                        <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
                <v-btn text class="info mx-0 mt-3" @click="submit">Add project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    data(){
        return {
            title: '',
            content: '',
            due: ''
        }
    },
    methods: {
        submit(){
            console.log(this.title, this.content);
        }
    },
     computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
    }
  }
}
</script>