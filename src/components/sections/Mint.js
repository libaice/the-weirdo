import React from 'react'
import styled from 'styled-components'
import {useState, useEffect} from "react";

import {ethers} from "ethers";


import {useAccount, useContractRead, useContractWrite, usePrepareContractWrite} from 'wagmi'
import {ConnectButton} from "@rainbow-me/rainbowkit";


import Team1 from "../../assets/team-images/1.jpg"
import Team2 from "../../assets/team-images/2.jpg"

import {toast, Id} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Title = styled.span`
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


const DropDownHeader = styled("div")`
  margin-top: 10em;
  margin-bottom: 0.1em;
  margin-left: 20em;
  padding: 0.4em 0.5em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 1050;
  font-size: 1rem;
  color: #202020;
  border: 1px solid #e5e5e5;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 00;
  width: 12em;
  margin-left: 20em;
`;

const DropDownContainer = styled("div")`
  width: 32em;
  margin: 15 auto;
`;

const DropDownList = styled("ul")`
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 4px solid #e5e5e5;
  box-sizing: border-box;
  color: #202020;
  font-size: 1rem;
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
  width: 22%;
  margin-left: 20em;
`;


const Btn = styled.button`
  background-color: ${({buynow}) =>
          buynow ? 'hsla(40, 72%, 50%, 1)' : 'hsla(347, 49%, 46%, 1)'};
  border: 1px solid ${({buynow}) => (buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(0, 0%, 0%, 0.4)')};
  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  letter-spacing: 0.1rem;
  border-radius: 0.5rem;
  user-select: none;
  padding: 1.5rem 2rem;
  margin: 1rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${({buynow}) =>
            buynow ? 'hsla(40, 72%, 60%, 1)' : 'hsla(347, 49%, 51%, 1)'};
    ${({buynow}) => buynow && `transform: translateY(-3px)`}
  }

  &:active {
    background-color: ${({buynow}) =>
            buynow ? 'hsla(40, 72%, 35%, 1)' : 'hsla(347, 49%, 26%, 1)'};
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`


const Mint = () => {
    const {isConnected, address} = useAccount();
    let options = ["Qatar", "Brazil", "Belgium", "France", "Argentina", "England", "Spain", "Portugal", "Mexico", "Netherlands", "Denmark", "Germany", "Uruguay", "Switzerland", "America", "Croatia",
        "Senegal", "Iran", "Japan", "Morocco", "Serbia", "Poland", "South Korea", "Tunisia", "Cameroon", "Canada", "Ecuador", "Saudi Arabia", "Ghana", "Wales", "Costa Rica", "Australia"
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [preSaleOpen, setPreSaleOpen] = useState(false);
    const [publicSaleOpen, setPublicSaleOpen] = useState(false);
    const [mintFee, setMintFee] = useState(ethers.BigNumber.from(0));
    const [teamId, setTeamId] = useState(0);


    useEffect(() => {
    }, [mintFee])

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        if (value === "Qatar") {
            setTeamId(1)
        } else if (value === "Saudi Arabia") {
            setTeamId(2)
        } else if (value === "Ecuador") {
            setTeamId(3)
        } else if (value === "Senegal") {
            setTeamId(4)
        } else if (value === "Netherlands") {
            setTeamId(5)
        } else if (value === "England") {
            setTeamId(6)
        } else if (value === "Wales") {
            setTeamId(7)
        } else if (value === "Iran") {
            setTeamId(8)
        } else if (value === "America") {
            setTeamId(9)
        } else if (value === "Argentina") {
            setTeamId(10)
        } else if (value === "Mexico") {
            setTeamId(11)
        } else if (value === "Poland") {
            setTeamId(12)
        } else if (value === "France") {
            setTeamId(13)
        } else if (value === "Australia") {
            setTeamId(14)
        } else if (value === "Denmark") {
            setTeamId(15)
        } else if (value === "Tunisia") {
            setTeamId(16)
        } else if (value === "Spain") {
            setTeamId(17)
        } else if (value === "Germany") {
            setTeamId(18)
        } else if (value === "Costa Rica") {
            setTeamId(19)
        } else if (value === "Japan") {
            setTeamId(20)
        } else if (value === "Canada") {
            setTeamId(21)
        } else if (value === "Belgium") {
            setTeamId(22)
        } else if (value === "Morocco") {
            setTeamId(23)
        } else if (value === "Croatia") {
            setTeamId(24)
        } else if (value === "Brazil") {
            setTeamId(25)
        } else if (value === "Serbia") {
            setTeamId(26)
        } else if (value === "Switzerland") {
            setTeamId(27)
        } else if (value === "Cameroon") {
            setTeamId(28)
        } else if (value === "Portugal") {
            setTeamId(29)
        } else if (value === "Ghana") {
            setTeamId(30)
        } else if (value === "Uruguay") {
            setTeamId(31)
        } else if (value === "South Korea") {
            setTeamId(32)

        }
    };


    //todo 1. update image by selected option
    //2. public sale & pre sale
    //3. useEffect update
    //4,css style

    const {mintFee: getMintFee} = useContractRead({
        addressOrName: "0xf904700b6ed1ce443bb0c7fc3d8566aa48094451",
        contractInterface: [
            "function getMintFee(uint256 _teamId) public view returns (uint256)"
        ],
        functionName: "getMintFee",
        enabled: isConnected,
        args: [teamId],
        chainId: 5,
        onSuccess(data) {
            console.log(data.toString())
            setMintFee(data)
        }
    })

    const {preSale: isPresale} = useContractRead({
        addressOrName: "0xf904700b6ed1ce443bb0c7fc3d8566aa48094451",
        contractInterface: [
            "function presaleOpen() public view returns (bool)"
        ],
        functionName: "presaleOpen",
        enabled: isConnected,
        args: [],
        chainId: 5,
        onSuccess(data) {
            setPreSaleOpen(true)
        },
        onError(err) {
            toast.error(JSON.stringify(err))
        }
    })

    const {publicSale: isPublicSale} = useContractRead({
        addressOrName: "0xf904700b6ed1ce443bb0c7fc3d8566aa48094451",
        contractInterface: [
            "function publicSaleOpen() public view returns (bool)"
        ],
        functionName: "publicSaleOpen",
        enabled: isConnected,
        args: [],
        chainId: 5,
        onSuccess(data) {
            console.log(" public sale is ", data.toString())
            setPublicSaleOpen(true);
        }
    })


    const {config: pubSaleConfig} = usePrepareContractWrite({
        addressOrName: "0xf904700b6ed1ce443bb0c7fc3d8566aa48094451",
        contractInterface: [
            "function publicMint(uint256 _teamId) public payable"
        ],
        functionName: "publicMint",
        enabled: (isConnected && isPublicSale),
        args: [teamId],
        chainId: 5,
        overrides: {
            value: mintFee,
        },
        onSuccess(data) {
            console.log(" pre write contract successfully  ")
        }
    })

    const {write: publicWriteSaleNFT, isSuccess} = useContractWrite({
        ...pubSaleConfig,

        onSuccess(data) {
        },



        onMutate(data) {
            toast.success(isSuccess)
        },
        onError(err) {
            toast.error(JSON.stringify(err.reason))
        }

    })


    const Hello = () => {
        console.log("on change data success fully ~~~")
    }

    return (
        <div>
            <br/>
            <div>
                <Title>Minting Page</Title>

                <p> You selected Team Id is {teamId} </p>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                        {selectedOption || "Select One Team "}
                    </DropDownHeader>

                    {isOpen && (
                        <DropDownListContainer>
                            <DropDownList>
                                {options.map(option => (
                                    <ListItem onClick={onOptionClicked(option)} key={Math.random()} onChange={Hello}>
                                        {option}
                                    </ListItem>
                                ))}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>


                {/* <div>
                    <Image src={Team1}></Image>
                </div>*/}


                <Btn type="button" buynow onClick={publicWriteSaleNFT}> {publicSaleOpen ? <p>Public Sale</p> :
                    <p>PreSale </p>} </Btn>

                {/*{isConnected && (<div>the wallet has connected</div>)*/}

                {/*}*/}
                {/*{!isConnected && (<div>Connect wallet first</div>)}*/}
            </div>


        </div>)
}

export default Mint;