const { connectDB } = require("./config/mongoDb.config");
const port = process.env.PORT || 5000;

const runServer = async () => {
  // 1. Connect to Database first
  const db = await connectDB();

  // 2. Define your collections (available globally or pass to routes)
  const userCollection = db.collection("user");
  const productCollection = db.collection("product");

  // 3. Start Express Listen
  app.listen(port, () => {
    console.log(` Server is running on port ${port}`);
  });
};

runServer().catch(console.dir);
