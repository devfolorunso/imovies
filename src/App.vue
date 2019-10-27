<template>
  <!-- App.vue -->
  <div id="app">
    <v-app>
      <!-- Nav -->
      <v-app-bar color="blue-grey lighten-1"  app>
        <v-toolbar-title id="home-logo">
          <v-icon medium color="dark">mdi-movie</v-icon>iMovies
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

      <!-- Landing view  -->
      <v-img
        :src="`https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`"
        height="690"
        gradient="to top right, rgba(100,115,201,.30), rgba(25,32,72,.7)"
      >
        <v-container id="home-content">
          <h1 id="home-header">Coming soon, Trailers, Now playing in theaters ...</h1>
          <v-chip class="ma-2" color="white darken-3" outlined>
            <span role="img" aria-label="point-right">Hey there! 👉</span>
            <i>All collections are latest of year {{new Date().getFullYear()}}</i>
          </v-chip>
        </v-container>

        <!-- Animated down arrow -->
        <div class="arrow bounce">
          <a href="#movies" v-smooth-scroll>
            <v-icon large color="white">mdi-arrow-down-bold-circle</v-icon>
          </a>
        </div>
      </v-img>

      <!-- Provides the application the proper gutter -->
      <!-- Movies -->
      <v-container fluid id="movies">
        <v-card class="pa-3">
          <Movies v-bind:movies="movies" />
        </v-card>
      </v-container>

      <!-- Footer -->
      <v-footer color="blue-grey darken-1" app>
        <!-- <v-card class="pa-2" outlined tile> -->
        <v-card color="blue-grey darken-1" class="flex" flat tile>
          <!-- Scroll to top -->

          <back-to-top visibleoffset="2000">
            <v-icon large class="btn-to-top" color="white">mdi-arrow-up-bold-circle</v-icon>
          </back-to-top>

          <v-row no-gutters>
            <v-col cols="6">
              <!-- Footer text -->
              <v-card-text class="white--text text-left">
                {{ new Date().getFullYear() }} —
                iMovies By
                <a
                  href="https://github.com/afolorunso"
                  class="white--text"
                >Folorunso</a>
              </v-card-text>
            </v-col>

            <v-col cols="6">
              <!-- Tooltip swticher-->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-switch
                    v-model="goDark"
                    class="float-right"
                    v-on="on"
                    inset
                    :label="`Dark Theme`"
                  ></v-switch>
                </template>
                <span>
                  <i>Working on it, kindly check back later</i> ❤
                </span>
              </v-tooltip>
              <!-- Tooltip -->
            </v-col>
          </v-row>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Movies from "./components/Movies";
import BackToTop from "vue-backtotop";
import axios from "axios";

export default {
  name: "app",
  // Register component
  components: {
    Movies,
    BackToTop
  },

  data() {
    return {
      movies: [],
      goDark: false
    };
  },
  // Trying to set dark theme switcher
  Computed: {
    setTheme() {
      if (this.goDark == true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  },

  // Fetch Movie from themovieDB
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=4310f95b82d271cc0c42f73b0e163207&sort_by=popularity.desc&include_adult=true&include_video=true&primary_release_year=" +
          new Date().getFullYear() +
          "&year=" +
          new Date().getFullYear()
      )
      .then(res => (this.movies = res.data.results))
      .catch();
  }
};
</script>


<style>
/* Landing view css */
#home-logo {
  font-family: "Bangers", cursive;
  font-size: 1.5em;
  color: #fff;
}

#home-content {
  margin-top: 9em;
  font-size: 1.5em;
}

#home-header {
  font-family: "Bangers", cursive;
  font-size: 2.5em;
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
    margin-top: 10em;
    font-size: 1em;
  }
}
@media only screen and (max-width: 600px) {
  #home-content {
    margin-top: 8em;
    font-size: 1em;
  }
}
</style>