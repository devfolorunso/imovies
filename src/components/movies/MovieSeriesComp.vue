
<template>
<div>
   <v-overlay :value="overlay">
     <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    
    <MovieSeriesCards v-bind:movieseries="movieseries" />
</div>
</template>

<script>
import MovieSeriesCards from "./MovieSeriesCards";
import axios from "axios";

export default {
name: "movieseriescomp",
components: {
    MovieSeriesCards,
  },
data() {
    return {
      movieseries: [],
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
        "https://api.themoviedb.org/3/discover/tv?api_key=4310f95b82d271cc0c42f73b0e163207&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
      )
      .then(res => (this.movieseries = res.data.results))
      .catch();
    }
  }
}
</script>

