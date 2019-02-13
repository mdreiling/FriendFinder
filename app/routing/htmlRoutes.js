// ===============================
// Dependencies
// ===============================

var path = require("path");

// ===============================
// Routing
// ===============================

module.exports = function(app) {

    // HTML GET Requests
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Take user to home page if no path is found.
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};