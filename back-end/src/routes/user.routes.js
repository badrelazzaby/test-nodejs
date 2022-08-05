const express = require("express");
const postUser = require("../controllers/user/post");
const putUser = require("../controllers/user/put");
const getUser = require("../controllers/user/get");
const deleteUser = require("../controllers/user/delete");
const router = express.Router();

router.route("/user/add").post(postUser.addUser);
router.route("/user/getAll").get(getUser.getAllUser);
router.route("/user/:Id").get(getUser.getUserById);
router.route("/user/update/:Id").put(putUser.updateUser);
router.route("/user/delete/:Id").delete(deleteUser.deleteUser);

module.exports = router
