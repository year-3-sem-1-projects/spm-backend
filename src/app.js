require("dotenv").config();
import express from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./database";
import router from "./routes/index.routes";

const app = express();

app.use(helmet());

app.use(compression());

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ limit: "1mb" }));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.status(200).json({ message: "Bashaway Server Up and Running" })
);

app.use("/api", router);

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`SPM server successfully started at port ${port}`);
});
