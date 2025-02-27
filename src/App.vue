<template>
  <main id="main">
    <!--Nav et Home ont un attribut isLoggedIn (c'est leur propriété, 
    ce qui va determiner leur comportement) et cet attribut (donc leur comportement)
    va bouger en fonction de la valeur de la propriété isLoggedIn au-dessus
    dans script. 
    Leur contenu sera celuid e l'utilisateur déconnecté si isLoggedIn ets false
    et celui de l'utilisateur connecté si isLoggedIn est true. -->
      <!-- <Nav v-bind:isLoggedIn="isLoggedIn" />
      <Home v-bind:isLoggedIn="isLoggedIn" /> -->
      <Nav />
      <Home />
  </main>
</template>


<script setup lang="js">
  import {ref } from 'vue';
  import Home from "./views/Home.vue";
  import Nav from "./components/Nav.vue";
  //par défaut, le site s'affiche sans état connecté. 
</script>



<style>
#main {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    overflow-block:auto;
}
</style>

