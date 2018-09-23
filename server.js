const express = require("express");
const app = express();
var EnvironmentRouter = require("./server/Routers/EnvironementsRouter");
const port = 5000;
var environmentRouter = new EnvironmentRouter("",app);

app.listen(port,function(){
    console.log("Listening to port " +  port);
})