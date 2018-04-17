var express = require('express');
var router = express.Router();
var sideboard_dal = require('../dal/sideboard_dal');

router.get('/all', function(req, res, next){
    sideboard_dal.getAll(function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.render('sideboard/sideboard_view_all', {sideboard: result});
        }
    })
});

router.get('/add', function(req, res){
    res.render('sideboard/sideboard_add')
});

router.get('/insert', function(req, res){
    sideboard_dal.insert(req.query,function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.redirect(302,'/sideboard/all');
        }
    });
});

module.exports = router;