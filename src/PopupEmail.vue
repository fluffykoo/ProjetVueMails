<template>
   <div v-if="selectedEmail" class="popup-overlay">
    <div class="popup-content">
      <h2>{{ selectedEmail.subject }}</h2>
      <p>{{ selectedEmail.body }}</p>
      <button @click="closePopup">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedEmail: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

button {
  margin-top: 10px;
}
</style>
