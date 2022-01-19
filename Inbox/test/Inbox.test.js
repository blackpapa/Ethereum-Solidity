const assert = require("assert");
const ganache = require("ganache-cli");
const { interface, bytecode } = require("../compile");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
const INITIAL_MESSAGE = "Hello World!";

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  //Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_MESSAGE],
    })
    .send({
      from: accounts[0],
      gas: "1000000",
    });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });
  it("has a default meassage", async () => {
    const message = await inbox.methods.message().call();
    assert(message, INITIAL_MESSAGE);
  });
  it("changes the message", async () => {
    //Send a transaction to the function
    await inbox.methods.setMessage("bye").send({ from: accounts[0] });
    const message = await inbox.methods.message.call();
    assert(message, "bye");
  });
});
