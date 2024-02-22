<template>
  <div class="container">
    <h1>Sent Email Detail</h1>
    <div v-if="selectedEmail">
      <p><strong>Subject:</strong> {{ selectedEmail.subject }}</p>
      <p><strong>Body:</strong> {{ selectedEmail.body }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const selectedEmail = ref(null);

    // Récupérer l'ID de l'e-mail envoyé à partir des paramètres de l'URL
    const emailId = router.currentRoute.value.params.emailId;

    // Trouver l'e-mail correspondant dans la liste des e-mails envoyés
    const email = store.getters.getSentEmails.find(
      (email) => email.id === emailId
    );
    selectedEmail.value = email;

    return {
      selectedEmail,
    };
  },
};
</script>

<style>
/* Styles */
</style>
