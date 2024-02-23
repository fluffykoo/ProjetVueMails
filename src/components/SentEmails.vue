<template>
  <div class="container">
    <h1>Emails Envoyés</h1>
    <div v-if="sentEmails.length === 0">
      <p>No emails sent.</p>
    </div>
    <div v-else>
   
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Rechercher un e-mail"
          class="search-input"
        />
        <button @click="searchEmails" class="search-button">Rechercher</button>
      </div>

  
      <div class="email-list-container">
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
              v-for="(email, index) in filteredEmails"
              :key="index"
              @click="selectEmail(email)"
              class="email-item"
            >
              <td>
                
                <div v-html="highlightText(email.subject)"></div>
              </td>
              <td>
                
              </td>
              <td>
                <button @click.stop="deleteEmail(email.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const sentEmails = computed(() => store.getters.getSentEmails);

    const selectedEmail = ref(null);
    const searchQuery = ref("");

    const selectEmail = (email) => {
      // Logique de sélection d'e-mail, si nécessaire
    };

    const deleteEmail = (emailId) => {
      store.dispatch("deleteSentEmail", emailId);
    };

    const searchEmails = () => {
     
    };

    const filteredEmails = computed(() => {
      if (!searchQuery.value.trim()) {
        return sentEmails.value;
      } else {
        return sentEmails.value.filter(
          (email) =>
            email.subject
              .toLowerCase()
              .includes(searchQuery.value.toLowerCase()) ||
            email.body.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
    });

    
    const highlightText = (text) => {
      if (!searchQuery.value.trim()) return text;
      const regex = new RegExp(`(${searchQuery.value})`, "gi");
      return text.replace(regex, "<span class='highlighted'>$1</span>");
    };

    return {
      sentEmails,
      selectedEmail,
      searchQuery,
      selectEmail,
      deleteEmail,
      searchEmails,
      filteredEmails,
      highlightText,
    };
  },
};
</script>

<style scoped>
.email-list-container {
  max-height: 400px;
  overflow-y: auto;
}
</style>




<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(217, 229, 229, 255);
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
  border-bottom: 1px solid #dbe4e4;
  padding: 15px;
}

th {
  background-color: #f7f6cf;
  color: #333333;
}

.email-item {
  cursor: pointer;
}

.email-item:hover {
  background-color: #f7f6cf;
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

.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex-grow: 1;
}

.search-button {
  background-color: #f4cfdf;
  color: #333;
  border: none;
  padding: 8px 15px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.search-button:hover {
  background-color: #e6466c;
  color: #fff;
}
</style>
