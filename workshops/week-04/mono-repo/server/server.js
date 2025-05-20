import express from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

// Get route
app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Bonjour!" });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080..");
});
