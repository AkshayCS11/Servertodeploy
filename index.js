import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import empRouter from "./routes/empdata.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use("/add", empRouter);

app.get('/', (req, res) => {
  res.send('APP IS RUNNING');
})

const CONNECTION_URL = 'mongodb+srv://adminakshay:G7TIQXH3tTNx4bMW@cluster0.sdvxgsh.mongodb.net/appdata?retryWrites=true&w=majority';
const PORT = process.env.PORT || 10000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);