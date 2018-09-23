"use strict";
const fileUtilities= require("../mockUtilities/fileUtilities");
const path = require("path");
class EnvironmentController{

    static getAllEnvironments(req,res,next){
     var readPromise =  fileUtilities.readFile(path.join(__dirname,"../mockingFiles/environments.json"),"utf8");
      readPromise.then(function(data){
           res.status(200).send(data);
      }).catch(function(err){
            res.status(500).send(err);
      });
    }
    static addEnvironents(req,res,next){

    }
    static deleteEnvironemens(req,res,next){

    }
    static updateEnvironments(req,res,next){

    }
}

module.exports = EnvironmentController;