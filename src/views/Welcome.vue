
<template>
    <div id="welcome">
        <h3 class="cormorant-garamond-semibold" >Vous êtes sur Medic'Help Calendar. Le calendrier numérique pour vos prises de médicaments, vos renouvellements d'ordonnances et tout ce qu'il vous faut ;)</h3>
    </div>
  </template>
  
  
  
  <script setup lang="js" defer>
      import { useRoute } from "vue-router";
      const route = useRoute();
      console.log("route.name : ",route.name);
  </script>
  
  
  <style>
  .cormorant-garamond-semibold {
    font-family: "Cormorant Garamond", serif;
    font-weight: 300;
    font-style: normal;
  }
  
  /* @media (max-width: 1024px)
  { 
      body {
  height: 100%!important;
  overflow: auto!important;
  max-height: 100% !important;
  } */
  </style>