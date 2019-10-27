<template>
  <div>
    <v-row no-gutters>
      <v-col v-bind:key="movie.id" v-for="movie in movies" cols="12" sm="6" md="4">
        <!-- Movie card -->
        <v-hover v-slot:default="{ hover }">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374" height="1100">
            <v-img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              gradient="to top right, rgba(100,115,201,.20), rgba(25,32,72,.3)"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue-grey darken-2 v-card--reveal display-3 black--text"
                  style="height: 100%;"
                >
                  <v-chip class="black darken-4 white--text">{{movie.popularity}}</v-chip>
                  <v-chip class="black darken-4 white--text">{{movie.original_language}}</v-chip>
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-title>{{movie.original_title}}</v-card-title>

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

                <div
                  class="grey--text ml-4"
                >Ratings: {{movie.vote_average}} ( {{movie.vote_count}} )</div>
              </v-row>

              <div class="my-4 subtitle-1 black--text">
                <v-icon medium color="dark">mdi-calendar-multiple-check</v-icon>
                {{movie.release_date}}
              </div>

              <div>
                <p class="text-justify">
                  <v-icon medium color="dark">mdi-information-outline</v-icon>
                  {{movie.overview}}
                </p>
              </div>
            </v-card-text>

            <!--Working on  this section -->

            <!-- <v-divider class="mx-4"></v-divider>
                <v-card-actions>
                  <v-btn  color="deep-purple accent-4" text @click="reserve">
                    Reserve
                  </v-btn>
            </v-card-actions>-->
          </v-card>
        </v-hover>

        <!-- Movie card ends here -->
      </v-col>
    </v-row>
  </div>
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
</style>

<script>
export default {
  name: "Movies",

  props: ["movies"],

  data: () => ({
    loading: false,
    selection: 1
  }),

// To use this for the last section of the movie card
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>