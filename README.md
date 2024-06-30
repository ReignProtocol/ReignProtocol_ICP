# Reign Protocol

![vlcsnap-2024-04-24-00h32m35s784](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/48d0ce8a-2bf3-4db4-bca6-7a726a6ee20d)


Reign Protocol operates as a decentralized credit infrastructure provider, facilitating connections between digital asset (crypto) investors and investment opportunities tied to small and medium-sized business (SMB) economic activities. Our platform demonstrates the practical application of a Credit Fund functioning as a borrower, which in turn aggregates and lends to small businesses.

We strongly believe that embracing decentralized finance can effectively address the financial inclusion challenge by offering the following advantages:

### For Borrowers:
- Access to global digital asset liquidity, providing a sustainable and cost-effective solution for borrowers in emerging markets.
- Utilization of Blockchain-based on-chain borrowing, ensuring speed, security, and the creation of an immutable credit history that can attract significant capital inflows.

### For Investors:
- Empowerment of any digital asset holder to participate as a lender, supporting real-world economic activities.
- Provision of stable and sustainable yields ranging from 10% to 25%

We aim to establish a progressively decentralized community (DAO) comprising underwriters, auditors, service providers, asset originators, developers, and investors. Our incentive mechanism is designed to promote positive behavior and address centralized decision-making across the network.

Our plan involves building the protocol as an infrastructure toolkit to fulfill three main purposes:
1. Simplifying crypto and DeFi complexities for users.
2. Providing comprehensive on and off-chain reputation and identity management, along with regulatory compliance.
3. Enabling robust security and privacy features, such as tools for on and off-chain credit scoring, reputation management, whitelisting, compliance checks, decentralized data storage, dashboards, etc., all integrated with encryption and security measures.

## SMART CONTRACTS
The contracts are deployed on Shardeum testnet(Hackathon) in the addresses listed below

| Contract Name            | Contract Address                                   |
|--------------------------|----------------------------------------------------|
| Accounting.sol           | 0xF6a22bF3CCc89a2cDdAcC5f30AB7AaC11d04460C        |
| AuthorizeUser.sol        | 0x9CbaCb7bDf91B0ffd8712f5e120bA15e8D42F61d        |
| BaseUpgradeablePausable  | 0xD6d270adBF8E2428CEcf2955803a56f68686a4ee        |
| Borrower                 | 0x2f242444BBf6F19cC422AF163bFa83a4D6378Fbc        |
| CollateralToken          | 0x137A5D76aE9E9CdE4B055804F8618DB3a94c9D0b        |
| ConfigHelper             | 0x5EaE563994AB80e98b4bC7852426FDf627ca51CF        |
| ConfigOptions            | 0x119b95d4D36De63b184bd4b022aC4C2f9cFDcB27        |
| Constants                | 0xEa7e2d857AD7dd5a0AbbC11cB8668e55D2F434ED        |
| DSMath                   | 0xA1cF92f8739cDD1eb7ECbcFBDd1E623B96D5AD22        |
| IdentityToken            | 0xfDB15D72192D956547d7a8f4cC73d950d0d12975        |
| Investor                 | 0x460dfeac039a0B5EA83204F64a54D2c48946D9ac        |
| MultiSign                | 0xdA4FfB7F018fcf59dDF35c851dcb7C1E08abB032        |
| OpportunityManager       | 0x038F71D9367AA59Bfe541c752457851ccB095285        |
| OpportunityPool          | 0x0148F3ba331625572115D13b1Ef3Ff5eb52D19D9        |
| PauserPausable           | 0xF495a7B73E091dd6346EA6401E29cDbbBf42D6d3        |
| ReignCoin                | 0x713c0c4416348C2dEF4ff9e97e90a6a8300eb7b3        |
| ReignConfig              | 0xCBe84a0757FaAA388DF793Da0cfDe8C89Fa2e7Ec        |
| ReignKeeper              | 0xa6d68AAa67c655Cf26E59146e740D2F1B29ce28e        |
| ReignTreasury            | 0x15d79Ce7c1DAF054764fcfE68764EEA51f02b47C        |
| SeniorPool               | 0x5122403f02082213A63a0B35219FEF4Df6fAf78e        |
| ReignStaking             | 0xd5b8f93362E3c2baE215E4191f1C3A090758AB27        |
| TestUSDCToken            | 0x43a43d73EBb92409EeF473f64F67F86FD26E5F35        |


## HOW IT WORKS
On the protocol, the borrower creates a loan request providing the needed details and the needed collateral document and they submit these details which are captured and stored on-chain. This request is now visible on the dashboard.

##### Borrower submits borrow request
![Borrower Dashboard](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/f6eb569e-e6f9-4fd1-be99-2ef0893ef68e)
*Borrower Dashboard* 

![Borrow Request](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/aa2730b4-0a5a-42c6-8a9a-9ce0dadb361e)
*Borrower creates a borrow request*
![vlcsnap-2024-04-23-23h48m31s891](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/68152455-5ad9-4513-be61-8bff0f2731f6)
*Borrower submits a collateral document*
![vlcsnap-2024-04-23-23h49m28s340](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/9ab9495a-f9cf-4a8e-8e74-4394930dc84c)
*Borrower submits loan application*

##### Underwriter reviews the application and makes decision
The request then goes to the underwriter dashboard and they can decide to approve based on the information provided. This will then be available to the investors to invest in. 

![vlcsnap-2024-04-23-23h51m11s065](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/4e006327-12d0-4651-93a0-4c77a9405a3c)
*Underwriter dashboard showing the new loan request received*
![vlcsnap-2024-04-23-23h51m45s890](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/51866a5f-d005-489b-96c9-f6a66cd6e72c)
*Underwriter can approve or reject based on the application and the docs submitted*
![vlcsnap-2024-04-23-23h52m11s319](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/59f77aef-10da-4436-aec6-8e046b99d8f2)
*Past underwriter decisions*

##### Investors 
So, when a junior pool investor invests in part of that opportunity, it will be partly funded up to the amount provided by the investor.
Senior pool investors invest in a blanket pool, a general pool which aggregates the funds and allocate them to the various opportunities.


![vlcsnap-2024-04-23-23h52m22s379](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/5143bf6c-a822-4eeb-97b7-cebdcb026653)
*Junior Investor investing*

![vlcsnap-2024-04-23-23h53m26s214](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/ce24ae71-9e0c-48c5-ba18-6d56ad964811)
*Investor pools*
![vlcsnap-2024-04-23-23h53m37s623](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/74f50a02-1b93-40d5-97a1-856165aca0c5)
*Senior Pool*

##### Withdrawal & Repayment
When an opportunity becomes fully funded, it becomes available for withdrawal by the borrower and the loan payment terms are shown on the dashboard. During repayment, the borrower pays back the loan premium, the loan is updated with the next due amount and the net due date.

![vlcsnap-2024-04-23-23h54m43s905](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/8a05fdd2-a8c9-44c8-90d3-882fa60699eb)
*Loan request succesfull, funds available for withdrawal*
![vlcsnap-2024-04-23-23h55m05s493](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/ed5b1ee0-8dab-4e09-91c4-a63c8fc11e64)
*Making Repayment*

![vlcsnap-2024-04-23-23h56m54s650](https://github.com/DeograciousAggrey/ReignProtocol_Shardeum/assets/68210234/faf282cb-0b89-4ffd-8d12-f4727425b1ee)
*Repayment*
