<template>
  <nav class="buttons">
    <div>
      <button class="button" @click="signIn" v-if="!isLoggedIn">
        Se Connecter
      </button>
      {{ user.userName || "Non connecté" }}
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { signInAndGetUser } from "@/lib/microsoftGraph.js";
import store from "@/lib/store.js";

export default {
  name: "signinbutton",
  setup() {
    const user = ref({ userName: null });

    const signIn = async () => {
      try {
        const authResult = await signInAndGetUser();
        user.value.userName = authResult.account.name;
        console.log("Utilisateur connecté:", user.value.userName);

        store.commit("setUser", user.value.userName);
        store.commit("setAuthentication", true);
      } catch (error) {
        console.error("Erreur de connexion:", error);
      }
    };

    return {
      user,
      isLoggedIn: store.getters.isAuthenticated,
      signIn,
    };
  },
};
</script>

<style>
.buttons {
  display: flex;
}

.button {
  background-color: white;
  color: #e0456a;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  background-color: #d5cdcf;
  color: white;
}
</style>
