import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${props => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {

        margin-top: 0;
      }

    }
  }
`
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }

`

const Faq = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    // useLayoutEffect(() => {
    //     let element = ref.current;
    //     ScrollTrigger.create({
    //         trigger: element,
    //         start: 'bottom bottom',
    //         end: 'bottom top',
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: 1,
    //         // markers:true,
    //     })
    //
    //     return () => {
    //         ScrollTrigger.kill();
    //     };
    // }, [])
    return (
        <Section ref={ref} id="faq">
            <Title>Faq</Title>
            <Container>
                <Box>
                    <Accordion ScrollTrigger={ScrollTrigger} title="Where Can I View My NFTs?">
                        Once minted or bought simply connect to your OpenSea account to view your NFTs. You can also
                        view your NFTs in My NFT page.
                    </Accordion>
                    <Accordion ScrollTrigger={ScrollTrigger} title="What does potential repurchase price mean?">
                        Parts of your mint fee will flow into a repurchase pool. Once the team NFT you mint wins the
                        final. You can sell your NFT to the repurchase pool. The repurchase price=total ETH in the pool/
                        the amount of certain NFT minted
                    </Accordion>
                    <Accordion ScrollTrigger={ScrollTrigger} title=" What is Early-bird Compensation ?">
                        As the final day approaches, people who mint NFT later will have more information and higher
                        possibility to choose the final champion NFT. Therefore, the early collector should be
                        compensated.
                    </Accordion>
                </Box>
                <Box>
                    <Accordion ScrollTrigger={ScrollTrigger} title="How to get Early-bird Compensation?">
                        There will be a Collect and Burn button on My NFT page. Once you collect your compensation, your
                        NFT will be burned.
                    </Accordion>
                    <Accordion ScrollTrigger={ScrollTrigger} title="Why are there different mystery boxes?">
                        Different mystery boxes represent different teams in the World Cup tournament. Only the final
                        winner team NFT would be revealed.
                    </Accordion>
                </Box>
            </Container>
        </Section>
    )
}

export default Faq