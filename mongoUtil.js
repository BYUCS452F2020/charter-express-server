const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://charter:charter-express@cluster0.9rn9w.mongodb.net/charter-express?retryWrites=true&w=majority";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('charter-express');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};