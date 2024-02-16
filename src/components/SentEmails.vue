<template>
  <div class="container">
    <h1>Emails Envoyés</h1>
    <div v-if="sentEmails.length === 0">
      <p>No emails sent.</p>
    </div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Preview</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(email, index) in sentEmails"
            :key="index"
            @click="selectEmail(email)"
            class="email-item"
          >
            <td>{{ email.subject }}</td>
            <td>{{ email.body }}</td>
            <td>
              <button @click.stop="deleteEmail(email.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const sentEmails = computed(() => store.getters.getSentEmails);

    const selectEmail = (email) => {
      store.dispatch("selectSentEmail", email);
    };

    const deleteEmail = (emailId) => {
      store.dispatch("deleteSentEmail", emailId);
    };

    return {
      sentEmails,
      selectEmail,
      deleteEmail,
    };
  },
};
</script>

<style>
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

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #dddddd;
  padding: 15px;
}

th {
  background-color: #f2f2f2;
  color: #333333;
}

.email-item {
  cursor: pointer;
}

.email-item:hover {
  background-color: #f9f9f9;
}

button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}
</style>
