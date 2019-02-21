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

        // Setting variables for comparison
        let newCompare = req.body;
        let currentCompare = 0;
        let allCompare = [];

        // For loop to compare new user against each existing user.
        for (i = 0; i < friendsData.length - 1; i++) {
            
            // Reseting current compare value for each user.
            currentCompare = 0;

            // For loop comparing survey responses between new user and currently selected user(determined by position in for loop)
            for(j = 0; j < 10; j++) {

                currentCompare += (Math.abs(parseInt(friendsData[i].responses[j]) - parseInt(newCompare.responses[j])));
            };

            // Pushing current comparison value into array of all users.
            allCompare.push(currentCompare);
            // console.log("Pushing compare")
            
        };

        // Choose minimum value from the all compare array.
        let bestMatch = Math.min(...allCompare);
        let matchPosition = allCompare.indexOf(bestMatch);
        let match = friendsData[matchPosition];

        // Push match into res callback to send it back to survey to be read by modal.
        res.json(match);

    });

};