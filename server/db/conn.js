const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: async function (callback) {
    await client.connect();
    _db = client.db("gator-dwelling");
    console.log("Connected to database");
    return _db;
  },
 
  getDb: function () {
    return _db;
  },
};