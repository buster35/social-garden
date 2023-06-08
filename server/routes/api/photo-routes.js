const router = require("express").Router();

// Import any controllers needed here
const { savePhoto } = require("../../controllers/photo-controller");

// const { verifyUser } = require("../../controllers/user-controller");

// Declare the routes that point to the controllers above
router.route("/").post(savePhoto);
// keep whatever one of these we need to authorize user before photo upload
// router.route("/auth").post(authUser);
// router.route("/verify").post(verifyUser);

module.exports = router;
