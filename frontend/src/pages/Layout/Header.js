import React, { useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for type-checking
import GradientButton from "../../uiTools/Button/GradientButtonHeader";
import WalletWhiteSmall from "../SVGIcons/WalletWhiteSmall";
import { useLocation, useNavigate } from "react-router-dom";
import LogoImage from "../../assets/logo.png";
import Wallet from "../../pages/SVGIcons/Wallet";
import Hamburger from "../../pages/SVGIcons/Hamburger";
import Cross from "../../assets/cross.svg";
import { isConnected } from "../../services/BackendConnectors/userConnectors/commonConnectors";
import { WalletContext} from "../../services/BackendConnectors/userConnectors/commonConnectors";
import detectEthereumProvider from '@metamask/detect-provider';
import { Layout, Button, Modal, Space, Typography } from 'antd';
import { ethers } from 'ethers';
import { WalletOutlined } from '@ant-design/icons';



import Dark from "../../pages/SVGIcons/Dark";
import Light from "../../pages/SVGIcons/Light";
import ErrorModal from "../../uiTools/Modal/ErrorModal";


const { Text } = Typography;

const Header = ({ linkStatus, darkMode, setDarkMode, setMetaStatus }) => {
    const [status, setStatus] = useState(false);
    const [errormsg, setErrormsg] = useState({
        status: false,
        msg: "",
    });

    const location = useLocation();
    const navigate = useNavigate();

    const {
        selectedAddress,
        setSelectedAddress,
        balance,
        setBalance,
        connected,
        setConnected,
        visible,
        setVisible,
        connectWallet,
        disconnectWallet
      } = useContext(WalletContext);

      const { isConnected} = useContext(WalletContext);

    //   useEffect(() => {
    //     async function fetchData() {
    //         darkModeStatus();
    //         await fetchStatus();
    //     }
    //     fetchData();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [location]);

    useEffect(() => {
        async function fetchData() {
            darkModeStatus();
        } 
        fetchData();

        const init = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                provider.on('ChainChanged', handleChainChanged);
                provider.on('AccountsChanged', handleAccountsChanged);
            }
        };
        init();

        return () => {
            if (window.ethereum.removeListener) {
                window.ethereum.removeListener('chainChanged', handleChainChanged);
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
            }
        };
    }, [selectedAddress]);

    const handleChainChanged = (_chainId) => {
        window.location.reload();
    };

    const handleAccountsChanged = async (accounts) => {
        if (accounts.length === 0) {
            setSelectedAddress(null);
            setBalance(null);
            setConnected(false);
        }
         else if (accounts[0] !== selectedAddress) {
            setSelectedAddress(accounts[0]);
            await updateBalance(accounts[0]);
            setConnected(true);
        }
    };
            


            



    

    const fetchStatus = async () => {
        const getStatus = await isConnected();

        if (getStatus.success) {
            setStatus(true);
            localStorage.setItem("Wallet-Check", true);
            setMetaStatus(true);
        } else {
            if (localStorage.getItem("Wallet-Check") === "true") {
                setStatus(true);
                setMetaStatus(true);
            } else {
                setErrormsg({ status: !getStatus.success, msg: getStatus.msg });
                setStatus(false);
                setMetaStatus(false);
            }
        }
    };


    async function updateBalance(account) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    }


    function hitRequestAccount() {
        fetchStatus();
    }

   
    function darkModeStatus() {
        if (localStorage.getItem("dark-mode") === "false") {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }

    const changeTheme = () => {
        setDarkMode((prev) => {
            localStorage.setItem("dark-mode", !prev);
            return !prev;
        });
    };

    return (
        <>
            <div className="flex gap-4 sm:gap-8 px-2 sm:px-4 md:px-6 py-2 relative items-center bg-transparent text-neutral-700 dark:text-white">
                <div className="">
                    <img
                        className="md:w-40 h-11 w-28 md:h-16 cursor-pointer"
                        src={LogoImage}
                        alt="company logo"
                        onClick={() => navigate("/")}
                    />
                </div>
                <label className="ml-auto p-3 themetoggle-box rounded-full" htmlFor="themeToggle">
                    <input
                        type="checkbox"
                        id="themeToggle"
                        checked={darkMode}
                        onChange={changeTheme}
                        className="hidden"
                    />
                    <label htmlFor="themeToggle" className="themetoggle">
                        {darkMode ? <Light /> : <Dark />}
                    </label>
                </label>
                <ErrorModal errormsg={errormsg} setErrormsg={setErrormsg} />

                {/* {!status ? (
                    <div className="">
                        <GradientButton onClick={hitRequestAccount}>
                            <Wallet fill={darkMode ? "white" : "#0D0F11"} /> Connect Wallet
                        </GradientButton>
                    </div>
                ) : (
                    <div className="outline outline-[#9281FF] rounded-full px-4 sm:px-6 md:px-8 flex items-center gap-2 py-2 sm:py-3">
                        <WalletWhiteSmall fill={darkMode ? "white" : "#0D0F11"} />
                        <div className="font-semibold text-sm sm:text-base md:text-lg">Connected</div>
                    </div>
                )} */}


                {connected ? (
                    <Space direction="horizontal" align="center">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', marginRight: '10px' }}>
                            <Text style={{ color: 'white', marginBottom: '5px' }}>
                                {selectedAddress.slice(0, 6) + "..." + selectedAddress.slice(-4)}
                            </Text>
                            <Text style={{ color: 'white' }}>
                                {balance.slice(0,5)} SHM
                            </Text>
                        </div>
                        <Button type="primary" shape="circle" icon={<WalletOutlined />} onClick={() => setVisible(true)} />
                    </Space>
            ) : (
                <Button type="primary" onClick={connectWallet}>Connect Wallet</Button>
            )}
                <Modal
                    title="Wallet Info"
                    open={visible}
                    onCancel={() => setVisible(false)}
                    footer={[
                    <Button key="back" onClick={disconnectWallet}>Disconnect Wallet</Button>,
                    ]}
                >
                    <Space direction="vertical">
                        <Text>Address: {selectedAddress}</Text>
                        <Text>Balance: {balance} Celo</Text>
                        
                    </Space>
                </Modal>



                <div className="lg:hidden">
                    {location.pathname !== "/" ? (
                        <label htmlFor="dashboard-sidebar">
                            {!linkStatus ? <Hamburger /> : <img className="w-6" alt="Hamburger" src={Cross} />}
                        </label>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

// PropTypes for type-checking
Header.propTypes = {
    linkStatus: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
    setMetaStatus: PropTypes.func.isRequired,
};

export default Header;
