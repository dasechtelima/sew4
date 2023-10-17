<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <input type="text" id="username" class="input flex" placeholder="username">
  <input type="password" id="password" class="input flex" placeholder="password">
  <input type="submit" id="submitButton" value="Log in" class="button input">

</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  submitButton.addEventListener("click", () => {
    // Clear the values of the username and password fields
    usernameInput.value = "";
    passwordInput.value = "";
  });
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.button:hover {
  background: dimgray;
}

.input {
  @apply bg-gray-700 border border-gray-900 rounded m-1 p-1
}

</style>