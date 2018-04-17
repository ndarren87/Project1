var mysql = require('mysql');
var db = require('./db_connections.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM matchups;';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = 'INSERT INTO matchups (deckType1, deckType2, favoredDeck, winRate, postSBRate, deckStyle_Id) VALUES (?, ?, ?, ?, ?, ?)';

    var queryData = [params.deckType1, params.deckType2, params.favoredDeck, params.winRate, params.postSBRate, params.deckStyle_Id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};