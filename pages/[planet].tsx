import{ planetsDetails} from '../data';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import PlanetStat from '../components/PlanetStat';


export  const getStaticPaths: GetStaticPaths = async () => {
    const planets = await planetsDetails;

    const paths = []

    for (const key in planets){
        paths.push({params: {planet: key}})
    }

    return {
      paths,
      fallback: false,
    };
  };
    
export  const  getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  //@ts-ignore
  const planet = await planetsDetails[params.planet];

  return {    
    props: {   
      planet,
    },
  };
}

const Planet = ({ planet }:any) => {

  const [planetButton, setPlanetButton] = useState("overview")

    return (
      <>
        <PlanetDashboard>
          <PlanetButton planetColor={planet.color} textColor={planetButton === "overview"} onClick={() => setPlanetButton("overview")} >OVERVIEW</PlanetButton>
          <PlanetButton planetColor={planet.color} textColor={planetButton === "structure"} onClick={() => setPlanetButton("structure")} >Structure</PlanetButton>
          <PlanetButton planetColor={planet.color} textColor={planetButton === "geology"} onClick={() => setPlanetButton("geology")}>Surface</PlanetButton>
        </PlanetDashboard>
        <Container>
          <PlantImageAndContentContainer>
            <PlanetImageContainer>
              {
                planetButton === "overview" 
                  ? <img className='planet' src={planet.images.planet} alt='planet' />
                : planetButton === "structure" 
                  ? <img className='planet' src={planet.images.internal} alt='planet' />
                : <GeologiImgContainer>
                    <img className='Gologiplanet' src={planet.images.planet} alt='planet' />
                    <img className='geologiImg' src={planet.images.geology} alt='planet' />
                  </GeologiImgContainer>
              }
            </PlanetImageContainer>
            <PlanetContantAndDeshboardContainer>
              {/* planet content */}
              <PlanetContentContainer>
                  <Title>{planet.name}</Title>
                  <Paragraph>
                    {
                      planetButton === "overview" 
                        ? planet.overview.content
                      : planetButton === "structure" 
                        ? planet.structure.content
                      : planet.geology.content
                    }
                </Paragraph>
                  <Sourse>
                    <span className='sourseText'>Sourse :</span>
                    <Link  
                      className='linkClass'
                      href={
                        planetButton === "overview" 
                          ? planet.overview.source
                        : planetButton === "structure" 
                          ? planet.structure.source
                        : planet.geology.source
                        } 
                      target='_blank' 
                    >
                      <span>Wikipedia</span>
                      <img src='/assets/icon-source.svg' />
                    </Link>
                  </Sourse>
              </PlanetContentContainer>
              {/* planet buttons */}
              <DesctopPlanetButtonsContainer>
                    <DesctopPlanetButton planetColor={planet.color} textColor={planetButton === "overview"} onClick={() => setPlanetButton("overview")} >
                        <span className='number'>01</span>
                        <span className='text'>OVERVIEW</span>
                    </DesctopPlanetButton>
                    <DesctopPlanetButton planetColor={planet.color} textColor={planetButton === "structure"} onClick={() => setPlanetButton("structure")}>
                        <span className='number'>02</span>
                        <span className='text'>Internal Structure</span>
                    </DesctopPlanetButton>
                    <DesctopPlanetButton planetColor={planet.color} textColor={planetButton === "geology"} onClick={() => setPlanetButton("geology")}>
                        <span className='number'>03</span>
                        <span className='text' >Surface Geology</span>
                    </DesctopPlanetButton>
              </DesctopPlanetButtonsContainer>
            </PlanetContantAndDeshboardContainer>
          </PlantImageAndContentContainer>

            <PlanetStat planet={planet} />

        </Container>
      </>
      );
}
 
export default Planet;



const PlanetDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 43px;
  padding: 20px 24px 0 24px;;
  border-bottom: 1px solid rgb(255, 255, 255, .2);
  @media (min-width: 480px) {
    justify-content: space-around;
  }
  @media (min-width: 768px) {
      display: none;
  }
`

interface PlanetButonProps {
  textColor: boolean;
  planetColor: string;
}

const PlanetButton  = styled.h3<PlanetButonProps>`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: ${props => props.textColor ? 1 : 0.5};
  padding-bottom:  ${props => props.textColor ? "16px" : "20px"};
  border-bottom: ${props => props.textColor ? `4px solid ${props.planetColor}` : "none"};
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px 47px 24px;

  .planet {
    width: 200px;
    @media (min-width: 768px) {
      width: 280px;
   }
   @media (min-width: 1024px) {
      width: 380px;
    }
  }

  @media (min-width: 768px) {
    padding: 0px 40px 36px 40px;
   }
   
  @media (min-width: 1024px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`

const PlantImageAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 120px;
   }

`
const PlanetImageContainer  = styled.div`
    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      max-width: 70%;
      width: 100%;
    }
`

const GeologiImgContainer = styled.div`
  position: relative;
  .Gologiplanet {
    width: 200px;
    @media (min-width: 768px) {
      width: 280px;
   }
   @media (min-width: 1024px) {
        width: 380px;
    }
  }

  .geologiImg{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%); 
    width: 100px;
    @media (min-width: 768px) {
      width: 120px;
      top: 50%;
   }
   @media (min-width: 1024px) {
      width: 150px;
    }
  }

`


const PlanetContantAndDeshboardContainer = styled.div`
  margin-top: 80px;
  @media (min-width: 768px) {
      display: flex;
      width: 100%;
      gap: 69px;
      align-items: center;
   }
  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 39px;
    max-width: 30%;
    margin-top: 0px;
  }
`

const DesctopPlanetButtonsContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
`

const DesctopPlanetButton = styled.div<PlanetButonProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 17px;
  height: 40px;
  padding-left: 20px;
  mix-blend-mode: normal;
  border: 1px solid rgb(255, 255, 255, .2);
  background: ${props => props.textColor ? props.planetColor : "none"};
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;

  .number {
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  &:hover {
    background: rgb(216, 216, 216, 0.2);
    mix-blend-mode: normal;
  }
  @media (min-width: 1024px) {
      gap: 28px;
      padding-left: 28px;
  }
`

const PlanetContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: start;
    width: 100%;
   }
`
const Title = styled.h2`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  text-transform: uppercase;
  color: #FFFFFF;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 62px;
   }
  @media (min-width: 1024px) {
    font-size: 80px;
    line-height: 104px;
  }
`

const Paragraph = styled.p`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 16px;
  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 14px;
    line-height: 25px;
    text-align: start;
   }

`

const Sourse = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 32px;
  
  .linkClass{
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: underline;
    color: #FFF;
    font-weight: 700;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    margin-top: 24px;
  }

`