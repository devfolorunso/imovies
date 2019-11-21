import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import vueSmoothScroll from 'vue2-smooth-scroll'
import * as firebase from 'firebase';
import store from "./store";


Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

// Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyButiwYjysx4P2yx8ezZkoJ3d3ie48QgjY",
  authDomain: "imovies-db.firebaseapp.com",
  databaseURL: "https://imovies-db.firebaseio.com",
  projectId: "imovies-db",
  storageBucket: "imovies-db.appspot.com",
  messagingSenderId: "862857210028",
  appId: "1:862857210028:web:fb0dc49c39edfc4f03d709",
  measurementId: "G-BV5KV4D5PY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(user => {
store.dispatch("fetchUser", user);
});


new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
