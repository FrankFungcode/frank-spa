import InfoContractABI from "@abis/InfoContract.json";
import { InfoContract__factory } from "@/types/ethers-contracts";

const CONTRACT_ADDRESS = InfoContractABI.networks["5777"].address;

const Index = () => {
  // const contractInstance = new Contract(
  //   CONTRACT_ADDRESS,
  //   InfoContractABI.abi,
  //   signer
  // ) as InfoContract;

  // contractInstance.setInfo("Hello, World!");
  const contractInstance = InfoContract__factory.connect(
    CONTRACT_ADDRESS,
    signer
  );
  // 调用合约方法
  contractInstance.setInfo("Hello, World!", 21);
};

export default Index;
