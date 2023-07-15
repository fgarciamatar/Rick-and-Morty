const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav")
const deleteFav = require("../controllers/deleteFav")
const postUser = require("../controllers/postUser")
const router = Router();

router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/character/:id",getCharById);

module.exports = router;