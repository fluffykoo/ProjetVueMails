<template>
  <div class="container">
    <h1>Rédiger un Email</h1>
    <form @submit.prevent="addEmail">
      <input v-model="subject" placeholder="Subject" class="input-field" required />
      <textarea
        v-model="body"
        placeholder="Message"
        class="input-field"
        required
      ></textarea>
      <button type="submit" class="submit-button">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: "",
      body: "",
    };
  },
  methods: {
    addEmail() {
      if (this.subject && this.body) {
        const email = {
          subject: this.subject,
          body: this.body,
        };
        this.$store.commit("addEmail", email); // Ajoute l'e-mail dans le store Vuex
        this.clearFields(); // Réinitialise les champs du formulaire
      } else {
        alert("Veuillez remplir tous les champs requis.");
      }
    },
    clearFields() {
      this.subject = "";
      this.body = "";
    },
  },
};
</script>

<style scoped>
/* Styles remain the same */
</style>
