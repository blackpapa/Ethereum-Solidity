const Web3 = require("web3");
const { bytecode, interface } = require("./compile");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const provider = new HDWalletProvider(
  "priority volcano school silly under upper arrive rather cement guide gate era",
  "https://rinkeby.infura.io/v3/c23df5af74604acea74408fd801c5d9e"
);

const web3 = new Web3(provider);

const deployContract = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Here are the accounts we want to deal with:", accounts);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hello World!"],
    })
    .send({
      gas: 1000000,
      from: accounts[0],
    });

  console.log("The contract was deployed to " + result.options.address);
  provider.engine.stop();
};

deployContract();
