<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nom</th>
          <th class="text-left">Prénom</th>
          <th class="text-left">Email</th>
          <th class="text-left">Téléphone</th>
          <th class="text-left">Adresse</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in listUsers" :key="user._id">
          <td>{{ user.nom }}</td>
          <td>{{ user.prenom }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.telephone }}</td>
          <td>{{ user.adresse }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from "axios";
export default {
  name: "UserList",

  data: () => ({
    listUsers: [],
  }),
  mounted() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers: async function () {
      await axios
        .get("http://localhost:8001/api/v1/user/getAll")
        .then((res) => {
          console.log("User List", res);
          this.listUsers.push(...res)
        })
        .catch((err) => console.log("User List", err));
    },
  },
};
</script>
