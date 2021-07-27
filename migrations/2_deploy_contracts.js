const PancakeRouter01 = artifacts.require("PancakeRouter01");
const WETH = artifacts.require("WETH");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = '0xB537511d69290959e95e4cf3394bfac61DE0BaC8';

  if (network === 'mainnet') {
    weth = await WETH.at('0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c');
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  await deployer.deploy(PancakeRouter01, FACTORY_ADDRESS, weth.address);
};
