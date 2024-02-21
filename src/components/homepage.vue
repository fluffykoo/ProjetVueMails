<template>
  <div class="homepage-container">
    <div class="homepage">
      <img src="@/assets/email-icon.jpeg" alt="Email Icon" class="email-icon" />

      <h1 class="welcome-message">Bienvenue sur notre plateforme de mails ! </h1>
      <p>Gérez vos e-mails efficacement avec notre puissante application de messagerie électronique.</p>
      <router-link to="/inbox">
        <BaseButton label="Go to Inbox" />
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      welcomeMessage: 'Bienvenue sur notre site !'.split('')
    }
  }
}
</script>




<style scoped>

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.homepage-container {
  display: flex;
  align-items: flex-start; /* Aligner en haut */
  justify-content: center;
  height: 100vh; /* Hauteur de la page */
}

.welcome-message {
  text-align: center; /* Centrer le texte */
  font-size: 3em; /* Taille du texte */
  margin-top: 20px; /* Espacement en haut */
}

.letter {
  display: inline-block;
  animation: slideInFromTop 2s ease-in-out forwards;
}


body, html {
  background-color: #e6466c; /* Couleur de fond du header */
}
.homepage-container {
  display: flex;
  align-items: flex-start; /* Aligner en haut */
  justify-content: center;
  min-height: 100vh;
  
  
  margin-top: 30px; /* Espacement en haut */
}

.homepage {
  max-width: 500px;
  padding: 20px;
  text-align: center;
  background-color: #f0b1c1;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(133, 23, 53, 0.5);
  animation: fallFromSky 2s ease-in-out forwards; /* Ajouter l'animation */
}

.email-icon {
  opacity: 0; 
  animation: fadeIn 2s ease-in forwards;
  width: 300px; 
  height: 300px; 
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes fallFromSky {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
