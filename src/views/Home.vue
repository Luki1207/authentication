<template>
  <div class="home">
    <h1>Wellcome, {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br />
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;

      if (user) {
        name.value = user.email.split("0"[0]);
      }
    });

    const logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("sign out"))
        .catch((err) => alert(err.mesage));
    };

    return {
      name,
      logout,
    };
  },
};
</script>

