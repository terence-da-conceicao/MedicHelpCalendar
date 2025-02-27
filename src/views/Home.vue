<template>
  <div id="homed">
      <!-- <div v-if="store.user">
      </div>
      <div v-else> -->
          <RouterView/>
      <!-- </div> -->
  </div>
</template>



<script setup lang='js'>
  import { useRoute, useRouter } from 'vue-router';
  import { useAuth } from '../store/auth';
  import {ref, reactive, watchEffect } from 'vue';
  const route = useRoute();
  const router = useRouter();
  const store = useAuth();

  watchEffect(() => {
      if (store.user && route.name != 'calendar') {
          router.push({ name: 'calendar'});
      }
  });
</script>

<style scoped>
#homed {
      /* l'axe principal est horinzontal (x) car main est en flex-direction: row */
  display: flex;
  flex-grow: 1;
  align-items: center;  
  justify-content: center;  
  padding: 0 5vw;
  color: white;
  background: linear-gradient(0deg, #07c7e9 0%, #ffffff 100%);
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.233);
  font-size: 25px;
}

.formPage {
display: flex;
flex-direction: column;
}
</style>