var express = require('express');
var app = express();
const port = 4000

// const connectedPlayers = []
// const lobbies = []

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

//maybe make a simple query to test multiplayer

app.get('/getLobbies', function (req, res) {
    
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

var server = app.listen(port, function () {
   console.log("Example app listening at port: " + port)
})