import styled, { keyframes } from "styled-components";

export default function LoadingScreen() {
  const colors: string[] = ["#419EBB", "#EDA249", "#6D2ED5", "#D14C32",]

  return (
    <Wrapper>
      <DotWrapper>
        {colors.map((color, index) =>  <Dot  bgcolor={color} delay={`.${index}s`} /> )}
      </DotWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 25px }
  100% { margin-bottom: 0 }

`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 40%;
`;

interface DotProps {
  delay: string;
  bgcolor:string;
}

const Dot = styled.div<DotProps>`
  background-color: ${props => props.bgcolor};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;