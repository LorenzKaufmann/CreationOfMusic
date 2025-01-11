const serversocket = new WebSocket('ws://localhost:8080');

serversocket.onopen = function(event) {
    console.log("opened connection successfully!");
};

serversocket.onmessage = function(event) {
    console.log("inc message " + event.data);
}

serversocket.onclose = function(event) {
    console.log("closed connection successfully!");
}

function requestAudio(id) {
    serversocket.send("audio");
}
