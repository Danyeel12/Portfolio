//VW6QPHvffJsg9Yy2  -- password for cluster004 server
//appuser -- username for cluster004 server
//dont expose credentials in the code ever - this is just for learning purposes
//after .net you can put specific table in to connect to 

let atlasDB = "mongodb+srv://appuser:VW6QPHvffJsg9Yy2@cluster004.xdjel.mongodb.net/usersDatabase?retryWrites=true&w=majority"

//database setup
// ...

const mongoose = require('mongoose');

// Set strictQuery option to false
mongoose.set('strictQuery', false);

module.exports = function() {
  mongoose.connect(atlasDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB.....');
  });
  
  return db;
}

// ...

