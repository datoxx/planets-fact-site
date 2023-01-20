import styled from 'styled-components'
import BurgerIcon from './svg/BurgerIcon';
import { PlanetInfo } from '../type/planet';
import{ planetsDetails} from '../data';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';


interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (e:boolean) => void;
}

const Header = ({menuOpen, setMenuOpen}: HeaderProps) => {

    const { asPath } = useRouter()
    
    return (    
      <Wrapper>
        <Container>
            <Link href={"/Mercury"}><TitleLogo>THE PLANETS</TitleLogo></Link>
            <Nav>
              <MenuLists>
                {Object.values(planetsDetails)?.map((planet: PlanetInfo): JSX.Element => (
                    <Link href={"/" + planet.name} key={planet.name} >
                        <PlanetName planetColor={planet.color} click={asPath.substring(1) === planet.name} >{planet.name} </PlanetName>
                    </Link>
                  ))}  
              </MenuLists>
            </Nav> 
          <BurgerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          { menuOpen  ?
            <MobileContainer>      
              <ul>
                {Object.values(planetsDetails)?.map((planet: PlanetInfo): JSX.Element => (
                  <Link onClick={() => setMenuOpen(false)} href={"/" + planet.name} key={planet.name} >
                    <MobileMenuList> 
                      <CircleAndNameContainer >
                        <LsitCircle planetColor={planet.color} />
                        <PlanetNameMobile>{planet.name} </PlanetNameMobile> 
                      </CircleAndNameContainer>
                      <img src='/assets/icon-chevron.svg' />
                    </MobileMenuList>
                  </Link>
                 ))}
              </ul>
            </MobileContainer>
            : null}
        </Container>
        </Wrapper>
      );
}
 
export default Header;


const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(255, 255, 255, .2);
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  @media (min-width: 768px) {
    padding: 32px 51px 27px 51px;
    flex-direction: column;
    gap: 39px;
    }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 41px 27px 32px;
    max-width: 1440px;
    margin: 0 auto;
  }
`

const TitleLogo = styled.h1`
  font-family: 'Antonio';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  color: #FFFFFF;
  @media (min-width: 1024px) {
    padding-top: 22px;
  }
`

const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
      display: block;
  }
` 

const MenuLists = styled.ul`
  display: flex;
  align-items: center;
  gap: 33px;
`

const MobileContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: #070724;
  position: absolute;
  top: 69px;
  left: 0px;
  bottom: 0px;
  z-index: 20;
  padding: 44px 24px 67px 24px;
  @media (min-width: 768px) {
      display: none;
    }
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

interface LsitProps {
  planetColor: string;
}

const LsitCircle = styled.div<LsitProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.planetColor};
`
const PlanetNameMobile = styled.span`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36364px;
  text-transform: uppercase;
  color: #FFFFFF;
`

interface PlanetNameProps {
  click: boolean;
  planetColor: string;
}


const PlanetName = styled.li<PlanetNameProps>`
  font-family: 'League Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: ${props => props.click ? 1 : 0.70};
  list-style: none;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 1024px) {
    padding-top: ${props => props.click ? "29px" : "33px"};
    border-top: ${props => props.click ? `4px solid ${props.planetColor}` : ""};

    &:hover {
      padding-top: 29px;
      border-top: ${props => `4px solid ${props.planetColor}` };
    }
  }
`