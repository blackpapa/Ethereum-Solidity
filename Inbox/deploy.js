const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const provider = new HDWalletProvider(
  "priority volcano school silly under upper arrive rather cement guide gate era",
  "https://rinkeby.infura.io/v3/c23df5af74604acea74408fd801c5d9e"
);

const web3 = new Web3(provider);

const fetchAccounts = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
};

fetchAccounts();
