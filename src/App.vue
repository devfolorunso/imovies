<template>
  <!-- App.vue -->
  <div id="app">
    <v-app>
      <!-- nav drawer -->
      <v-navigation-drawer v-model="drawer" temporary app>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon medium color="dark">mdi-movie</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>iMovies</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list nav dense rounded>
          <v-list-item-group color="primary">
            <!-- Home -->
            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <!-- Holllywood -->
            <router-link to="/hollywood">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-movie</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Hollywood</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <!-- Nollywood -->
            <router-link to="/nollywood">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-movie-roll</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Nollywood</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <!-- Sign In -->
            <router-link to="/register">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-check</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Register</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <!-- Login -->

                        <!-- Sign In -->
            <router-link to="/login">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-key</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Login</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <!-- Login -->

            <router-link to="/movieseries">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-filmstrip</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    Your
                    <span color="red">☆</span> Movie Series
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <!-- About -->
            <router-link to="/about">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-information</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>About</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <!-- Nav -->

      <v-app-bar color="blue-grey lighten-1" app>
        <v-toolbar class="he" color="blue-grey lighten-1">
          <v-toolbar-title id="home-logo">
            <v-icon medium color="dark">mdi-movie</v-icon>iMovies
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-page-layout-sidebar-right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-app-bar>

      <!--  Movies Router-->
      <router-view />
      <!--  Movies ROuter-->

      <back-to-top class="mb-5 btn-to-to" visibleoffset="2000">
        <!-- <v-icon large class="btn-to-top scroll" color="white">mdi-arrow-up-drop-circle</v-icon>       -->
        <div class="my-2">
          <v-btn color="teal" fab large dark>
            <v-icon>mdi-keyboard-caps</v-icon>
          </v-btn>
        </div>
      </back-to-top>

      <v-footer color="blue-grey darken-1 white--text" class="py-4" app tile>
        {{ new Date().getFullYear() }} —
        iMovies
        <v-spacer></v-spacer>
        <v-icon medium color="white" class="float-right" @click="setTheme">mdi-theme-light-dark</v-icon>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import BackToTop from "vue-backtotop";

export default {
  name: "app",
  // Register component
  components: {
    BackToTop
  },

  data() {
    return {
      drawer: null
    };
  },

  // dark theme switcher
  methods: {
    setTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>


<style>
/* Landing view css */
#home-logo {
  font-size: 1.5em;
  color: #fff;
}

#home-content {
  margin-top: 11em;
  font-size: 1.5em;
}

#home-header {
  font-family: "Bangers", cursive;
  font-size: 1.5em;
  margin-bottom: 0.1em;
  color: #fff;
}

/* Animated arrow */
.arrow {
  text-align: center;
  margin: 4% 0;
  text-decoration: none;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
  text-decoration: none;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* Media Queries fro MD and SM screens */
@media only screen and (max-width: 700px) {
  #home-content {
    margin-top: 14em;
    font-size: 1em;
  }
}

@media only screen and (max-width: 600px) {
  #home-content {
    margin-top: 15em;
    font-size: 1em;
  }
}

.scroll {
  width: 50px;
  height: 50px;
  background-color: #666;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
}

.scroll:hover {
  background-color: #160b0a;
  opacity: 1;
  filter: "alpha(opacity=100)";
  -ms-filter: "alpha(opacity=100)";
}

.he {
  box-shadow: none !important;
}
</style>