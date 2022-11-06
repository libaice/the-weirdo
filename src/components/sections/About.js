import React, {lazy, Suspense} from 'react'
import styled, {ThemeProvider} from 'styled-components'
// import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';
import Loading from '../Loading';


const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

`
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {


    & > *:last-child {
      width: 90%;
    }
  }
`
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};

  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};

  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};

  }

`
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};

  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};

  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};

  }

`
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    a {
      margin: 0 auto;
    }
  }

`

const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box>
                    <Suspense fallback={<Loading/>}>
                        <Carousel/> </Suspense> </Box>
                <Box>
                    <Title>
                        Welcome To The <br/> World Cup Memory
                    </Title>
                    <SubText>
                        To celebrate the 2022 FIFA World Cup, we launched the 2022 World Cup Memory NFT project.
                    </SubText>
                    <SubTextLight>
                        There will be 32 different mystery box NFTs, which represent 32 teams in the World Cup
                        tournament.
                        Only the mystery box of the final champion will be revealed. In addition, holders of final
                        champion NFTs can sell their NFTs to the repurchase pool.
                    </SubTextLight>

                    <SubTextLight>
                        The mint fee consists of three parts.
                    </SubTextLight>
                    <SubTextLight>
                        The first part will flow to repurchase pool, which is 0.001 ETH. As the amount of NFT increase,
                        the repurchase price for the final champion NFT will increase.
                    </SubTextLight>
                    <SubTextLight>
                        The second part is early birds’ compensation fee, which is 0.000025 ETH each for holders who
                        mint before you do so. People mint NFT later will have more information and higher possibility
                        to get the final champion NFT. Therefore, the holders who mint NFT in the early stage should be
                        compensated.
                    </SubTextLight>
                    <SubTextLight>
                        The final part is creator fee, which is 0.0005ETH
                    </SubTextLight>

                </Box>
            </Container>
        </Section>
    )
}


export default About

//   <ButtonContainer>
//                         <ThemeProvider theme={dark}>
//                             <Button text="JOIN OUR DISCORD" link="https://discord.com/invite/Rx6uyNqcVw"/>
//                         </ThemeProvider>
//                     </ButtonContainer>
