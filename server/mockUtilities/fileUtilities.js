"use strict";
const fs = require("fs");
const path = require("path");
class FileUtilities {
    static readFile(path,type){
        return new Promise(function(resolve,reject){
            fs.readFile(path,type,function(err,data){
                if(err){
                    reject(err);
                }
                resolve(data);
            })
        })
    }
    static writeFile(path){

        fs.writeFile(path,function(err,data){
            return new Promise(function(resolve,reject){
                if(err){
                    reject(err);
                }
                resolve(data);
            })

        })

    

    }
}

module.exports = FileUtilities;