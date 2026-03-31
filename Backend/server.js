require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/mongoDb.config");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const runServer = async () => {
  try {
    // Connect the client to the server
    await connectDB();

    // 2. Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

runServer().catch(console.dir);
