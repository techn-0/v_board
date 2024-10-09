import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

// Body Parser 미들웨어 설정 (용량 제한을 "30mb"로 수정)
app.use(bodyParser.json({ limit: "30bm", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30bm", extended: true }));
app.use(cors());

// MongoDB 연결 URL
const CONNECTION_URL =
  "mongodb+srv://jsboard:jsboard13@cluster0.5wmd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// 서버 포트 설정
const PORT = process.env.PORT || 5000;

// MongoDB 연결 및 서버 시작
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log("MongoDB 연결 실패:", error));

// mongoose.set("useFindAndModify", false);
