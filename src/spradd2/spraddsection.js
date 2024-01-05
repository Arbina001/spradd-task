import {
  Creatorcard,
  Desc,
  Description,
  HeadingWrapper,
  CreatorsWrapper,
  LeftImageDiv,
  LeftSideImage,
  LeftsideDiv,
  PinkH1,
  PinkLineWrapper,
  UpperRightDiv,
  RightsideDiv,
  SmallSizeimage,
  Subdiv,
  TextDiv,
  TextStyle,
  CardWrapper,
} from './spraddsection.styled';
export function SpreadforCreator() {
  return (
    <>
      <CreatorsWrapper>
        <UpperRightDiv>
          <SmallSizeimage
            src="https://spreadd.io/assets/home/left-dot-patch.svg"
            alt="left-dot-patch"
          ></SmallSizeimage>
        </UpperRightDiv>
        <HeadingWrapper>
          <Subdiv>
            <LeftsideDiv>
              <PinkLineWrapper>100+ curated products</PinkLineWrapper>
              <CardWrapper>
                <PinkH1>100+</PinkH1>
                <Desc>Happy Customers</Desc>
              </CardWrapper>
              <LeftSideImage
                src="https://spreadd.io/assets/home/iphone.png"
                alt="phone-image"
              ></LeftSideImage>
            </LeftsideDiv>
            <RightsideDiv>
              <Creatorcard>Creator Store</Creatorcard>
              <TextDiv>
                <TextStyle>Curate your</TextStyle>
              </TextDiv>
              <TextDiv>
                <TextStyle>products and turn</TextStyle>
              </TextDiv>
              <TextDiv>
                <TextStyle>your content shop-</TextStyle>
              </TextDiv>
              <TextDiv>
                <TextStyle>able</TextStyle>
              </TextDiv>
              <Description>
                <p>Apply to create your own store. You can choose brands</p>
                <p>and display their product within your own store. You can</p>
                <p>get paid on every sale brand makes through you.</p>
              </Description>
            </RightsideDiv>
          </Subdiv>
        </HeadingWrapper>
      </CreatorsWrapper>
    </>
  );
}
