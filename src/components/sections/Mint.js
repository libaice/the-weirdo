import React from 'react'
import styled from 'styled-components'
import {useState} from "react";

import {useAccount} from 'wagmi'
import {ConnectButton} from "@rainbow-me/rainbowkit";

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
  margin-bottom: 1.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 550;
  font-size: 1rem;
  color: #202020;
  border: 1px solid #e5e5e5;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownContainer = styled("div")`
  width: 15em;
  margin: 15 auto;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 4px solid #e5e5e5;
  box-sizing: border-box;
  color: #fd9e46;
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


const Mint = () => {
    const {isConnected, address} = useAccount();

    let options = ["Qatar ", "Brazil ", "Belgium ", "France ", "Argentina ", "England ", "Spain ","Portugal ","Mexico ","Netherlands ","Denmark ","Germany ","Uruguay ","Switzerland ","United States ","Croatia <"  ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };


    return (
        <div>
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


                    <ConnectButton/>
                </DropDownContainer>


                <div>
                    <div className="nft-contract-address"><a
                        href='https://etherscan.io/' target="blank"
                        title='world cup'/>xxxxx
                    </div>

                </div>


                {isConnected && (<div>the wallet has connected</div>)

                }
                {!isConnected && (<div>Connect wallet first</div>)}
            </div>


        </div>)
}

export default Mint;