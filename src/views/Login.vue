<template>
    <div class="formPage">
        <h1>CONNEXION</h1>
        <p>Connectez-vous:</p>
        <!-- <p> Login : {{ store.user.username }}</p> -->
        <form @submit.prevent="login">
            <input name="username" type="text" placeholder="username" required>
            <input name="password" type="password" placeholder="password" required>
            <button type="submit">Valider</button>
        </form>
    </div>
</template>




<script setup lang="js">
    import { useRoute } from "vue-router";
    import { ref, reactive } from 'vue';
    import { useAuth } from '../store/auth';
    const route = useRoute();


    const store = useAuth();
    const login = () => {
        store.authenticate();
}

    // const testUsername = "François";
    // const testPassword = "toto";
    // const username = ref("");
    // const password = ref("");
</script>



<style>
.formPage {
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
}
</style>