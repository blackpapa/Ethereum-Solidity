const path = require("path");
const fs = require("fs");
const solc = require("solc");

//Find the path
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
//Read the File
const source = fs.readFileSync(inboxPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"];
