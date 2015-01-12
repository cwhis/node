/*jslint node:true, nomen: true, vars:true, plusplus: true*/
'use strict';
var express = require('express'),
    app = express();

    app.use(function(req,res,next){
        next();
    });
    app.use(function(req,res,next){
        res.send('Oops!Broke at hook 2');
    });
    app.get('/',function(req,res){
        res.send('You\'ll never see this');
    });

app.listen(8125);
