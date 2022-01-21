const path = require("path");
const fs = require("fs");
const solc = require("solc");

//Find the path
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
//Read the File
const source = fs.readFileSync(inboxPath, "utf8");

//Add the expected JSON formatted input, specifying the language, sources, and outputSelection
const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Inbox.sol"
].Inbox;
