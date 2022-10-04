import React from 'react'
import styled from 'styled-components'

import {useAccount} from 'wagmi'

const Mint = () => {

    const { isConnected, address } = useAccount();

    return (
        <div>
            <div>
                <div>World Cup NFT MINT</div>
                <a target="blank" href="https://opensea.io/collection/summerofwamo"></a>
                <div>
                    <div>Maz Supply: 10000</div>
                    <div className="nft-contract-address"><a
                        href='https://etherscan.io/' target="blank"
                        title='world cup' />
                </div>
            </div>
            {isConnected && (
                <div>the wallet has connected</div>
            )
            }
            {!isConnected && (<div>Connect wallet first</div>)}
        </div>
    <div >
        <div>Mint Rules </div>
        <ul >
            <li>Rule1</li>
            <li>Rule2</li>
            <li>Rule3</li>
        </ul>
    </div>

</div>)
}

export default Mint;