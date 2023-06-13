import Web3 from "web3";
import erc20Abi from "../abi/erc20abi";
import erc721Abi from "../abi/erc721abi";
import donation_ethAbi from "../abi/donation_ethAbi";
import donation_colAbi from "../abi/donation_colAbi";
import donation_eth_endAbi from "../abi/donation_eth_endAbi";
import galleryabi from "../abi/galleryabi";
import soccerabi from "../abi/soccerabi";



export const web3 = new Web3(`HTTP://127.0.0.1:${process.env.GANACHE_PORT}`);
export const erc20Contract = new web3.eth.Contract(erc20Abi, process.env.ERC20_CA);
export const erc721Contract = new web3.eth.Contract(erc721Abi, process.env.ERC721_CA);
export const donation_eth_Contract = new web3.eth.Contract(donation_ethAbi, process.env.DONATION_ETH_CA);
export const donation_col_Contract = new web3.eth.Contract(donation_colAbi, process.env.DONATION_COL_CA);
export const donation_eth_end_Contract = new web3.eth.Contract(
  donation_eth_endAbi,
  process.env.DONATION_ETH_END_CA,
);
export const gallContract = new web3.eth.Contract(galleryabi, process.env.GALLERY_CA);
export const soccerContract = new web3.eth.Contract(soccerabi, process.env.SOCCER_CA);
