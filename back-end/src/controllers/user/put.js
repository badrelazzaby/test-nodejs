const userModel = require("../../models/user");

module.exports = {
  updateUser: async (req, res) => {
    await userModel
      .findByIdAndUpdate(
        { _id: req.params.Id },
        {
          nom: req.body.nom,
          prenom: req.body.prenom,
          email: req.body.email,
          telephone: req.body.telephone,
          adresse: req.body.adresse,
        },
        { new: true }
      )
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(409).send("Error when updating user", error);
      });
  },
};
