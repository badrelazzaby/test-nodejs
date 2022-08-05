const userModel = require("../../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    await userModel
      .find()
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(403).send("No users found");
      });
  },
  getUserById: async (req, res) => {
    await userModel
      .findById({ _id: req.params.Id })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(403).send("User Not Found");
      });
  },
};
