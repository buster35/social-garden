const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const photoRoutes = require("./photo-routes");

router.use("/post", postRoutes);
router.use("/user", userRoutes);
router.use("/photo", photoRoutes);

module.exports = router;
