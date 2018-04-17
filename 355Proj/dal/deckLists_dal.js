var mysql = require('mysql');
var db = require('./db_connections.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM deckLists;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO deckLists (name, numCards, creatures, spells, artifacts, lands, deckStyle_Id) VALUES (?, ?, ?, ?, ?, ?, ?)';

    var queryData = [params.name, params.numCards, params.creatures, params.spells, params.artifacts, params.lands, params.deckStyle_Id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};