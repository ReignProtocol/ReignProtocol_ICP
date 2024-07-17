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
The contracts are deployed on Bitfinity in the addresses listed below

| Contract Name              | Contract Address                                   |
|----------------------------|----------------------------------------------------|
| Accounting.sol             | 0xbE96Edef6aFFA452ff9181d36065aa1D3afE8694        |
| AuthorizeUser.sol          | 0x045c3c801B6a21866130B70971098019cdB95158        |
| BaseUpgradeablePausable    | 0x5C821B20139a00098a2CDEB8038EB0F0B0cF0bc1        |
| Borrower                   | 0x5bBa6b8bab259A2122534621ADA01f88370342Bf        |
| CollateralToken            | 0x46220FE6D868aBC021bC84364a9A8C274E8A7e01        |
| ConfigHelper               | 0x10213f1a78eb3F717F0DeCf8750424803C51Feb1        |
| ConfigOptions              | 0xC0f908ed6D3FF1eA67b6Da34Adc84ea6f3887Fb0        |
| Constants                  | 0x86D2e67643064a913AEF9B26958c3C2F276828F1        |
| DSMath                     | 0x82bE44F1135F3D3347AA44245fF15df831AC4225        |
| IdentityToken              | 0xa6F1f5614AdbC2Cc6148243A1F17E413A069A57D        |
| Investor                   | 0x14CBbC9A3F3E1b1257695Bc5c6817392a8B4aF77        |
| MultiSign                  | 0x0B4bc9d94cb98c2c118160b781a6ccd552c4f511        |
| OpportunityManager         | 0xaE772f42A332cB719a85d6a4470cab76Bb6436D3        |
| OpportunityPool            | 0x37318A53e1ECed143937a10CA811F245DC6AF81b        |
| PauserPausable             | 0x7DF4C6b844c2F55CBe7DE809cb2a1BB3686148A2        |
| ReignCoin                  | 0xa44eF65d18257b6f89DE542Aa917a086D4e8c2C5        |
| ReignConfig                | 0x43436481117cEdc98f0806F49AdA8D719F1cf6F8        |
| ReignKeeper                | 0x9e13b240170036d9dE3D2d190B17249afB790F1F        |
| ReignTreasury              | 0x0B98CbD084acDa3C338e0DD538Bf07711C79598E        |
| SeniorPool                 | 0x951f9cDe5A74AE949B6655Ac751027e747Bc16E8        |
| ReignStaking               | 0xc7572cE0A215C168fEC2555709fe4D29af1D201d        |
| TestUSDCToken              | 0xB68F542Ef0b3cff84c110461f9ACf5Ea6AA2e09A        |



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
