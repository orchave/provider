const { app } = require("electron");
const express = require("express");
const path = require("path");
const http = require("http");

const expressApp = express();
const localServer = http.createServer(expressApp);


app.on("ready", () => {
    console.log("Hello, World!  ");

    localServer.listen(10101, _ => {
        console.log(`Server is on port ${10101} and is running.`);

        // setupTrayMenu();
        // setupDeepLink();
    });
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin")
        app.quit();
});
