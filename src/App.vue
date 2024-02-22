<script setup>
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from "./components/homepage.vue";
import ConversationsIndexPage from "./components/boitedereception.vue";
import Baselayout from "./components/baselayout.vue";

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/conversations',
    component: ConversationsIndexPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
</script>

<template>
  <Baselayout>
    <main>
      <router-view />
    </main>
  </Baselayout>
</template>

<style>
body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
