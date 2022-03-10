var express = require('express');
var app = express();
const port = 4000

const connectedPlayers = []
const lobbies = []

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
    const lobbyId = req.query.lobbyId
    res.send(lobbyId)
})

app.get('/getConnectedPlayers', function (req, res) {
    
})

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