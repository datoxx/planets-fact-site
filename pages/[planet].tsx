import{ planetsDetails} from '../data';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';


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
            <div>
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
            </div>
            <div>
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
              {/* <div></div> */}
            </div>
          <StatContainer>
            <OneStatContainer>
                <StatTitle>ROTATION TIME</StatTitle>
                <StatNumber>{planet.rotation}</StatNumber>
            </OneStatContainer>
            <OneStatContainer>
                <StatTitle >REVOLUTION TIME</StatTitle>
                <StatNumber>{planet.revolution}</StatNumber>
            </OneStatContainer>
            <OneStatContainer>
               <StatTitle>radius</StatTitle>
               <StatNumber>{planet.radius}</StatNumber>
            </OneStatContainer>
            <OneStatContainer>
                <StatTitle>AVERAGE TEMP.</StatTitle>
                <StatNumber>{planet.temperature}</StatNumber>
            </OneStatContainer>
          </StatContainer>
          </PlantImageAndContentContainer>

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
  }
`

const PlantImageAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

const GeologiImgContainer = styled.div`
  position: relative;
  .Gologiplanet {
    width: 200px;
  }

  .geologiImg{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%); 
    width: 100px;
  }
`

const PlanetContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`
const Title = styled.h2`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  text-transform: uppercase;
  color: #FFFFFF;
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

`

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 28px;
`

const OneStatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 24px 13px 24px;
  border: 1px solid rgb(255, 255, 255, .2);
`

const StatTitle = styled.span`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.727273px;
  text-transform: uppercase;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
`
const StatNumber = styled.span`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: right;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  color: #FFFFFF;
`