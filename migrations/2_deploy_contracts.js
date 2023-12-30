const Addition = artifacts.require("../contracts/Addition.sol");
module.exports = function (deployer) {
  deployer.deploy(Addition);
};
