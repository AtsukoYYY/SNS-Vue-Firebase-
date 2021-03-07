import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyBYj2cCvhUWhGQ8d7a5aolh5ykVgnT5Mvk",
    authDomain: "whisperer-b4ee8.firebaseapp.com",
    projectId: "whisperer-b4ee8",
    storageBucket: "whisperer-b4ee8.appspot.com",
    messagingSenderId: "767031454601",
    appId: "1:767031454601:web:1064cabf25420d47fb4f58"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
