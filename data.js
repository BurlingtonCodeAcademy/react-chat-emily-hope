//bring in MongoClient and ObjectID packages
const { MongoClient, ObjectId } = require("mongodb");

//set up a class that can connect to our multiple chat databases
class DataStorage {
  constructor(dbUrl, dbName, dbCollection) {
    this.dbUrl = dbUrl;
    this.dbName = dbName;
    this.dbCollection = dbCollection;
    this.dbClient = null;
  }

  //we are going to want to create 3 methods (to start) for this database
  //1st to connect to it!
  async connect() {
    if (this.dbClient && this.dbClient.isConnected()) {
      return this.dbClient;
    } else {
      console.log(`Connecting to ${this.dbUrl}`);
      this.dbClient = await MongoClient.connect(this.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to database!");
      return this.dbClient;
    }
  }

  //2nd to write to it!
  async chatInsert(form) {
    let response = { status: null, error: null };
    let client = await this.connect();
    let db = await client.db(this.dbName);
    try {
      let collection = await db.collection(this.dbCollection);
      console.log(`inserting item.....`);
      await collection.insertOne(form);
      console.log("GREAT SUCCESS");
      response.status = "ok";
    } catch (error) {
      response.error = error.toString();
      console.log(error.toString());
    }
    return response;
  }

  //3rd to read from it!
  async allChat() {
    let client = await this.connect();
    let db = await client.db(this.dbName);
    let response = { status: null, error: null, data: null };
    let messages = [];
    try {
      let collection = await db.collection(this.dbCollection);
      await collection.find({}).forEach((message) => messages.push(message));
      response.status = "ok";
      response.data = messages;
    } catch (error) {
      response.error = error.toString();
      console.log(error.toString());
    }
    return response;
  }
}

//exporting to server side
module.exports = DataStorage;
