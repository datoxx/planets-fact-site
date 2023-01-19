import styled from 'styled-components';

interface IconPorps {
    menuOpen: boolean,
    setMenuOpen: (e:boolean) => void,
}


const BurgerIcon = ({menuOpen, setMenuOpen}:IconPorps) => {
    return ( 
        <Svg menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g>
         </Svg>
      );
}
 
export default BurgerIcon;

const attrs = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg",
  })``;
  

interface SvgPorps {
    menuOpen: boolean,
}

const Svg = styled(attrs)<SvgPorps>`
    width: 24px;
    height: 17px;
    opacity: ${props => props.menuOpen ? 0.25 : 1};
    cursor:pointer;

    @media (min-width: 768px) {
         display: none;
    }
`;