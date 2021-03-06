import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCTWoRFA6l9_nQuyPyb0FPHz6l2W4zSHnc",
    authDomain: "vue-auth-cf9a7.firebaseapp.com",
    projectId: "vue-auth-cf9a7",
    storageBucket: "vue-auth-cf9a7.appspot.com",
    messagingSenderId: "227814315793",
    appId: "1:227814315793:web:28559ce0a0359db4295eb0"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
