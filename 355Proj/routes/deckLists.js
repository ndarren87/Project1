var express = require('express');
var router = express.Router();
var deckLists_dal = require('../dal/deckLists_dal');

router.get('/all', function(req, res, next){
    deckLists_dal.getAll(function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.render('deckLists/deckLists_view_all', {deckLists: result});
        }
    })
});

router.get('/add', function(req, res){
    res.render('deckLists/deckLists_add')
});

router.get('/insert', function(req, res){
    deckLists_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.redirect(302,'/deckLists/all');
        }
    });
});

module.exports = router;