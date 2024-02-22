<script setup>
</script>
<template>
  <nav class="buttons">
    <button class="button">Click me</button>
    <button class="button" :disabled="isDisabled">Don't Click me</button>
  </nav>
</template>
<style>
.buttons {
  display: flex;
}
.button {
  background-color: white;
  color: #4caf50;
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.button:hover {
  background-color: green;
  color: white;
}
</style>
