
<template>
  <header class="app-header">
    <div class="header">
      <img src="@/assets/email-icon.jpeg" alt="Logo" class="logo" />
    </div>
    <div class="user-greeting" v-if="isLoggedIn">Bonjour {{ userName }} !</div>
    <nav class="nav-buttons">
      <router-link class="nav-button" to="/">Accueil</router-link>
      <signinButton v-if="!isLoggedIn" />
      <router-link v-if="isLoggedIn" class="nav-button" to="/conversations"
        >Boîte de réception</router-link
      >
       <router-link v-if="isLoggedIn" class="nav-button" to="/sent"
        >Emails envoyés</router-link
      >
    </nav>
  </header>
</template>

<script>
import signinButton from "@/components/signinbutton.vue";
import store from "@/lib/store.js";

export default {
  name: "",
  components: {
    signinButton,
  },
  computed: {
    isLoggedIn() {
      return store.getters.isAuthenticated;
    },
    userName() {
      return store.getters.getUserName;
    },
  },
};
</script>

<style scoped>
.app-header {
  background-color: #e6466c;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
}

.header {
  font-size: 1.5rem;
}

.user-greeting {
  font-size: 1rem;
}

.nav-buttons {
  display: flex;
}

.nav-button {
  background-color: white;
  color: #e6466c;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.nav-button:hover {
  background-color: hsl(345, 9%, 82%);
  color: white;
}
</style>
