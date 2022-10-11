import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, {useLayoutEffect, useRef} from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

import Hello from "../../assets/images/hello.png";
import Icon1 from "../../assets/images/icon1.png";
import Icon2 from "../../assets/images/icon2.png";
import Icon3 from "../../assets/images/icon3.png";
import Icon4 from "../../assets/images/icon4.png";


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;

`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;

        }
      }
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;

  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;


const Image1 = styled.img`
  width: 10%;
  float: left;
  margin-right: -580px;
`;

const Image2 = styled.img`
  width: 10%;
  float: left;
  margin-right: 680px;
`;


const RoadMapItem = ({title, subtext, addToRef}) => {
    return (
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title} </SubTitle>
                    <Text>{subtext}</Text>
                </Box>
            </ItemContainer>
        </Item>
    );
};

const Roadmap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el, index) => {
            t1.fromTo(
                el.childNodes[0],
                {
                    y: "0",
                },
                {
                    y: "-30%",

                    scrollTrigger: {
                        id: `section-${index + 1}`,
                        trigger: el,
                        start: "top center+=200px",
                        end: "bottom center",
                        scrub: true,
                        // markers:true,
                    },
                }
            );
        });

        return () => {
            if (t1) t1.kill();
        };
    }, []);

    return (
        <Section id="roadmap">
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg/>
                </SvgContainer>
                <Items>
                    <Image2 src={Hello}/>

                    <Item>&nbsp;</Item>
                    <RoadMapItem
                        addToRef={addToRefs}
                        title="Pre-match preparation"
                        subtext="The NFT mint contract will be deployed on the Ethereum mainnet. All 32 different mystery box NFTs will be available on the mint page. Whitelist collectors are able to mint during the early-bird period.  The earlier you mint, the more compensation you will collect."
                    />
                    <Image2  src={Icon1}/>
                    <Image1  src={Icon2}/>
                    <RoadMapItem
                        addToRef={addToRefs}
                        title="Game stage"
                        subtext="The mint period will be open during the World Cup tournament. Collectors can mint their favorite teams according to teams performance."
                    />
                    <Image2  src={Icon3}/>
                    <RoadMapItem
                        addToRef={addToRefs}
                        title="After the Game"
                        subtext="Repurchase pool activation. Holders of final champion NFTs will be able to sell NFTs to the repurchase pool."
                    />
                    <Image1  src={Icon4}/>
                    <RoadMapItem
                        addToRef={addToRefs}
                        title="Game Celebration"
                        subtext="Final championship NFT will be revealed."
                    />
                </Items>
            </Container>
        </Section>
    );
};

export default Roadmap;
