<template >
<div>
<v-container fluid>
    <v-content>
  <v-card
    class="mx-auto"
    max-width="auto"
    outlined
  >
    <Navbar></Navbar>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4"></div>
        <v-list-item-title class="headline mb-1"></v-list-item-title>
        <v-list-item-subtitle>SIgned in</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
  
    </v-card-actions>
  </v-card>
    </v-content>
</v-container>
          </div>
</template>

<script>
import Navbar from './Navbar';

import { mapGetters } from "vuex";
export default {
    name: "dashboard",
    components:{
        Navbar
    },

    computed: {
        ...mapGetters({
            user: "user"
        })
    }
};
</script>