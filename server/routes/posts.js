import express from 'express'
import {
  createPost,
  getPosts,
  updatePost,
  getPost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router()


router.get('/', getPosts)
router.post('/', createPost)
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/like", likePost);



export default router;