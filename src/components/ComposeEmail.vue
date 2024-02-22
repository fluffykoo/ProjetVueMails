<template>
  <div class="container">
    <h1>Rédiger un Email</h1>
    <form @submit.prevent="addEmail">
      <input v-model="subject" placeholder="Subject" class="input-field" />
      <textarea
        v-model="body"
        placeholder="Message"
        class="input-field"
      ></textarea>
      <button type="submit" class="submit-button">Send</button>
    </form>
  </div>
</template>


  methods: {
    addEmail() {
      const email = {
        subject: this.subject,
        body: this.body,
      };
      this.$store.commit("addEmail", email); // Ajoute l'e-mail dans le store Vuex
      this.clearFields(); // Réinitialise les champs du formulaire
    },
    clearFields() {
      this.subject = "";
      this.body = "";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333333;
}

.input-field {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.submit-button {
  padding: 10px 15px;
  background-color: #e6466c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
