const Post = require("../models/postModel");
const myController = require("../api/myController");
const adminController = require("../api/adminController");
const express = require("express");
const router = express.Router();

//Defino rutas y acciones de respuesta
router.route("/").get(myController.inicio);
router.route("/login").get(adminController.vista).post(adminController.logine);
router.route("/logout").get(adminController.logout);
router.route("/subirPost").get(adminController.postear2);
router.route("/seccionAdmin").get(adminController.seccionAdmin);
router.route("/posteo").get(adminController.subirPost);
router.route("/config").get(adminController.config);
router.route("/*").get(adminController.error404);
module.exports = router;
