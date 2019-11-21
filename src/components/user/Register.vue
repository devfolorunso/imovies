<template>
  <div>
    <div class="myform">
      <template v-if="$vuetify.breakpoint.smAndDown">
        <v-content>
          <v-container fluid>
            <h3 class="text-center">
              Hey There!
              <span>😊</span> Please sign up to continue...
            </h3>
            <v-divider></v-divider>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-inner-icon="mdi-account"
                v-model="name"
                :counter="10"
                name="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                prepend-inner-icon="mdi-email"
                name="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="showp ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="passwordRules"
                prepend-inner-icon="mdi-key"
                :type="showp ? 'text' : 'password'"
                name="password"
                label="Password"
                hint="At least 6 characters"
                counter
                @click:append="showp = !showp"
                required
              ></v-text-field>

              <div class="mybtns mx-auto">
                <v-btn :disabled="!valid" color="success" class="mr-3" @click="validate">Sign Up</v-btn>
                <v-btn color="error" @click="reset">Reset</v-btn>
              </div>
            </v-form>
          </v-container>
        </v-content>
      </template>
    </div>

    <div class="lgform">
      <template v-if="$vuetify.breakpoint.mdAndUp">
        <v-content>
          <v-card class="mx-auto" max-width="900">
            <v-card-title class="text center teal--text">Sign Up To Continue...</v-card-title>
            <v-divider></v-divider>

            <v-container fluid>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    prepend-inner-icon="mdi-account"
                    v-model="name"
                    :counter="10"
                    name="name"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="email"
                    prepend-inner-icon="mdi-email"
                    name="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                      name="password"
                    :append-icon="showp ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    prepend-inner-icon="mdi-key"
                    :type="showp ? 'text' : 'password'"
                    label="Password"
                    hint="At least 6 characters"
                    counter
                    @click:append="showp = !showp"
                    required
                  ></v-text-field>
                    
                  <div class="mybtns mx-auto">
                    <v-btn :disabled="!valid" color="success" class="mr-3" @click="validate">Sign Up</v-btn>
                    <v-btn color="error" @click="reset">Reset</v-btn>
                  </div>
                </v-form>
              </v-card-text>
            </v-container>
          </v-card>
        </v-content>
      </template>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  name: "register",

  data() {
    return {
      valid: true,
      showp: false,
      errors: [],
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
       v => (v && v.length <= 6) || "Min 6 characters",
      ]
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    validate(){
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        this.errors = [];

        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(data => {
            data.user
              .updateProfile({
                displayName: this.name
              })
              .then(() => {
                this.$router.push("/login");
              });
          })
          .catch(err => {
            this.errors.push(err.message);
          });
      }
    }
  }
};
</script>
<style>
.myform {
  margin: 0 auto;
  width: auto;
  margin-top: 5%;
}

@media only screen and (max-width: 600px) {
  .myform {
    margin: 0 auto;
    width: auto;
    margin-top: 20%;
  }
}
</style>