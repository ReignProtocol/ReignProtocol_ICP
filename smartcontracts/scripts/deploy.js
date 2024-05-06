const fs = require("fs");

const main = async () => {


    //Deploy DSMath library
    const contractFactoryDSMath = await hre.ethers.getContractFactory("DSMath");
    const contractDSMath = await contractFactoryDSMath.deploy();
    await contractDSMath.deployed();
    console.log("DSMath deployed to:", contractDSMath.address);
    const contractInfoDSMath = {
        address: contractDSMath.address,
        abi: contractDSMath.interface.format("json"),
    };
    const contractDSMathAddress = contractDSMath.address;
    fs.writeFileSync('DeployFiles/DSMath.json', JSON.stringify(contractInfoDSMath, null, 2));
    fs.writeFileSync('DeployFiles/DSMathAddress.txt', contractDSMathAddress);


    //Deploy Constants library
    const contractFactoryConstants = await hre.ethers.getContractFactory("Constants");
    const contractConstants = await contractFactoryConstants.deploy();
    await contractConstants.deployed();
    console.log("Constants deployed to:", contractConstants.address);
    const contractInfo = {
        address: contractConstants.address,
        abi: contractConstants.interface.format("json"),
    };
    const contractConstantsAddress = contractConstants.address;
    fs.writeFileSync('DeployFiles/Constants.json', JSON.stringify(contractInfo, null, 2));
    fs.writeFileSync('DeployFiles/ConstantsAddress.txt', contractConstantsAddress);


    //Deploy ConfigOptions library
    const contractFactoryConfigOptions = await hre.ethers.getContractFactory("ConfigOptions");
    const contractConfigOptions = await contractFactoryConfigOptions.deploy();
    await contractConfigOptions.deployed();
    console.log("ConfigOptions deployed to:", contractConfigOptions.address);
    const contractInfoConfigOptions = {
        address: contractConfigOptions.address,
        abi: contractConfigOptions.interface.format("json"),
    };
    const contractConfigOptionsAddress = contractConfigOptions.address;
    fs.writeFileSync('DeployFiles/ConfigOptions.json', JSON.stringify(contractInfoConfigOptions, null, 2));
    fs.writeFileSync('DeployFiles/ConfigOptionsAddress.txt', contractConfigOptionsAddress);

    //Deploy PauserPausable contract
    const contractFactoryPauserPausable = await hre.ethers.getContractFactory("PauserPausable");
    const contractPauserPausable = await contractFactoryPauserPausable.deploy();
    await contractPauserPausable.deployed();
    console.log("PauserPausable deployed to:", contractPauserPausable.address);
    const contractInfoPauserPausable = {
        address: contractPauserPausable.address,
        abi: contractPauserPausable.interface.format("json"),
    };
    const contractPauserPausableAddress = contractPauserPausable.address;
    fs.writeFileSync('DeployFiles/PauserPausable.json', JSON.stringify(contractInfoPauserPausable, null, 2));
    fs.writeFileSync('DeployFiles/PauserPausableAddress.txt', contractPauserPausableAddress);

    //Deploy Accounting library
    const contractFactoryAccounting = await hre.ethers.getContractFactory("Accounting");
    const contractAccounting = await contractFactoryAccounting.deploy();
    await contractAccounting.deployed();
    console.log("Accounting deployed to:", contractAccounting.address);
    const contractInfoAccounting = {
        address: contractAccounting.address,
        abi: contractAccounting.interface.format("json"),
    };
    const contractAccountingAddress = contractAccounting.address;
    fs.writeFileSync('DeployFiles/Accounting.json', JSON.stringify(contractInfoAccounting, null, 2));
    fs.writeFileSync('DeployFiles/AccountingAddress.txt', contractAccountingAddress);


    //Deploy BaseUpgradeablePausable contract
    const contractFactoryBaseUpgradeablePausable = await hre.ethers.getContractFactory("BaseUpgradeablePausable");
    const contractBaseUpgradeablePausable = await contractFactoryBaseUpgradeablePausable.deploy();
    await contractBaseUpgradeablePausable.deployed();   
    console.log("BaseUpgradeablePausable deployed to:", contractBaseUpgradeablePausable.address);
    const contractInfoBaseUpgradeablePausable = {
        address: contractBaseUpgradeablePausable.address,
        abi: contractBaseUpgradeablePausable.interface.format("json"),
    };
    const contractBaseUpgradeablePausableAddress = contractBaseUpgradeablePausable.address;
    fs.writeFileSync('DeployFiles/BaseUpgradeablePausable.json', JSON.stringify(contractInfoBaseUpgradeablePausable, null, 2));
    fs.writeFileSync('DeployFiles/BaseUpgradeablePausableAddress.txt', contractBaseUpgradeablePausableAddress);

    //Deploy Borrower contract
    const contractFactoryBorrower = await hre.ethers.getContractFactory("Borrower");
    const contractBorrower = await contractFactoryBorrower.deploy();
    await contractBorrower.deployed();
    console.log("Borrower deployed to:", contractBorrower.address);
    const contractInfoBorrower = {
        address: contractBorrower.address,
        abi: contractBorrower.interface.format("json"),
    };
    const contractBorrowerAddress = contractBorrower.address;
    fs.writeFileSync('DeployFiles/Borrower.json', JSON.stringify(contractInfoBorrower, null, 2));
    fs.writeFileSync('DeployFiles/BorrowerAddress.txt', contractBorrowerAddress);

    //Deploy CollateralToken contract
    const contractFactoryCollateralToken = await hre.ethers.getContractFactory("CollateralToken");
    const contractCollateralToken = await contractFactoryCollateralToken.deploy();
    await contractCollateralToken.deployed();
    console.log("CollateralToken deployed to:", contractCollateralToken.address);
    const contractInfoCollateralToken = {
        address: contractCollateralToken.address,
        abi: contractCollateralToken.interface.format("json"),
    };
    const contractCollateralTokenAddress = contractCollateralToken.address;
    fs.writeFileSync('DeployFiles/CollateralToken.json', JSON.stringify(contractInfoCollateralToken, null, 2));
    fs.writeFileSync('DeployFiles/CollateralTokenAddress.txt', contractCollateralTokenAddress);

    //Deploy ConfigHelper library
    const contractFactoryConfigHelper = await hre.ethers.getContractFactory("ConfigHelper");
    const contractConfigHelper = await contractFactoryConfigHelper.deploy();
    await contractConfigHelper.deployed();
    console.log("ConfigHelper deployed to:", contractConfigHelper.address);
    const contractInfoConfigHelper = {
        address: contractConfigHelper.address,
        abi: contractConfigHelper.interface.format("json"),
    };
    const contractConfigHelperAddress = contractConfigHelper.address;
    fs.writeFileSync('DeployFiles/ConfigHelper.json', JSON.stringify(contractInfoConfigHelper, null, 2));
    fs.writeFileSync('DeployFiles/ConfigHelperAddress.txt', contractConfigHelperAddress);

    //Deploy IdentityToken contract
    const contractFactoryIdentityToken = await hre.ethers.getContractFactory("IdentityToken");
    const contractIdentityToken = await contractFactoryIdentityToken.deploy();
    await contractIdentityToken.deployed();
    console.log("IdentityToken deployed to:", contractIdentityToken.address);
    const contractInfoIdentityToken = {
        address: contractIdentityToken.address,
        abi: contractIdentityToken.interface.format("json"),
    };
    const contractIdentityTokenAddress = contractIdentityToken.address;
    fs.writeFileSync('DeployFiles/IdentityToken.json', JSON.stringify(contractInfoIdentityToken, null, 2));
    fs.writeFileSync('DeployFiles/IdentityTokenAddress.txt', contractIdentityTokenAddress);



    //Deploy Investor contract
    const contractFactoryInvestor = await hre.ethers.getContractFactory("Investor");
    const contractInvestor = await contractFactoryInvestor.deploy();
    await contractInvestor.deployed();
    console.log("Investor deployed to:", contractInvestor.address);
    const contractInfoInvestor = {
        address: contractInvestor.address,
        abi: contractInvestor.interface.format("json"),
    };
    const contractInvestorAddress = contractInvestor.address;
    fs.writeFileSync('DeployFiles/Investor.json', JSON.stringify(contractInfoInvestor, null, 2));
    fs.writeFileSync('DeployFiles/InvestorAddress.txt', contractInvestorAddress);





    //Deploy multiSigWallet contract
    const multisigOwners = [
        "0x73bE1a0d90817074884B502447e3a47f07f72ca5",
        "0xfAF0F3dA2295198c0F283a9acAD37F3344137731",
        "0x406107b215a2420D09Ae300D1Ae3600002B53A5A" // New owner address
    ];
    const reignTreasuryAddress = "0x7B27c6427C2ac50237E8C111CC67a38FDaac7b9d";
    const numConfirmationsRequired = 2;
    const contractFactorymultiSigWallet = await hre.ethers.getContractFactory("multiSigWallet");
    const contractmultiSigWallet = await contractFactorymultiSigWallet.deploy(multisigOwners, numConfirmationsRequired, reignTreasuryAddress);
    await contractmultiSigWallet.deployed();
    console.log("multiSigWallet deployed to:", contractmultiSigWallet.address);
    const contractInfomultiSigWallet = { 
        address: contractmultiSigWallet.address,
        abi: contractmultiSigWallet.interface.format("json"),
    };
    const contractmultiSigWalletAddress = contractmultiSigWallet.address;
    fs.writeFileSync('DeployFiles/multiSigWallet.json', JSON.stringify(contractInfomultiSigWallet, null, 2));
    fs.writeFileSync('DeployFiles/multiSigWalletAddress.txt', contractmultiSigWalletAddress);



    


    //Deploy OpportunityManager contract
    const contractFactoryOpportunityManager = await hre.ethers.getContractFactory("OpportunityManager");
    const contractOpportunityManager = await contractFactoryOpportunityManager.deploy();
    await contractOpportunityManager.deployed();
    console.log("OpportunityManager deployed to:", contractOpportunityManager.address);
    const contractInfoOpportunityManager = {
        address: contractOpportunityManager.address,
        abi: contractOpportunityManager.interface.format("json"),
    };
    const contractOpportunityManagerAddress = contractOpportunityManager.address;
    fs.writeFileSync('DeployFiles/OpportunityManager.json', JSON.stringify(contractInfoOpportunityManager, null, 2));
    fs.writeFileSync('DeployFiles/OpportunityManagerAddress.txt', contractOpportunityManagerAddress);

    
    //Deploy OpportunityPool contract
    const contractFactoryOpportunityPool = await hre.ethers.getContractFactory("OpportunityPool");
    const contractOpportunityPool = await contractFactoryOpportunityPool.deploy();
    await contractOpportunityPool.deployed();
    console.log("OpportunityPool deployed to:", contractOpportunityPool.address);
    const contractInfoOpportunityPool = {
        address: contractOpportunityPool.address,
        abi: contractOpportunityPool.interface.format("json"),
    };
    const contractOpportunityPoolAddress = contractOpportunityPool.address;
    fs.writeFileSync('DeployFiles/OpportunityPool.json', JSON.stringify(contractInfoOpportunityPool, null, 2));
    fs.writeFileSync('DeployFiles/OpportunityPoolAddress.txt', contractOpportunityPoolAddress);


    //Deploy ReignCoin contract
    const contractFactoryReignCoin = await hre.ethers.getContractFactory("ReignCoin");
    const contractReignCoin = await contractFactoryReignCoin.deploy();
    await contractReignCoin.deployed();
    console.log("ReignCoin deployed to:", contractReignCoin.address);
    const contractInfoReignCoin = {
        address: contractReignCoin.address,
        abi: contractReignCoin.interface.format("json"),
    };
    const contractReignCoinAddress = contractReignCoin.address;
    fs.writeFileSync('DeployFiles/ReignCoin.json', JSON.stringify(contractInfoReignCoin, null, 2));
    fs.writeFileSync('DeployFiles/ReignCoinAddress.txt', contractReignCoinAddress);

    //Deploy SeniorPool contract
    const contractFactorySeniorPool = await hre.ethers.getContractFactory("SeniorPool");
    const contractSeniorPool = await contractFactorySeniorPool.deploy();
    await contractSeniorPool.deployed();
    console.log("SeniorPool deployed to:", contractSeniorPool.address);
    const contractInfoSeniorPool = {
        address: contractSeniorPool.address,
        abi: contractSeniorPool.interface.format("json"),
    };
    const contractSeniorPoolAddress = contractSeniorPool.address;
    fs.writeFileSync('DeployFiles/SeniorPool.json', JSON.stringify(contractInfoSeniorPool, null, 2));
    fs.writeFileSync('DeployFiles/SeniorPoolAddress.txt', contractSeniorPoolAddress);

   
   
    //Deploy ReignConfig contract
    const contractFactoryReignConfig = await hre.ethers.getContractFactory("ReignConfig");
    const contractReignConfig = await contractFactoryReignConfig.deploy();
    await contractReignConfig.deployed();
    console.log("ReignConfig deployed to:", contractReignConfig.address);
    const contractInfoReignConfig = {
        address: contractReignConfig.address,
        abi: contractReignConfig.interface.format("json"),
    };
    const contractReignConfigAddress = contractReignConfig.address;
    fs.writeFileSync('DeployFiles/ReignConfig.json', JSON.stringify(contractInfoReignConfig, null, 2));
    fs.writeFileSync('DeployFiles/ReignConfigAddress.txt', contractReignConfigAddress);

    //Deploy ReignKeeper contract
    const contractFactoryReignKeeper = await hre.ethers.getContractFactory("ReignKeeper");
    const contractReignKeeper = await contractFactoryReignKeeper.deploy();
    await contractReignKeeper.deployed();
    console.log("ReignKeeper deployed to:", contractReignKeeper.address);
    const contractInfoReignKeeper = {
        address: contractReignKeeper.address,
        abi: contractReignKeeper.interface.format("json"),
    };
    const contractReignKeeperAddress = contractReignKeeper.address;
    fs.writeFileSync('DeployFiles/ReignKeeper.json', JSON.stringify(contractInfoReignKeeper, null, 2));
    fs.writeFileSync('DeployFiles/ReignKeeperAddress.txt', contractReignKeeperAddress);

    //Deploy ReignTreasury contract
    const contractFactoryReignTreasury = await hre.ethers.getContractFactory("ReignTreasury");
    const contractReignTreasury = await contractFactoryReignTreasury.deploy();
    await contractReignTreasury.deployed();
    console.log("ReignTreasury deployed to:", contractReignTreasury.address);
    const contractInfoReignTreasury = {
        address: contractReignTreasury.address,
        abi: contractReignTreasury.interface.format("json"),
    };
    const contractReignTreasuryAddress = contractReignTreasury.address;
    fs.writeFileSync('DeployFiles/ReignTreasury.json', JSON.stringify(contractInfoReignTreasury, null, 2));
    fs.writeFileSync('DeployFiles/ReignTreasuryAddress.txt', contractReignTreasuryAddress);


    //Deploy AuthorizeUser contract
    const contractFactoryAuthorizeUser = await hre.ethers.getContractFactory("AuthorizeUser");
    const contractAuthorizeUser = await contractFactoryAuthorizeUser.deploy();
    await contractAuthorizeUser.deployed();
    console.log("AuthorizeUser deployed to:", contractAuthorizeUser.address);
    const contractInfoAuthorizeUser = {
        address: contractAuthorizeUser.address,
        abi: contractAuthorizeUser.interface.format("json"),
    };
    const contractAuthorizeUserAddress = contractAuthorizeUser.address;
    fs.writeFileSync('DeployFiles/AuthorizeUser.json', JSON.stringify(contractInfoAuthorizeUser, null, 2));
    fs.writeFileSync('DeployFiles/AuthorizeUserAddress.txt', contractAuthorizeUserAddress);

    

    //Deploy TestUSDCToken contract
    const initialSupply = ethers.utils.parseUnits("1000000000", 6); // 1 billion tokens with 6 decimals
    const contractFactoryTestUSDCToken = await hre.ethers.getContractFactory("TestUSDCToken");
    const contractTestUSDCToken = await contractFactoryTestUSDCToken.deploy(initialSupply);
    await contractTestUSDCToken.deployed();
    console.log("TestUSDCToken deployed to:", contractTestUSDCToken.address);
    const contractInfoTestUSDCToken = {
        address: contractTestUSDCToken.address,
        abi: contractTestUSDCToken.interface.format("json"),
    };
    const contractTestUSDCTokenAddress = contractTestUSDCToken.address;
    fs.writeFileSync('DeployFiles/TestUSDCToken.json', JSON.stringify(contractInfoTestUSDCToken, null, 2));
    fs.writeFileSync('DeployFiles/TestUSDCTokenAddress.txt', contractTestUSDCTokenAddress);


    
    
    
    //Deploy ReignStaking contract
    const APR = 10; // 10%
    const contractFactoryReignStaking = await hre.ethers.getContractFactory("ReignStaking");
    const contractReignStaking = await contractFactoryReignStaking.deploy(contractTestUSDCToken.address, APR);
    await contractReignStaking.deployed();
    console.log("ReignStaking deployed to:", contractReignStaking.address);
    const contractInfoReignStaking = {
        address: contractReignStaking.address,
        abi: contractReignStaking.interface.format("json"),
    };
    const contractReignStakingAddress = contractReignStaking.address;
    fs.writeFileSync('DeployFiles/ReignStaking.json', JSON.stringify(contractInfoReignStaking, null, 2));
    fs.writeFileSync('DeployFiles/ReignStakingAddress.txt', contractReignStakingAddress);



    //Deploy NFTMinter contract
    const contractFactoryNFTMinter = await hre.ethers.getContractFactory("NFTMinter");
    const contractNFTMinter = await contractFactoryNFTMinter.deploy();
    await contractNFTMinter.deployed();
    console.log("NFTMinter deployed to:", contractNFTMinter.address);
    const contractInfoNFTMinter = {
        address: contractNFTMinter.address,
        abi: contractNFTMinter.interface.format("json"),
    };
    const contractNFTMinterAddress = contractNFTMinter.address;
    fs.writeFileSync('DeployFiles/NFTMinter.json', JSON.stringify(contractInfoNFTMinter, null, 2));
    fs.writeFileSync('DeployFiles/NFTMinterAddress.txt', contractNFTMinterAddress);
























}
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();