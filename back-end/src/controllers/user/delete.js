const userModel = require("../../models/user");

module.exports = {
  deleteUser: async (req, res) => {
    await userModel
      .findByIdAndDelete({ _id: req.params.Id })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(403).send("Error deleting user", error);
      });
  },
};
