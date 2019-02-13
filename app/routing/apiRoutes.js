// ===============================
// Load Data
// ===============================

var friendsData = require("../data/friends");

// ===============================
// Routing
// ===============================

module.exports = function(app) {

    // API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API POST Request
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
    });
};