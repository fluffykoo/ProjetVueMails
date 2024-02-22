<template>
  <div class="container">
    <h1>Conversations Index Page</h1>
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="conversation in conversations"
          :key="conversation.id"
          @click="selectConversation(conversation)"
        >
          <td>{{ conversation.subject }}</td>
          <td>{{ conversation.bodyPreview }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedConversation" class="selected-conversation">
      <h2>Selected Conversation</h2>
      <p><strong>Subject:</strong> {{ selectedConversation.subject }}</p>
      <p><strong>Body:</strong></p>
      <div v-html="selectedConversation.body.content"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getConversations } from "@/lib/microsoftGraph.js";

export default {
  name: "ConversationsIndexPage",
  setup() {
    const conversations = ref([]);
    const selectedConversation = ref(null);
    onMounted(async () => {
      try {
        conversations.value = await getConversations();
      } catch (error) {
        console.error("Failed to fetch conversations:", error);
      }
    });
    const selectConversation = (conversation) => {
      selectedConversation.value = conversation;
    };
    return {
      conversations,
      selectedConversation,
      selectConversation,
    };
  },
};
</script>

<style>
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

/* Selected Conversation Styles */
.selected-conversation {
  margin-top: 40px;
}

.selected-conversation h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
}

.selected-conversation p {
  margin-bottom: 10px;
}

.selected-conversation p strong {
  font-weight: bold;
}

.selected-conversation p:last-child {
  margin-bottom: 0;
}

tbody tr:hover {
  background-color: #f9f9f9;
  cursor: pointer;
}
</style>

