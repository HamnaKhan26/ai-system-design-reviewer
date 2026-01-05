import express from "express";
import cors from "cors";
//import reviewRouter from "./routes/review";

const app = express();
app.use(cors());
app.use(express.json());

//app.use("/api/review", reviewRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
