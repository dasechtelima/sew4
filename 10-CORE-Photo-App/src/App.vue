<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <img alt="Illustration of a male photographer" class="logo" src="@/assets/undraw_landscape_photographer_blv1.svg"
         width="125" height="125"/>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
      </nav>
    </div>
  </header>
  <div class="content">
    <RouterView/>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background: #c8ddf5;
  border-radius: 15px;
  font-family: "Lucida Grande", "Arial", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 14pt;
  text-align: center;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.content {
  font-family: "Lucida Grande", "Arial", sans-serif;
  display: flex;
  justify-content: center;
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 18pt;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
