import styled from 'styled-components';


const PlanetStat = ({planet}: any) => {
    return (
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

      );
}
 
export default PlanetStat;


const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 28px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 11px;
    margin-top: 27px;
   }

   @media (min-width: 1024px) {
    margin-top: 87px;
    gap: 30px;
   }
`

const OneStatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 24px 13px 24px;
  border: 1px solid rgb(255, 255, 255, .2);
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 6px;
    padding: 16px 0px 19px 15px;
    width: 100%;
   }

  @media (min-width: 1024px) {
    gap: 4px;
    padding: 20px 0px 27px 23px;
  }
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
  @media (min-width: 768px) {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
   }
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
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
   }
   @media (min-width: 10248px) {
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -1.5px;
   }
`