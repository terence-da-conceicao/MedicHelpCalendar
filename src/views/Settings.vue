<template>
    <div>
        <h1>Paramètres d'utilisateurs</h1>
    </div>
</template>


<script setup lang="js">
    import { useRoute } from "vue-router";
    const route = useRoute();
    console.log("route.name : ",route.name);
</script>


<style></style>



