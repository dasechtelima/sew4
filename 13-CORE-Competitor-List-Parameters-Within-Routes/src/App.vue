<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { RouterLink, RouterView } from 'vue-router'
import List from './components/List.vue'
</script>

<template>
  <header>
    <img alt="Track and Field illustration" class="logo" src="./assets/undraw_track_and_field_-33-qn.svg"
         width="125"
         height="125"/>

    <div class="wrapper">
      <HelloWorld msg="Welcome to the competitor view"/>
      <nav>
        <RouterLink to="/">List</RouterLink>
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
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  text-align: center;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .header .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

