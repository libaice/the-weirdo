import React from 'react'
import styled from 'styled-components'
import {useState} from "react";

import {ethers} from "ethers";


import {useAccount, useContractRead} from 'wagmi'
import {ConnectButton} from "@rainbow-me/rainbowkit";


import Team1 from "../../assets/team-images/1.jpg"
import Team2 from "../../assets/team-images/2.jpg"


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
  width: 12%;
  margin-left: 20em;
`;


const Mint = () => {
    const {isConnected, address} = useAccount();
    let options = ["Qatar ", "Brazil ", "Belgium ", "France ", "Argentina ", "England ", "Spain ", "Portugal ", "Mexico ", "Netherlands ", "Denmark ", "Germany ", "Uruguay ", "Switzerland ", "United States ", "Croatia ", "Croatia ",
        "Senegal ", "Iran ", "Japan ", " Morocco ", "Serbia ", "Poland ", "South Korea ", "Tunisia ", "Cameroon ", "Canada ", "Ecuador ", "Saudi Arabia ", "Ghana ", "Wales ", "Costa Rica ", "Australia "
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };
    const contractABI = []

    const {mintFee: getMintFee} = useContractRead({
        addressOrName: "0xf904700b6ed1ce443bb0c7fc3d8566aa48094451",
        contractInterface: [
            "function publicMint(uint256 _teamId) public payable ",
            "function getMintFee(uint256 _teamId) public view returns (uint256)"
        ],
        functionName: "getMintFee",
        enabled: isConnected,
        args: [23],
        chainId:5,
        onSuccess(data) {
            console.log(data.toString())
        }
    })


    return (
        <div>
            <br/>
            <div>
                <Title>Minting Page</Title>

                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                        {selectedOption || "Select One Team "}
                    </DropDownHeader>

                    {isOpen && (
                        <DropDownListContainer>
                            <DropDownList>
                                {options.map(option => (
                                    <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                        {option}
                                    </ListItem>
                                ))}
                            </DropDownList>
                        </DropDownListContainer>
                    )}
                </DropDownContainer>


                <div>
                    <Image src={Team1}></Image>
                </div>


                {/*{isConnected && (<div>the wallet has connected</div>)*/}

                {/*}*/}
                {/*{!isConnected && (<div>Connect wallet first</div>)}*/}
            </div>


        </div>)
}

export default Mint;