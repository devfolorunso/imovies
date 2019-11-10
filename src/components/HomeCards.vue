<template>
<div>
      <v-img
        :src="`https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`"
        height="690"
        gradient="to top right, rgba(100,115,201,.30), rgba(25,32,72,.7)"
      >
        <v-container id="home-content">
          <h1 id="home-header">Coming soon, Now playing in theaters, You'll find'em here... </h1>
          <v-chip class="ma-2" color="white darken-3" outlined>
            <span role="img" aria-label="point-right">Hey there! 👉</span>
            <i>All collections are latest of year {{new Date().getFullYear()}}</i>
          </v-chip>
        </v-container>

        <!-- Animated down arrow -->
        <div class="arrow bounce">
          <a href="#categories" v-smooth-scroll>
            <v-icon large color="white">mdi-arrow-down-bold-circle</v-icon>
          </a>
        </div>
      </v-img>


   <!-- Categories -->
      <v-container fluid class="home-cards" id="categories">
        <v-card class="pa-2">

    <v-row no-gutters>
      <v-col cols="12" sm="6" md="4">
        <v-card class="mx-auto my-12" max-width="374">
          <v-img
            height="250"
            src="https://www.aljazeera.com/mritems/Images/2014/8/19/201481916240122734_20.jpg"
          ></v-img>

          <v-card-title>Hollywood Movies</v-card-title>

          <v-card-text>
        
            <div class="my-4 subtitle-1">• Action, Drama, Comedy, Sci-Fi, Romance</div>

            <div>Get the most of your leisure time...</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn class="mx-auto" rounded outlined color="indigo lighten-2" @click="toHolly">
              Take me there!    
              <div v-if="Hloader" class="custom-loader">
                <span>
                  <v-icon light>mdi-movie-roll</v-icon>
                </span>
              </div>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Nollywood -->
      <v-col cols="12" sm="6" md="4">
        <v-card class="mx-auto my-12" max-width="374">
         <v-img
            height="250"
            src="https://travel.jumia.com/blog/ng/wp-content/uploads/2016/10/nollywood.jpg"
          ></v-img>

          <v-card-title>Nollywood Movies</v-card-title>

          <v-card-text>
        
            <div class="my-4 subtitle-1">• Action, Drama, Comedy, Sci-Fi, Romance</div>

            <div>Get the most of your leisure time...</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn class="mx-auto" rounded outlined color="indigo lighten-2" @click="toNolly">
              Take me there!    
              <div v-if="Nloader" class="custom-loader">
                <span>
                  <v-icon light>mdi-movie-roll</v-icon>
                </span>
              </div>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- TV SHOWS/ Series -->
      <v-col cols="12" sm="6" md="4">
      <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" src="https://i.ytimg.com/vi/BjjVwE8hWz4/hqdefault.jpg"></v-img>

          <v-card-title>Tv Shows & Movie Series</v-card-title>

          <v-card-text>
        
            <div class="my-4 subtitle-1">• Action, Drama, Comedy, Sci-Fi, Romance</div>

            <div>Your favourite tv shows and movie series manager...</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn class="mx-auto" rounded outlined color="indigo lighten-2" @click="toShows">
              Take me there!    
              <div v-if="Tvloader" class="custom-loader">
                <span>
                  <v-icon light>mdi-movie-roll</v-icon>
                </span>
              </div>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
          </v-card>
        </v-container>
      </div>
</template>

<script>
export default {
  name: "HomeCards",

  data() {
    return {
      Hloader: false,
      Nloader: false,
      Tvloader:false
    };
  },

  methods: {
    toHolly() {
      this.Hloader = true;
      setTimeout(
        function() {
          this.$router.push({ path: "/hollywood" });
        }.bind(this),
        2500
      );
    },
    toNolly() {
      this.Nloader = true;
      setTimeout(
        function() {
          this.$router.push({ path: "/nollywood" });
        }.bind(this),
        2500
      );
    },
    toShows() {
      this.Tvloader = true;
      setTimeout(
        function() {
          this.$router.push({ path: "/movieseries" });
        }.bind(this),
        2500
      );
    },
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1.5s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>