import Header from "./Header";
import styled from 'styled-components';

export type MovesContextProps = {
    children?: JSX.Element | JSX.Element[]
  };

const Layout = ({ children }: MovesContextProps) => {
    return ( 
        <Wrapper>
            <Header />
            <Container>
                { children }
            </Container>
        </Wrapper>
     );
}
 
export default Layout;

const Wrapper =  styled.div`
    width: 100%;
    min-height: 100vh;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 24px 47px 24px;
`
