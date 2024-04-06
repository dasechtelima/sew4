<script setup>
import ForumPage from './components/ForumPage.vue'
</script>

<template>
  <div class="flex-column">
    <header>
      <img alt="Crypto illustration" class="logo" src="./assets/undraw_crypto_portfolio_2jy5.svg"
           width="125"
           height="125"/>
      <div class="wrapper">
        <h1>Welcome to the most amazing crypto enthusiast forum!</h1>
      </div>
    </header>
    <ForumPage/>
  </div>
</template>

<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
