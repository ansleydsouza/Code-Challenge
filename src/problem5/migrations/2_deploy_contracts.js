var GetBalances = artifacts.require("GetBalances");
module.exports = function (deployer) {
  deployer.deploy(GetBalances, "hello");
  // Additional contracts can be deployed here
};
