import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import router from "./routes/index.js";
import cookieParser  from "cookie-parser"

const app = express();
const PORT = 8000 || process.env.PORT;

connectDB();
app.use(express.json());
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}));
app.use(cookieParser())
app.use("/api", router);

app.get('/',(req, res)=>{
  res.send("API working")
})



app.listen(PORT, () => {
  console.log(`Server bien demarré au port:  http://localhost:${PORT}`);
});
