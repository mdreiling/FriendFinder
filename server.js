// ===============================
// Dependencies
// ===============================

var express = require("express");

// ===============================
// Express Config
// ===============================

// Indicating to node that we are creating an "express" server
var app = express();

// Set initial port
var PORT = process.env.PORT || 12300;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===============================
// Router
// ===============================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ===============================
// Listener
// ===============================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});