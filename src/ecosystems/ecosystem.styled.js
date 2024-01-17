import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'ProximaNova', sans-serif;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background-color: #ffffff;

  @media (max-width: 991px) {
    background-color: #ffffff;
  }
`;

export const Collaborationwrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
`;

export const Propertieswrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: 136px;
`;

export const Leftsidebox = styled.div`
  margin: 0px 0px 0px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Propertiesinnerwrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Headingmain = styled.h3`
  max-width: 400px;
  width: 100%;
  margin: 130px 0px 0px 0px;
  font-size: 40px;
  font-weight: 350;
  font-family: 'ProximaNova', sans-serif;
  line-height: 40px;

  @media (max-width: 991px) {
    margin: 87px 0px 0px 0px;
    font-size: 29px;
    font-weight: 400;
    line-height: 40px;
  }
`;

export const Textproperties = styled.p`
  width: 100%;
  margin: 40px 0 0;
  max-width: 400px;
  width: 100%;
  line-height: 20px;
  font-size: 15px;
`;

export const Rightsidesection = styled.div`
  display: flex;
  gap: 60px;
  position: relative;
  margin: 0 -18px 0 100px;
  @media (max-width: 991px) {
    margin: 0px -20px 0px 31px;
  }
  @media (max-width: 991px) {
    justify-content: flex-end;
  }
`;

export const Imageswrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const collabrationimagebox = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
`;

export const Handimagebox = styled.img`
  position: relative;
  max-width: 190px;
  width: 100%;
  top: 90px;
`;

export const Collabrationimagefunctionbox = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
`;

export const Imagebox = styled.img`
  position: relative;
  max-width: 190px;
  width: 100%;
  top: 140px;
  @media (max-width: 991px) {
    margin-left: -25px;
  }
`;

export const Creatorfuntions = styled.div`
  border-radius: 3px;
  border: 9px solid #ffffff;
  background: #ffffff;
  position: absolute;
  top: 402px;
  right: 150px;
  width: 128px;
  max-height: 28px;
  height: auto;
  @media (max-width: 991px) {
    position: absolute;
    top: 230px;
    right: 82px;
  }
`;

export const Creatorwrapper = styled.h4`
  color: #ed5d52;
  position: relative;
  right: -6px;
  top: -20px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'ProximaNova', sans-serif;  
`;
