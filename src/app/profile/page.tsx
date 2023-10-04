// "use client";

import { ethers } from "ethers";
import { useState, useEffect } from "react";

interface WindowWithEthereum extends Window {
  ethereum?: any; // Add the appropriate type for ethers if known
}



export default function Profile() {
  // const [balance, setBalance] = useState<any>(0);

  // useEffect(() => {
  //   const windowWithEthereum: WindowWithEthereum = window;
  //     if (!windowWithEthereum?.ethereum) return
  //   const getBalance = async () => {
  //     const [account] = await windowWithEthereum.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });

  //     try {
  //       const provider = new ethers.providers.Web3Provider(windowWithEthereum.ethereum);
  //       const etherBalance = await provider.getBalance(account);

  //       const etherBalanceFloat = ethers.utils.formatEther(etherBalance);
  //       setBalance(etherBalanceFloat);
  //     } catch (error) {
  //       console.error("Error fetching balance:", error);
  //     }
  //   };

  //   getBalance();
  // }, []);

  return (
    <div style={{ height: "100vh" }}>
      <h2>balance:  eth</h2>
      {/* <h2>balance: {balance} eth</h2> */}
    </div>
  );
}
