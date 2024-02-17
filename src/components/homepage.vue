<script setup>
import Basebutton from "@/components/basebutton.vue";
</script>

<template>
  <div class="homepage-container">
    <div class="homepage">
     <h1>Welcome to Your Mail Application</h1>
    </div>
  </div>
</template>

<style scoped>
.homepage-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.homepage {
  max-width: 500px;
  padding: 20px;
  text-align: center;
  background-color: gray;
}
</style>
