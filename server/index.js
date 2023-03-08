import express from "express";
import bodyParser from "body-parser";
import mongoose, { Mongoose } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import { createProduct } from "./controllers/product.js";
import { createCat } from "./controllers/cat.js";
import catRoutes from "./routes/cats.js";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { register } from "./controllers/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* SETUP FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/auth/register", register);
app.post("/products", createProduct);
app.post("/cats", createCat);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cats", catRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is up and running on port ${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
