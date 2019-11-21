<template>
<div>
   <v-overlay :value="overlay">
     <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

  <NMoviesCards v-bind:nollymovies="nollymovies" />    
</div>
</template>

<script>
import NMoviesCards from "./NMoviesCards";
import axios from "axios";

export default {
name: "nmoviecomp",
components: {
    NMoviesCards,
  },
data() {
    return {
      nollymovies: [],
    };
  },

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
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=4310f95b82d271cc0c42f73b0e163207&region=NG&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&primary_release_year=" +
          new Date().getFullYear() +
          "&year=" +
          new Date().getFullYear())
      .then(res => (this.nollymovies = res.data.results))
      .catch();
  },


  }
}
</script>
