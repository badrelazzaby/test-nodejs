const userModel = require("../../models/user");

module.exports = {
  addUser: async (req, res) => {
    const newUser = new userModel({
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      telephone: req.body.telephone,
      adresse: req.body.adresse,
    });

    await newUser
      .save()
      .then((data) => {
        res.status(200).send("user Added successfully", data);
      })
      .catch((error) => {
        res.status(409).send("Error when adding new user", error);
      });
  },
};
