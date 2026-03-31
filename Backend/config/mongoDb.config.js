const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@programmingheroassignme.7jfqtzz.mongodb.net/?appName=ProgrammingHeroAssignment`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const eliteSmartInventoryDB = client.db("eliteSmartInventory");

const eliteSmartInventoryDBCollections = {
  usersDbCollection: eliteSmartInventoryDB.collection("users"),
  categoriesDbCollection: eliteSmartInventoryDB.collection("categories"),
  productsDbCollection: eliteSmartInventoryDB.collection("products"),
  ordersDbCollection: eliteSmartInventoryDB.collection("orders"),
  restockQueueDbCollection: eliteSmartInventoryDB.collection("restockQueue"),
  activityLogsDbCollection: eliteSmartInventoryDB.collection("activityLogs"),
};

async function connectDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("MongoDB Connected");
    // Send a ping to confirm a successful connection
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
module.exports = { connectDB, ...eliteSmartInventoryDBCollections, client };
