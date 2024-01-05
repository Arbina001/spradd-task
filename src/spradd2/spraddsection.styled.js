import styled from 'styled-components';
export const CreatorsWrapper = styled.div`
  background-color: #fff6f6;
  max-height: 525px;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    align-items: baseline;
  }
`;

export const HeadingWrapper = styled.div`
  background-color: #fff6f6;
  height: fit-content;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 60px 0px 0px;
  @media (max-width: 700px) {
    padding:0px;
  }
`;

export const LeftImageDiv = styled.div`
  max-width: 48%;
  width: 100%;
  position: relative;
`;
export const LeftsideDiv = styled.div`
  max-width: 50%;
  width: 100%;
  position: relative;
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const RightsideDiv = styled.div`
  max-width: 50%;
  width: 100%;
  position: relative;
  display: flex;
  padding: 66px 0px 8px 4px;
  flex-direction: column;
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const LeftSideImage = styled.img`
  max-width: 100%;
  width: 82%;
  @media screen {
    width: 100%;
  }
`;

export const UpperRightDiv = styled.div`
  position: absolute;
  top: 442px;
  right: 0px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SmallSizeimage = styled.img``;
export const PinkLineWrapper = styled.div`
  /* position: relative;
  padding: 20px 0px 0px 225px;
  top:370px;
  height:0.5in;
  opacity: 0.8;
  margin-top: 100px; 
  background: linear-gradient(
    240deg,
    rgb(240, 97, 86) 70%,
    rgba(240, 97, 86, 0.4) 100%
  ) repeat-x; / */

  p {
    position: relative;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    z-index: 1;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 97px;
  padding: 8px;
  background: white;
  box-shadow: 0px 0px 0px;
  @media (max-width: 700px) {
    font-size: 9px;
    line-height: 21px;
    right: 6px;
    top: -22px;
  }
`;

export const PinkH1 = styled.h1`
  font-size: 12px;
  line-height: 14px;
  color:  #FF4E53;
  @media (max-width: 700px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const Creatorcard = styled.div`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
  @media (max-width: 700px) {
    padding: 9px 17px;
    font-size: 9px;
  }
`;

export const Desc = styled.p`
  margin: 0px;
  font-size: 12px;

  @media (max-width: 700px) {
    font-size: 8px;
  }
`;

export const TextDiv = styled.div`
  padding: 7px 1px 9px;
  @media (max-width: 700px) {
    padding: 0px 0px 9px;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  padding: 0px;
  color: #212b36;
`;
export const TextStyle = styled.span`
  font-size: 50px;
  color: #212b36;
  font-weight: 350;
  line-height: 16px;
  @media (max-width: 700px) {
    line-height: 0px;
    font-size: 27px;
  }
`;

export const Subdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 0% 0%;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;
