<template>
  <div>
    <v-text-field label="Nom" v-model="nom"></v-text-field>
    <v-text-field label="Prenom" v-model="prenom"></v-text-field>
    <v-text-field label="Email" v-model="email"></v-text-field>
    <v-text-field label="Telephone" v-model="telephone"></v-text-field>
    <v-text-field label="Adresse" v-model="adresse"></v-text-field>
    <v-btn
      depressed
      color="primary"
      onclick="addUser()"
    >
      Ajouter
    </v-btn>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",

  data: () => ({
    nom:"",
    prenom:"",
    email:"",
    telephone:"",
    adresse: ""
  }),
  methods: {
    addUser: async function () {
        const User = {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            telephone: this.telephone,
            adresse: this.adresse
        }
      await axios.post("http://localhost:8001/api/v1/user/add", User)
      .then( res => console.log("User",res))
      .catch( err => console.log("User",err))
    },
  },
};
</script>
