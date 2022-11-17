import React, {useRef} from 'react'
import styled from 'styled-components'
import {useState, useEffect} from "react";
import { ethers} from "ethers";
import {useAddRecentTransaction} from '@rainbow-me/rainbowkit';
import {useAccount, useContractRead, useContractWrite, usePrepareContractWrite} from 'wagmi'


import Team1 from "../../assets/team-images/1.jpg"
import Team2 from "../../assets/team-images/2.jpg"
import Team3 from "../../assets/team-images/3.jpg"
import Team4 from "../../assets/team-images/4.jpg"
import Team5 from "../../assets/team-images/5.jpg"
import Team6 from "../../assets/team-images/6.jpg"
import Team7 from "../../assets/team-images/7.jpg"
import Team8 from "../../assets/team-images/8.jpg"
import Team9 from "../../assets/team-images/9.jpg"
import Team10 from "../../assets/team-images/10.jpg"
import Team11 from "../../assets/team-images/11.jpg"
import Team12 from "../../assets/team-images/12.jpg"
import Team13 from "../../assets/team-images/13.jpg"
import Team14 from "../../assets/team-images/14.jpg"
import Team15 from "../../assets/team-images/15.jpg"
import Team16 from "../../assets/team-images/16.jpg"
import Team17 from "../../assets/team-images/17.jpg"
import Team18 from "../../assets/team-images/18.jpg"
import Team19 from "../../assets/team-images/19.jpg"
import Team20 from "../../assets/team-images/20.jpg"
import Team21 from "../../assets/team-images/21.jpg"
import Team22 from "../../assets/team-images/22.jpg"
import Team23 from "../../assets/team-images/23.jpg"
import Team24 from "../../assets/team-images/24.jpg"
import Team25 from "../../assets/team-images/25.jpg"
import Team26 from "../../assets/team-images/26.jpg"
import Team27 from "../../assets/team-images/27.jpg"
import Team28 from "../../assets/team-images/28.jpg"
import Team29 from "../../assets/team-images/29.jpg"
import Team30 from "../../assets/team-images/30.jpg"
import Team31 from "../../assets/team-images/31.jpg"
import Team32 from "../../assets/team-images/32.jpg"

import EthereumIco from "../../assets/ethereum/eth.jpg";

import {toast, Id} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MerkleTree} from "merkletreejs";

const {keccak256} = ethers.utils;

const Title = styled.span`
  margin-top: 60px;
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  text-align: center;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Section = styled.section`
`

const DropDownHeader = styled("div")`
  margin-top: 10em;
  margin-bottom: 0.1em;
  //margin-right: 1em;
  margin-left: 20em;
  padding: 0.4em 0.5em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 1050;
  font-size: 20px;
  color: #202020;
  border: 1px solid #e5e5e5;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 00;
  width: 12em;
  margin-left: 25em;
`;

const DropDownContainer = styled("div")`
  width: 40em;
  margin-left: 20px;
`;

const DropDownList = styled("ul")`
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 4px solid #e5e5e5;
  box-sizing: border-box;
  color: #202020;
  font-size: 1.1rem;
  font-weight: 550;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;

  &:hover {
    color: #007aff;
  }
`;

const Image = styled.img`
  width: 30em;
  margin-top: 10em;
  margin-left: 20em;
`;


const Btn = styled.button`
  background-color: ${({buynow}) => buynow ? 'hsla(40, 72%, 50%, 1)' : 'hsla(347, 49%, 46%, 1)'};
  border: 1px solid ${({buynow}) => (buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(0, 0%, 0%, 0.4)')};
  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  transition: all 0.1s ease-in;
  margin-top: 6em;
  margin-left: 0em;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${({buynow}) => buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(347, 49%, 51%, 1)'};
    ${({buynow}) => buynow && `transform: translateY(-3px)`}
  }

  &:active {
    background-color: ${({buynow}) => buynow ? 'hsla(40, 72%, 35%, 1)' : 'hsla(347, 49%, 26%, 1)'};
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`


const CounterButton = styled.button`
  color: black;
  border-radius: 7px;
  padding: 10px;
  font-size: 20px;
  margin-top: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`

const MintBox = styled.div`
  font-size: 25px;
  margin-top: 75px;
`


const Mint = () => {
    const {isConnected, address} = useAccount();
    let options = ["Qatar", "Brazil", "Belgium", "France", "Argentina", "England", "Spain", "Portugal", "Mexico", "Netherlands", "Denmark", "Germany", "Uruguay", "Switzerland", "America", "Croatia", "Senegal", "Iran", "Japan", "Morocco", "Serbia", "Poland", "South Korea", "Tunisia", "Cameroon", "Canada", "Ecuador", "Saudi Arabia", "Ghana", "Wales", "Costa Rica", "Australia"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [preSaleOpen, setPreSaleOpen] = useState(false);
    const [publicSaleOpen, setPublicSaleOpen] = useState(false);
    const [mintFee, setMintFee] = useState(ethers.BigNumber.from(0));
    const [manyMintFee, setManyMintFee] = useState(ethers.BigNumber.from(0));
    const [teamId, setTeamId] = useState(1);
    const [imageSrc, setImageSrc] = useState(Team1)
    const nftContractAddress = '0x297768507c38C5966512c60cE01dC45674189138';
    const repurchasePoolContractAddress = '0x83E78DCB0DA69616f824A8a208ebd7DD357b346c';

    const toastId = useRef(null);
    const addRecentTransaction = useAddRecentTransaction();
    const [mintAmount, setMintAmount] = useState(1);

    const [mintPrice, setMintPrice] = useState("0.001525");
    const [mintManyPrice, setMintManyPrice] = useState("0.001525");
    const [repurchasePrice, setRepurchasePrice] = useState("0.1234");
    const [merkleProofList, setMerkleProofList] = useState([]);

    const [repurchasePoolBalance, setRepurchasePoolBalance] = useState(ethers.BigNumber.from(0));
    const [teamTotalSupply, setTeamTotalSupply] = useState(0);


    const mainnetWhiteList = [
        "0x2454e035f1d0D4f5d39bb2ffceF2F4bE4590cCB9",
        "0x3fb129c2Fa44cCB377283771A5f708CaBfA63C17",
        "0x65335099E4879326b9C612C4902066DA1ff83A6E",
        "0x888C3f4274BF8eD3345F349B69eD36F438e12793",
        "0x2B7ED840de28e43f2868690aa36310B02b8d0901",
        "0x856E05db0DCC85b4F2D037698f685b4c35b487FB",
        "0xE69181C78B0dB323E36e9709c6032F8338C0AA8B",
        "0x244dfba48b001a22269fa25373dba7f0293c01e2",
        "0xA0b790C492b4857aF1e3Ab1e384f03eD973D5268",
        "0x8A7C208832500f74AaA521E84FF8a588877Fd332"
    ]

    const leaves = mainnetWhiteList.map((address) => keccak256(address));
    const tree = new MerkleTree(leaves, keccak256, {sort: true});

    const increase = () => {
        setMintAmount(count => count + 1);
        console.log(mintFee * (mintAmount + 1))
        console.log(ethers.utils.formatUnits(mintFee * (mintAmount + 1)))
    };

    const decrease = () => {
        if (mintAmount <= 1) {
            setMintAmount(1);
        } else {
            setMintAmount(count => count - 1);
        }

    };

    useEffect(() => {
        mainnetWhiteList.map((item) => {
            if (item === address) {
                setMerkleProofList(tree.getHexProof(keccak256(address)))
            }
        })
        console.log(merkleProofList)
    }, [mintFee, address])

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        if (value === "Qatar") {
            setTeamId(1)
            setImageSrc(Team1)
        } else if (value === "Saudi Arabia") {
            setTeamId(2)
            setImageSrc(Team2)
        } else if (value === "Ecuador") {
            setTeamId(3)
            setImageSrc(Team3)
        } else if (value === "Senegal") {
            setTeamId(4)
            setImageSrc(Team4)
        } else if (value === "Netherlands") {
            setTeamId(5)
            setImageSrc(Team5)
        } else if (value === "England") {
            setTeamId(6)
            setImageSrc(Team6)
        } else if (value === "Wales") {
            setTeamId(7)
            setImageSrc(Team7)
        } else if (value === "Iran") {
            setTeamId(8)
            setImageSrc(Team8)
        } else if (value === "America") {
            setTeamId(9)
            setImageSrc(Team9)
        } else if (value === "Argentina") {
            setTeamId(10)
            setImageSrc(Team10)
        } else if (value === "Mexico") {
            setTeamId(11)
            setImageSrc(Team11)
        } else if (value === "Poland") {
            setTeamId(12)
            setImageSrc(Team12)
        } else if (value === "France") {
            setTeamId(13)
            setImageSrc(Team13)
        } else if (value === "Australia") {
            setTeamId(14)
            setImageSrc(Team14)
        } else if (value === "Denmark") {
            setTeamId(15)
            setImageSrc(Team15)
        } else if (value === "Tunisia") {
            setTeamId(16)
            setImageSrc(Team16)
        } else if (value === "Spain") {
            setTeamId(17)
            setImageSrc(Team17)
        } else if (value === "Germany") {
            setTeamId(18)
            setImageSrc(Team18)
        } else if (value === "Costa Rica") {
            setTeamId(19)
            setImageSrc(Team19)
        } else if (value === "Japan") {
            setTeamId(20)
            setImageSrc(Team20)
        } else if (value === "Canada") {
            setTeamId(21)
            setImageSrc(Team21)
        } else if (value === "Belgium") {
            setTeamId(22)
            setImageSrc(Team22)
        } else if (value === "Morocco") {
            setTeamId(23)
            setImageSrc(Team23)
        } else if (value === "Croatia") {
            setTeamId(24)
            setImageSrc(Team24)
        } else if (value === "Brazil") {
            setTeamId(25)
            setImageSrc(Team25)
        } else if (value === "Serbia") {
            setTeamId(26)
            setImageSrc(Team26)
        } else if (value === "Switzerland") {
            setTeamId(27)
            setImageSrc(Team27)
        } else if (value === "Cameroon") {
            setTeamId(28)
            setImageSrc(Team28)
        } else if (value === "Portugal") {
            setTeamId(29)
            setImageSrc(Team29)
        } else if (value === "Ghana") {
            setTeamId(30)
            setImageSrc(Team30)
        } else if (value === "Uruguay") {
            setTeamId(31)
            setImageSrc(Team31)
        } else if (value === "South Korea") {
            setTeamId(32)
            setImageSrc(Team32)
        }

    };


    //todo 2. public sale & pre sale
    //3. useEffect update
    //4,css style

    const {mintFee: getMintFee, refetch: updateMintFee} = useContractRead({
        addressOrName: nftContractAddress,
        contractInterface: ["function getMintFee(uint256 _teamId) public view returns (uint256)"],
        functionName: "getMintFee",
        enabled: isConnected,
        args: [teamId],
        chainId: 5,
        onSuccess(data) {
            console.log(data.toString())
            setMintFee(data)
            setMintPrice(ethers.utils.formatUnits(data))
        }
    })


    const {mintFee: getManyMintFee, refetch: updateManyMintFee} = useContractRead({
        addressOrName: nftContractAddress,
        contractInterface: ["function getManyMintFee(uint256 _teamId, uint256 amount)public view returns (uint256)"],
        functionName: "getManyMintFee",
        enabled: isConnected,
        args: [teamId, mintAmount],
        chainId: 5,
        onSuccess(data) {
            if (mintAmount === 1) {
                console.log(" mint many token need  ", data)
            }
            setManyMintFee(data)
            setMintManyPrice(ethers.utils.formatUnits(data))
        }
    })


    const {} = useContractRead({
        addressOrName: repurchasePoolContractAddress,
        contractInterface: ["function getContractBalance() public view returns (uint256)"],
        functionName: "getContractBalance",
        enabled: isConnected,
        args: [],
        chainId: 5,
        onSuccess(data) {
            setRepurchasePoolBalance(ethers.utils.formatUnits(data))
        }
    })


    const {} = useContractRead({
        addressOrName: nftContractAddress,
        contractInterface: ["function teamTotalSupply(uint256 teamId) public view returns (uint256)"],
        functionName: "teamTotalSupply",
        enabled: isConnected,
        args: [teamId],
        chainId: 5,
        onSuccess(data) {
            setTeamTotalSupply(Number(data._hex))
        }
    })


    const {preSale: isPresale} = useContractRead({
        addressOrName: nftContractAddress,
        contractInterface: ["function presaleOpen() public view returns (bool)"],
        functionName: "presaleOpen",
        enabled: isConnected,
        args: [],
        chainId: 5,
        onSuccess(data) {
            setPreSaleOpen(true)
        },
        onError(err) {
            setPreSaleOpen(false)
            toast.update(toastId.current, {
                render: "the presale has finished, start to MINT",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 3_000
            })
        }
    })

    const {publicSale: isPublicSale} = useContractRead({
        addressOrName: nftContractAddress,
        contractInterface: ["function publicSaleOpen() public view returns (bool)"],
        functionName: "publicSaleOpen",
        enabled: isConnected,
        args: [],
        chainId: 5,
        onSuccess(data) {
            console.log(" public sale is ", data.toString())
            if (data) {
                setPublicSaleOpen(true)
            } else {
                setPreSaleOpen(false);
            }
        }
    })

    const {config: pubSaleConfig} = usePrepareContractWrite({
        addressOrName: nftContractAddress,
        contractInterface: ["function publicMint(uint256 _teamId) public payable"],
        functionName: "publicMint",
        enabled: (isConnected && publicSaleOpen),
        args: [teamId],
        chainId: 5,
        overrides: {
            value: mintFee,
        },
        onSuccess(data) {
            console.log(" pre write contract successfully  ")
        }
    })


    const {config: pubsaleManyConfig} = usePrepareContractWrite({
        addressOrName: nftContractAddress,
        contractInterface: ["function publicManyMint(uint256 amount, uint256 _teamId) public payable"],
        functionName: "publicManyMint",
        enabled: (isConnected && publicSaleOpen && (mintAmount !== 1)),
        args: [mintAmount, teamId],
        chainId: 5,
        overrides: {
            value: manyMintFee,
        },
        onSuccess(data) {
            console.log(" prepare write mint many nft  ")
        }
    })


    const {config: preSaleConfig} = usePrepareContractWrite({
        addressOrName: nftContractAddress,
        contractInterface: [" function presaleMint(uint256 _teamId, bytes32[] calldata merkleProof) public payable"],
        functionName: "presaleMint",
        enabled: (isConnected && !publicSaleOpen),
        args: [teamId, merkleProofList],
        chainId: 5,
        overrides: {
            value: mintFee,
        },
        onSuccess(data) {
            console.log(" presale write contract successfully  ")
            toast.update(toastId.current, {
                render: "You are in whiteList please Mint your own NFT",
                type: toast.TYPE.SUCCESS,
                isLoading: false,
                autoClose: 3_000
            })
        },
        onError(err) {
            toast.error(JSON.stringify(err.reason))
        }
    })

    const {write: publicWriteSaleNFT, isSuccess} = useContractWrite({
        ...pubSaleConfig, onMutate(data) {
            toastId.current = toast("Please wait...", {isLoading: false, autoClose: 3000});
        },
        onSuccess(data) {
            console.log("public Mint ", data)
            addRecentTransaction({
                hash: data.hash, description: `publicMintNFT`, confirmations: 1
            });
            data
                .wait(1)
                .then((res) => {
                    console.warn("transaction confirmed ", res);
                    toast.update(toastId.current, {
                        render: "public sale mint successfully",
                        type: toast.TYPE.SUCCESS,
                        isLoading: false,
                        autoClose: 3_000
                    })
                    updateMintFee()
                    updateManyMintFee()
                })
                .catch((err) => {
                    console.error(err);
                    toast.update(toastId.current, {
                        render: err, type: toast.TYPE.ERROR, isLoading: false, autoClose: 3_000
                    })
                });
        },
        onError(err) {
            toast.error(JSON.stringify(err.reason))
        }

    })


    const {write: publicWriteManySaleNFT} = useContractWrite({
        ...pubsaleManyConfig, onMutate(data) {
            toastId.current = toast("Please wait...", {isLoading: false, autoClose: 3000});
        },
        onSuccess(data) {
            console.log("public Mint ", data)
            addRecentTransaction({
                hash: data.hash, description: `publicMintNFT`, confirmations: 1
            });
            data
                .wait(1)
                .then((res) => {
                    console.warn("transaction confirmed ", res);
                    toast.update(toastId.current, {
                        render: "public sale mint successfully",
                        type: toast.TYPE.SUCCESS,
                        isLoading: false,
                        autoClose: 3_000
                    })
                    updateMintFee()
                })
                .catch((err) => {
                    console.error(err);
                    toast.update(toastId.current, {
                        render: err, type: toast.TYPE.ERROR, isLoading: false, autoClose: 3_000
                    })
                });
        },
        onError(err) {
            toast.error(JSON.stringify(err.reason))
        }

    })


    const {write: preSaleWriteSaleNFT} = useContractWrite({
        ...preSaleConfig, onMutate(data) {
            toastId.current = toast("Please wait...", {isLoading: false, autoClose: 3000});
        },
        onSuccess(data) {
            console.log("public Mint ", data)
            addRecentTransaction({
                hash: data.hash, description: `publicMintNFT`, confirmations: 1
            });
            data
                .wait(1)
                .then((res) => {
                    console.warn("transaction confirmed ", res);
                    toast.update(toastId.current, {
                        render: "public sale mint successfully",
                        type: toast.TYPE.SUCCESS,
                        isLoading: false,
                        autoClose: 3_000
                    })
                    updateMintFee()
                })
                .catch((err) => {
                    console.error(err);
                    toast.update(toastId.current, {
                        render: err, type: toast.TYPE.ERROR, isLoading: false, autoClose: 3_000
                    })
                });
        },
        onError(err) {
            toast.error(JSON.stringify(err.reason))
        }
    })


    const writeToContract = () => {
        if (publicSaleOpen) {
            if (mintAmount === 1) {
                publicWriteSaleNFT()
            } else {
                publicWriteManySaleNFT()
            }
        } else {
            preSaleWriteSaleNFT()
        }

    }

    return (
        <Section id="mint">
            <Title>Minting Page</Title>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                        {selectedOption || " Team Select "}
                    </DropDownHeader>
                    {isOpen && (<DropDownListContainer>
                        <DropDownList>
                            {options.map(option => (<ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>))}
                        </DropDownList>
                    </DropDownListContainer>)}
                </DropDownContainer>


                <div style={{marginRight: '20em', marginTop: '5em', fontSize: "25px"}}>
                    Mint Amount  &nbsp;&nbsp;&nbsp;&nbsp;
                    <CounterButton onClick={decrease}>-</CounterButton>
                    &nbsp;&nbsp;
                    <span style={{fontSize: '16px'}}>{mintAmount}</span>
                    &nbsp;&nbsp;
                    <CounterButton onClick={increase}>+</CounterButton>
                </div>
            </div>


            <div
                style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: "530px"}}>
                <Image src={imageSrc} id="select-picture"></Image>
                <div style={{marginRight: '20em', marginTop: '5em'}}>
                    <MintBox>Mint Price <img src={EthereumIco} width="14px"/>   &nbsp;&nbsp; {mintPrice}</MintBox>
                    {/*.add(ethers.BigNumber.from("0.001").mul(ethers.BigNumber.from(mintAmount)))*/}
                    <MintBox>Potential Repurchase Price <img src={EthereumIco}
                                                             width="14px"/>  &nbsp;&nbsp;   {(repurchasePoolBalance / (teamTotalSupply + mintAmount)).toFixed(4)}
                    </MintBox>
                    <MintBox>
                        Total Mint Price <img src={EthereumIco} width="14px"
                                              alt="totalMint"/>   &nbsp;&nbsp; {mintManyPrice}
                    </MintBox>


                    <Btn type="button" buynow onClick={writeToContract}> {publicSaleOpen ? <p>MINT</p> :
                        <p>PreSale </p>}
                    </Btn>
                </div>
            </div>

            {/*<button onClick={hello}> Hello world*/}
            {/*    + {publicSaleOpen.toString()} {true.toString()} + {merkleProofList} </button>*/}

        </Section>
    )
}

export default Mint;