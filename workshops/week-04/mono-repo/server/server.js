import express from "express";
import dotenv from "dotenv";
import { Pool } from "pg";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

// Post route
app.post("/messages", async (req, res, next) => {
  try {
    const { msg_name, content, test } = req.body;

    await db.query(
      `INSERT INTO messages (msg_name, content, test) VALUES ($1, $2, $3)`,
      [msg_name, content, test]
    );

    res.status(201).json({
      success: true,
      message: "Message created successfully",
    });
  } catch (error) {
    next(error);
  }
});

// Get route
app.get("/messages", async (req, res, next) => {
  try {
    const queryStringMsg = req.query.msg;

    const result = await db.query(`SELECT * FROM messages;`);

    let data = result.rows;

    if (queryStringMsg) {
      data = data.filter((item) => {
        return item.msg_name.toLowerCase() === queryStringMsg;
      });
    }

    res.status(200).json({
      success: true,
      messages: data,
      // messages: result.rows,
    });
  } catch (error) {
    next(error);
  }
});

// Get message by id
app.get("/messages/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await db.query(
      `
        SELECT * FROM messages WHERE id = $1
        `,
      [id]
    );

    if (result.rows.length === 0) {
      const error = new Error("Message not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: result.rows[0],
    });
  } catch (error) {
    next(error);
  }
});

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    error: {
      statusCode,
      message,
    },
  });
};

app.use(errorHandler);

app.listen(8080, () => {
  console.log("Server is listening on port 8080..");
});

// CREATE TABLE quests (
//   id bigint generated always as identity primary key,
//   title TEXT,
//   description TEXT,
//   posted_by TEXT,
//   is_completed BOOLEAN DEFAULT FALSE,
//   completed_by TEXT,
//   success_roll INTEGER CHECK (success_roll BETWEEN 1 AND 10),
//   difficulty TEXT,
//   created_at TIMESTAMP DEFAULT NOW(),
// );
// https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-CHECK-CONSTRAINTS

// https://www.postgresql.org/docs/current/functions-comparison.html#FUNCTIONS-COMPARISON-BETWEEN

// https://www.postgresql.org/docs/current/functions-comparisons.html#FUNCTIONS-COMPARISONS-IN-SCALAR
