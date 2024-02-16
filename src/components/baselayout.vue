<template>
  <div class="base-layout">
    <BaseHeader />
    <router-view />
    <BaseFooter />
  </div>
</template>

<script setup>
import BaseHeader from './header.vue';
import BaseFooter from './footer.vue';
</script>

<style scoped>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
