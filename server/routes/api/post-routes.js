const router = require("express").Router();

// Import any controllers needed here
const {
  createPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deleteOnePost,
  getUserPosts,
} = require("../../controllers/post-controller");

console.log("HERE");

// Declare the routes that point to the controllers above
router.route("/").post(createPost); //done we don't need to touch

//TODO: test these routes
router.route("/all").get(getAllPosts);
router.route("/all/:userId").get(getUserPosts);
router.route("/:id").get(getOnePost);
router.route("/:id").put(updatePost);
router.route("/:id").delete(deleteOnePost);

module.exports = router;
