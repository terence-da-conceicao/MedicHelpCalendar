import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

//le store s'appelle auth et gère l'état d'authentification de l'utilisateur. Dans ce store,
// on a une fonction composable qui permet d'accéder aux données du store.
// ddefineSTore() permet de définir le store, et attend en arguemtn le nom du store, aisi qu'un autre
//argument contenant la fonction setup.

export const useAuth = defineStore('auth', () => {
    const user = ref(null) //null par défaut
    const authenticate = () => {
        user.value = {
            username: 'Jean Dodo'
            //faire appel à la BDD pour récupérer le nom du user
        };
    };
    return {
        user,
        authenticate
    };
});