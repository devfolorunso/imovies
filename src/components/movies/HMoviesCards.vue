<template>
  <v-container id="movies">
    <!-- Movie card -->
    <v-row no-gutters>
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        v-bind:key="movie.id"
        v-for="movie in hollymovies"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto my-12" max-width="400" height="850">
            <v-img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              gradient="to top right, rgba(100,115,201,.20), rgba(25,32,72,.3)"
              height="500"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue-grey darken-2 v-card--reveal display-3 black--text"
                  style="height: 100%;"
                >
                  <v-chip class="black darken-4 white--text">{{
                    movie.popularity
                  }}</v-chip>
                  <v-chip class="black darken-4 white--text">{{
                    movie.original_language
                  }}</v-chip>
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-title>{{ movie.title }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="Number(`${movie.vote_average}`)"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                  Ratings: {{ movie.vote_average }} ( {{ movie.vote_count }} )
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                <v-icon medium color="dark">mdi-calendar-multiple-check</v-icon>
                {{ movie.release_date }}
              </div>

              <div>
                <p class="text-justify">
                  {{ movie.overview | reduceText }} {{ "..." }}
                </p>
              </div>
            </v-card-text>

            <!--Working on  this section -->

            <v-divider class="mx-10"></v-divider>

            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-card-actions class="my-5">
                <v-spacer></v-spacer>
                <v-btn color="red accent-4">
                  <a
                    :href="
                      `https://www.youtube.com/results?search_query=${
                        movie.title
                      } ${new Date().getFullYear()}`
                    "
                    target="_blank"
                  >
                    <v-icon medium color="white accent-4 ">mdi-youtube</v-icon>
                  </a>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn color="grey darken-4">
                  <a
                    :href="`https://www.netflix.com/search?q=${movie.title}`"
                    target="_blank"
                  >
                    <v-icon medium color="red accent-4">mdi-netflix</v-icon>
                  </a>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn color="grey darken-4">
                  <a
                    :href="
                      `https://www.rottentomatoes.com/search/?search=${
                        movie.title
                      }`
                    "
                    target="_blank"
                  >
                    <v-icon medium color="red accent-4">mdi-movie-roll</v-icon>
                  </a>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn color="grey darken-4">
                  <v-tooltip left>
                    <template v-slot:activator="{ on }">
                      <a href v-on="on">
                        <v-icon medium color="red accent-4"
                          >mdi-download</v-icon
                        >
                      </a>
                    </template>
                    <span>
                      <i>Working on it, please check back later</i> ❤
                    </span>
                  </v-tooltip>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </template>

            <!-- Button to display in higher sreen resolution -->
            <template v-if="$vuetify.breakpoint.smAndDown">
              <v-card-actions class="my-8">
                <v-spacer></v-spacer>
                <v-btn color="red accent-4">
                  <a
                    :href="
                      `https://www.youtube.com/results?search_query=${
                        movie.title
                      } ${new Date().getFullYear()}`
                    "
                    target="_blank"
                  >
                    <v-icon medium color="white accent-4 ">mdi-youtube</v-icon>
                  </a>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn color="grey darken-4">
                  <a
                    :href="`https://www.netflix.com/search?q=${movie.title}`"
                    target="_blank"
                  >
                    <v-icon medium color="red accent-4">mdi-netflix</v-icon>
                  </a>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn color="grey darken-4">
                  <a
                    :href="
                      `https://www.rottentomatoes.com/search/?search=${
                        movie.title
                      }`
                    "
                    target="_blank"
                  >
                    <v-icon medium color="red accent-4">mdi-movie-roll</v-icon>
                  </a>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn color="grey darken-4">
                  <v-tooltip left>
                    <template v-slot:activator="{ on }">
                      <a href v-on="on">
                        <v-icon medium color="red accent-4"
                          >mdi-download</v-icon
                        >
                      </a>
                    </template>
                    <span>
                      <i>Working on it, please check back later</i> ❤
                    </span>
                  </v-tooltip>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </template>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <!-- Movie card ends here -->
  </v-container>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
a {
  text-decoration: none;
}
</style>

<script>
export default {
  name: "HMoviesCards",

  props: ["hollymovies"],

  data: () => ({
    //  overlay: false,
  }),

  filters: {
    reduceText(e) {
      return e.substring(0, 200);
    },
  },
};
</script>
