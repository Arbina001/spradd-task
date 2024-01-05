import {
  GradientButton,
  MargingDiv,
  Description,
  Leftsection,
  LeftlogoImage,
  MainDiv,
  LRcontainer,
  Txtsection,
  Rightsection,
  ImageAfter,
  ImageBefore,
  RightImage,
  PinkAvatar,
  SmallImage,
  Title,
} from './spradd.styled.js';

export function Hadesection() {
  return (
    <div>
      {/* asign center div for leftside image o/p */}
      <MargingDiv>
        <LeftlogoImage
          src="https://spreadd.io/assets/home/left-dot-patch.svg"
          alt="leftimage"
        />
      </MargingDiv>
      {/* finish  */}
      <MainDiv>
        {/* perform properties  */}
        <LRcontainer>
          <Leftsection>
            <GradientButton>Spreadd Academy</GradientButton>
            <Title>Create course and</Title>

            <Title>curriculums for your</Title>
            <Title>collaborators/followers</Title>
            <Txtsection>
              <Description>
                We have got a host of features that can enable you to skyrocket
                your
              </Description>
              <Description>
                workshop and course sales. Empower your collaborators by
                delivering
              </Description>
              <Description>
                deeply engaging experience wherever they are, anytime, anywhere.
              </Description>
            </Txtsection>
          </Leftsection>
          <Rightsection>
            <PinkAvatar>
              <SmallImage src="https://spreadd.io/assets/home/academy.jpg"
              alt= "spreadd academy"></SmallImage>
              <span>Amazing course,i would definetely recommend</span>
            </PinkAvatar>
            <RightImage
              src="https://spreadd.io/assets/home/academy.jpg"
              alt="rigtimage"></RightImage>
            <ImageBefore src="https://spreadd.io/assets/home/round-patch.svg"  alt="round-patch"></ImageBefore>
            <ImageAfter src="https://spreadd.io/assets/home/dot-patch.svg" alt="dot-patch"></ImageAfter>
          </Rightsection>
        </LRcontainer>
      </MainDiv>
    </div>
  );
}
