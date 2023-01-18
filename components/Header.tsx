import styled from 'styled-components'
import BurgerIcon from './svg/BurgerIcon';
import { useState } from 'react';
import { PlanetInfo } from '../type/planet';
import data from "../data.json"
import Link from 'next/link';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const colors: string[] = ["#419EBB", "#EDA249", "#6D2ED5", "#D14C32", "#D83A34", "#CD5120", "#1EC1A2", "#2D68F0"]

    

    return (    
        <Container>
          <TitleLogo>THE PLANETS</TitleLogo>    
          <BurgerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          { menuOpen && 
            <MobileContainer>      
              <ul>
                {data?.map((planet: PlanetInfo, index): JSX.Element => (
                  <Link href={planet.name} key={planet.name} >
                    <MobileMenuList> 
                      <CircleAndNameContainer >
                        <LsitCircle planetColor={colors[index]} />
                        <PlanetName>{planet.name} </PlanetName> 
                      </CircleAndNameContainer>
                      <img src='/assets/icon-chevron.svg' />
                    </MobileMenuList>
                  </Link>
                 ))}
              </ul>
            </MobileContainer>}
        </Container>
      );
}
 
export default Header;


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  border-bottom: 1px solid rgb(255, 255, 255, .2);
`

const TitleLogo = styled.h1`
  font-family: 'Antonio';
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  color: #FFFFFF;
`

const MobileContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #070724;
  position: absolute;
  top: 69px;
  left: 0px;
  bottom: 0px;
  padding: 44px 24px 67px 24px;
`

const MobileMenuList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8px 20px 0px;
  border-bottom: 1px solid rgb(255, 255, 255, .1) ;
`

const CircleAndNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
`

interface LsitCircleProps {
  planetColor: string;
}

const LsitCircle = styled.div<LsitCircleProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.planetColor};
`
const PlanetName = styled.span`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  color: #FFFFFF;

`