<template>
  <!--Si store.user est null, alors on est déonnecté et les liens pour s'inscrire et se connecter
  apparaissent. -->
  <nav id="nav">
      
      <div class="lien" v-if="store.user === null">
          <div>    
              <RouterLink to="/signin" class="lien">S'inscrire</RouterLink>
          </div>
          <div>
              <RouterLink to="/login" class="lien">Se connecter</RouterLink>
          </div>
      </div>
      <div v-else class="lien">
          <div>  
              <p> {{  store.user.username }}</p>  
              <p>Mon Profil</p>
          </div>
          <div>
              <p>Se Déconnecter</p>
          </div>
      </div>
  </nav>
</template>




<script setup lang="js">
  import { useAuth } from "../store/auth.js";
  const store = useAuth();
</script>



<style>

#nav {
  background-color: rgb(17, 142, 180);
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 100vh;
  padding: 2;
  justify-content: center;
  min-width: 250px;
  max-width: 430px;
}

.lien div{
  padding: 30px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  font-style: normal;
  text-decoration-line: none;
}

.lien.div {
  padding: 30px;
  /*comment gérer les div indépendamment?*/
}

</style>
