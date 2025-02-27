<template>
  <h1 id="test">TEST</h1>
  <p> {{  message }}</p>
</template>



<script setup lang="js">
import { ref, reactive} from "vue";
// const message = ref("Hi!");

defineProps({
  message: String
});
</script>




<style>
#test {
  background-color:red;
  color: purple;
}
</style>
