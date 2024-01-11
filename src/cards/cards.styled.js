import styled from 'styled-components';
export const Maincontainer = styled.section`
  background: #ffffff;

  @media (max-width: 991px) {
    margin: 244px 0px 0px 0px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1003px;
  margin: 0px auto;

  @media (max-width: 991px) {
    max-width: 998px;
    padding: 0px 15px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  padding: 36px 0px;
  margin-top: 20px;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: -120px;
    right: -125px;
    background: url(https://spreadd.io/assets/home/whyspreadd/bg-why-spreadd.svg)
      no-repeat;
    width: 221px;
    height: 314px;            
  }
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    &::after {
      display: none;
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    max-width: 837px;
    margin: 0px auto;
    background: #d8e0e6;
    height: 397px;
    top: 13px;
    left: 80px;

    @media (max-width: 991px) {
      width: 100%;
      height: 80%;
      top: 86px;
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WhyStyledTitle = styled.h3`
  align-items: center;
`;

export const StyledTitle = styled.h3`
  font-size: 14px;
  line-height: 3px;
  margin-top: 31px;
  margin-bottom: 0.5em;
  color: #212b36;
  font-weight: 700;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 1px;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 28px;
  text-align: start;

  @media (max-width: 991px) {
    font-size: 9px;
    line-height: 19px;
  }
`;
export const FirstBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  max-width: 33%;
  min-height: 290px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;
  line-height: 1px;
  box-shadow: #3131311a 0px 81.2357px 64px;

  @media (max-width: 991px) {
    max-width: 290px;
    min-height: 151px;
  }
`;

export const LogoBox = styled.div`
  display: contents;
  margin-bottom: 20px;
`;

export const Assetimage = styled.img``;
export const SecondBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 33%;
  border-radius: 5px;
  min-height: 290px;
  padding: 30px;
  background: #ffffff;
  z-index: 2;
  font-size: 1.5rem;

  @media (max-width: 991px) {
    max-width: 290px;
    min-height: 151px;
  }
`;

export const Middlebox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 33%;
  min-height: 290px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: #3131311a 0px 81.2357px 64px;
  padding: 30px;
  z-index: 2;
  font-size: 1.5rem;

  @media (max-width: 991px) {
    max-width: 290px;
    min-height: 151px;
  }
`;
