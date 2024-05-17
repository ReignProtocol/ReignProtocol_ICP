import React, { createContext, useState, useCallback, useContext } from "react";
import { ethers } from "ethers";
import { Modal, message } from "antd";
const dygnifyToken = require("../../../artifacts/contracts/protocol/old/TestUSDCToken.sol/TestUSDCToken.json");
const Sentry = require("@sentry/react");
const sixDecimals = 6;


export const WalletContext = createContext();

const desiredNetwork = 44787;


export const convertDate = (epochTimestamp) => {
	function pad(s) {
		return s < 10 ? "0" + s : s;
	}
	//epoch gives timestamp in seconds we need to convert it in miliseconds
	var d = new Date(epochTimestamp * 1000);
	return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
};



export const WalletProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [connected, setConnected] = useState(false);
  const [visible, setVisible] = useState(false);
  const [signer, setSigner] = useState(null);

  const updateBalance = useCallback(async (account) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));
  }, []);

  const connectWallet = useCallback(async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const chainId = await provider
          .getNetwork()
          .then((network) => network.chainId);
        if (chainId !== desiredNetwork) {
          Modal.warning({
            title: "Wrong Network",
            content: "Please connect to the Celo Alfajores network.",
          });
          return;
        }

        // Set signer
        const signerInstance = provider.getSigner();
        setSigner(signerInstance);

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setSelectedAddress(accounts[0]);
        await updateBalance(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      Modal.error({
        title: "Metamask is not installed",
        content: "Please install it from https://metamask.io",
      });
    }
  }, [updateBalance]);

 

  const disconnectWallet = useCallback(() => {
    setSelectedAddress(null);
    setBalance(null);
    setConnected(false);
    setSigner(null);
    message.success("Wallet disconnected");
  }, []);

  const isConnected = () => {
    return connected;
  };
  const getWalletBal = () => {
    return balance;
  };

  const getUserWalletAddress = () => {
    return selectedAddress;
  }
  
  

  return (
    <WalletContext.Provider
      value={{
        connected,
        selectedAddress,
        balance,
        visible,
        signer,
        setConnected,
        setVisible,
        connectWallet,
        disconnectWallet,
        setSelectedAddress,
        setBalance,
        isConnected, // Include isConnected in context value
        getWalletBal, // Include getWalletBal in context value
        getUserWalletAddress, // Include getUserWalletAddress in context value
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};



export const getGasPrice = async () => {
	try {
		if (typeof window.ethereum !== "undefined") {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
      const gasPrice = await provider.getGasPrice();
      return { gasPrice: gasPrice.toString(), success: true };
    } else {
      Sentry.captureMessage("Wallet connect error", "warning");
      return {
        success: false,
        msg: "Please connect your wallet!",
      };
    } 
  }
  catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      msg: error.message,
    };
  } 
};

export const isConnected = (WalletContext) => {
  return WalletContext.connected;
}

export const getWalletBal = (WalletContext) => {
  return WalletContext.balance;
}

export const getUserWalletAddress = (WalletContext) => {
  return WalletContext.selectedAddress;
}




