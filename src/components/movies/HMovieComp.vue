<template>
<div>
   <v-overlay :value="overlay">
     <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    
    <HMoviesCards v-bind:hollymovies="hollymovies" />
</div>
</template>

<script>
import HMoviesCards from "./HMoviesCards";
import axios from "axios";

export default {
name: "hmoviecomp",
components: {
    HMoviesCards,
  },
data() {
    return {
      hollymovies: [],
    };
  },

// On page mount


    mounted() {
      this.overlay =!  this.overlay,
    this.getMovies()
  },

// Methods
  methods: {
       overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 3000)
       },

    getMovies(){
        axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=4310f95b82d271cc0c42f73b0e163207&sort_by=popularity.desc&include_adult=true&include_video=true&primary_release_year=" +
          new Date().getFullYear() +
          "&year=" +
          new Date().getFullYear()
      )
      .then(res => (this.hollymovies = res.data.results))
      .catch();
    }
  }
}
</script>

