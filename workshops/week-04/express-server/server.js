import express from "express";

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Get route
app.get("/messages", (req, res, next) => {
  res.status(200).json([
    { id: 1, fullName: "Bob Smith", age: 101 },
    { id: 2, fullName: "Lilly James", age: 28 },
  ]);
});

// Post route
app.post("/messages", (req, res, next) => {
  const { data } = req.body;
  res
    .status(201)
    .json({ message: "Thanks for sending the required data", data });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080..");
});
