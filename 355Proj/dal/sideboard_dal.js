var mysql = require('mysql');
var db = require('./db_connections.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM sideboard;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO sideboard (deckAgainst, description, creatures, spells, artifacts, lands, deck_Id) VALUES (?, ?, ?, ?, ?, ?, ?)';

    var queryData = [params.deckAgainst, params.description, params.creatures, params.spells, params.artifacts, params.lands, params.deck_Id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};