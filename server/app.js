"use strict"

let express = require("express");
let app = express();

app.use(express.static(__dirname + "/../client"));
// app.get("/../client", (request, response) => {
//
// });

app.listen(8888, () => console.log("listen on port: 8888"));
