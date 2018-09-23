"use strict";
const Router = require("./baseRouter");
const EnvironmentController = require("../controllers/EnvironmentController");
class EnvironmentRouter extends Router{

    get services(){
        return {
            'GET /environments':'getAllenvironments',
            'POST /environments':'addEnvironment',
            'Delete /environemts:id': 'deleteEnvironment',
            'PUT /environments:id':'editEnvironment',
        }
    }

    getAllenvironments (req,res,next){
        EnvironmentController.getAllEnvironments(req.res,next);
    }
    addEnvironment(req,res,next){

    }
    deleteEnvironment(req,res,next){

    }
    editEnvironment(req,res,next){

    }

}

module.exports = EnvironmentRouter;