var express = require('express');
var app = express();
const port = process.env.PORT || 4000

// const connectedPlayers = []
// const lobbies = []

// sample data:
const connectedPlayers = [{id: 1, positionX: 0, positionY: 0, positionZ: 0},
                           {id: 2, positionX: 0, positionY: 0, positionZ: 0}
                         ]
const lobbies = [{id: 1, numOfPlayers: 4, lobbyPlayers: [connectedPlayers[0], connectedPlayers[1]]}]

const getIndex = (playerId, lobbyId) => {
    const curLobbyArray = lobbies[lobbyId-1].lobbyPlayers
    for (var i=0; i < curLobbyArray.length; i++) {
        if (curLobbyArray[i].id == playerId) {
            return i
        }
    }
}

var moved = false

app.get('/printHello', function (req, res) {
   res.send({"Hello": 1})
})

// Queries:
app.get(`/getLobbyPlayers`, function (req, res) {
    try {
        const lobbyId = req.query.lobbyId
        res.send(lobbies[lobbyId-1].lobbyPlayers)
    }

    catch {
        res.send("Error")
    }
})

app.get('/getConnectedPlayers', function (req, res) {
    res.send(connectedPlayers)
})

//sample query to see if multiplayer is doable ***
app.get('/checkMoved', function (req, res) {
    res.send({movedFromStartingLoc: moved})
})

app.get('/setMoved', function (req, res) {
    try {
        moved = true
        res.send({status: "ok"})
    }

    catch {
        res.send({status: "failed"})
    }
}) 
// **********

app.get('/getLobbies', function (req, res) {
    res.send(lobbies)
})

// Mutations:
app.get('/createGameCode', function (req, res) {
    
})

app.get('/createUserId', function (req, res) {
    
})

app.get('/joinGame', function (req, res) {
    
})

app.get('/syncPlayerPosition', function (req, res) {
    
})

app.listen(port, function () {
   console.log("Example app listening at port: " + port)
})