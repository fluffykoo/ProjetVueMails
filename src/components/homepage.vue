<script setup>
import Basebutton from "@/components/basebutton.vue";
</script>

<template>
  <div class="homepage-container">
    <div class="homepage">
     <h1>Welcome to Your Mail Application</h1>
      <p><br> TP 3 <br>Ex4 : Create HomePage component <br> Ex5 : Create BaseHeader and BaseFooter <br> Ex6 : Create BaseLayout that uses slots API <br> Ex7 : Create BaseButton with primary color <br> TP 4 <br> Ex1 : Add SigninButton <br> Ex2 : State management with props/events <br> Ex3 : State management with provide/inject <br> Ex4: State management with a store <br> Ex5: Add vue-router dependency <br> Ex6: Add / and /conversations route <br> Ex7: Add header navigation</p>
      <Basebutton />
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
