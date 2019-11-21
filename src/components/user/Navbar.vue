<template>
   <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
        <template v-if="user.loggedIn">
            <v-btn text>{{user.data.displayName}}</v-btn>
            </template>
            
            <template v-else>
                <v-btn text>Register</v-btn>
                <v-btn text>Login</v-btn>
            </template>
                
    </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>