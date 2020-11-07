import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import PostRouter from './routes/posts.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan("tiny"));

app.use('/posts', PostRouter)

app.use('/', (req, res)=>{
    res.json({message: 'this is memories api 🚀'})
})

const PORT = process.env.PORT || 8383;
mongoose
  .connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 8383, () =>
      console.log(`Server is running on port ${PORT}`)
    );
  })
  .catch((error) => console.log(error.message));
// mongoose.set('useFindAndModify', false)