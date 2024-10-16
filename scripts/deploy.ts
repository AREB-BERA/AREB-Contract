import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther("1");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);

  // const XyyzContract = await ethers.getContractFactory("Xyyz");
  // const xyyz = await XyyzContract.deploy();
  // console.log("xyyz is deployed at" + xyyz.address);
  // console.log(await xyyz.owner());

  //console.log("sxr is "+ await xyyz.readsxr());
  //await xyyz.init(18);
  //console.log("sxr is "+ await xyyz.readsxr());


  // const SpeechContract = await ethers.getContractFactory("Speech");
  // const totalSupply = "1000000000000000000000000000";
  // const speech = await SpeechContract.deploy(totalSupply);
  // console.log("speech is deployed at : "+ await speech.address);

  // const lockContract = await ethers.getContractFactory("speechLock");
  // const lock = await lockContract.deploy("0x5857492f2Dc5f720DA4F790E62A92B9c0D0705b8","0x9127981d92eF328F30D4Bb22dd58d064304124e8");
  // console.log("lock at : " + await lock.address);

  // const ptcontract = await ethers.getContractFactory("PT");
  // const pt = await ptcontract.deploy();
  // console.log("pt is deployed at :" + await pt.address);

  // const ytcontract = await ethers.getContractFactory("YT");
  // const yt = await ytcontract.deploy();
  // console.log("yt is deployed at :" + await yt.address);

  // const pendlecontract = await ethers.getContractFactory("pendle");
  // const pendle = await pendlecontract.deploy();
  // const result = await pendle.get(pt.address,yt.address);
  // console.log("result is " +result);

  //await xyyz.add();
  //console.log("a in xxyz is" + await xyyz.a());

  //let num = await xyyz.number();
  //console.log("num is" + num);

  //let result = await xyyz.hash2();
  //console.log("res is : "+ result.data);

  // const SxrContract = await ethers.getContractFactory("sxr");
  // const sxr = await SxrContract.deploy();
  // console.log("index is : "+ await sxr.index());
  // console.log("index2 is :" + await sxr.index2());
  // console.log("daimeng is :" + await sxr.calc());

  // const calcContract = await ethers.getContractFactory("calc");
  // const calc = await calcContract.deploy();
  // const result = await calc.getExp("1000000000000000000");
  // console.log("res is: "+result);


  // const TestContract = await ethers.getContractFactory("TestERC20");
  // const Test = await TestContract.deploy("100000000000000000000000000");
  // console.log("TestERC20 is deployed at" + Test.address);
  // console.log(Date.now())

  const HoneyManagerContract = await ethers.getContractFactory("HoneyManager");
  const HoneyManager = await HoneyManagerContract.deploy(
    "0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03",
    "0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c",
    "0xd69adb6fb5fd6d06e6ceec5405d95a37f96e3b96",
    "0x7507c1dc16935B82698e4C63f2746A2fCf994dF8",
    "0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D",
    "0xAB827b1Cc3535A9e549EE387A6E9C3F02F481B49",
    "0xe3b9B72ba027FD6c514C0e5BA075Ac9c77C23Afa",
    "0xbDa130737BDd9618301681329bF2e46A016ff9Ad",
    "0x482270069fF98a0dF528955B651494759b3B2F8C");
  console.log("HoneyManager is deployed at " + await HoneyManager.address);
  console.log(Date.now());

  const ArebContract = await ethers.getContractFactory("Arebmeme");
  const HoneyManagerAddress = await HoneyManager.address;
  const Areb = await ArebContract.deploy(
    "10000000000000000000000",
    "0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03",
    "0x482270069fF98a0dF528955B651494759b3B2F8C",
    HoneyManagerAddress
  );
  console.log("Areb is deployed at " + await Areb.address);

  await HoneyManager.defineAreb(await Areb.address);
  console.log("all done");

  // const HoneyManagerContract = await ethers.getContractFactory("Malebi");
  // const HoneyManager = await HoneyManagerContract.deploy(
  //   "0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03",
  //   "0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c",
  //   "0xd69adb6fb5fd6d06e6ceec5405d95a37f96e3b96",
  //   "0x7507c1dc16935B82698e4C63f2746A2fCf994dF8",
  //   "0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D",
  //   "0xAB827b1Cc3535A9e549EE387A6E9C3F02F481B49",
  //   "0xe3b9B72ba027FD6c514C0e5BA075Ac9c77C23Afa",
  //   "0xbDa130737BDd9618301681329bF2e46A016ff9Ad",
  //   "0x482270069fF98a0dF528955B651494759b3B2F8C");
  // console.log("Malebi is deployed at " + await HoneyManager.address);
  // console.log(Date.now());

  // const areb = "0xba7af18aada2DBdB18aC5cB071BE50d81E85d25f";
  // await HoneyManager.defineAreb(areb);
  // console.log("all is well");


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
