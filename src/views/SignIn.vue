<template>
    <div class="formPage">
        <h1>INSCRIPTION</h1>
        <p>Inscrivez-vous:</p>
        <form style="align-items: center;">
            <input type="text" placeholder="Username" name="filledUsername" required>
            <input type="text" placeholder="Password" name="filledPassword" required>
            <button type="submit">Valider</button>
        </form>
    </div>
</template>



<script setup lang="js">
    import { useRoute } from "vue-router";
    const route = useRoute();
    console.log("route.name : ",route.name)
</script>




<style>
.formPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: solid yellow 5px; */
  box-sizing:content-box;
  
}
input {
    width: 70%;
    /* box-sizing: border-box; */
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
}
</style>