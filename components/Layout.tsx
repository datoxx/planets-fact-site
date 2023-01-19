import Header from "./Header";
import styled from 'styled-components';
import { useState } from 'react';

export type MovesContextProps = {
    children?: JSX.Element | JSX.Element[]
  };

const Layout = ({ children }: MovesContextProps) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return ( 
        <Wrapper>
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {!menuOpen ? children : null }
        </Wrapper>
     );
}
 
export default Layout;

const Wrapper =  styled.div`
    width: 100%;
    min-height: 100vh;
`

