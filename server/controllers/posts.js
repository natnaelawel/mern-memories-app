import mongoose from "mongoose";
import Post from "../models/postMessage.js";

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getPosts = async  (req, res) => {
    try {
        const posts =  await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json(error.message)
    }
};

export const createPost = async (req, res) =>{
    const newPost = new Post(req.body)
    try {
        const post = await newPost.save()
        // const post = await Post.create(req.body)
        res.status(201).json(post)
    } catch (error) {
        res.status(403).json(error.message)
    }
    res.json({message: 'Post has been created successfully'});
}

export const updatePost = async (req, res)=>{
    const {id: _id} = req.params
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).json({message: "No post with that id!"})
    const updatedPost = await Post.findByIdAndUpdate(_id, post, {new: true})

    res.status(201).json(updatedPost)

}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).json({ message: "No post with that id!" });
  const deletedPost = await Post.findByIdAndDelete(_id, { rawResult: true});

  res.status(201).json(deletedPost);
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    res.status(404).json({ message: "No post with that id!" });
    const post = await Post.findById(_id)
    post.likeCount = post.likeCount + 1;
    const likedPost = await post.save()
//   const likedPost = await Post.findByIdAndUpdate(_id, {likes}, { new: true });

  res.status(201).json(likedPost);
};
