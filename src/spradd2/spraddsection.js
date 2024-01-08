import {
  Creatorcard,
  Smalldescription,
  Smalldescriptionription,
  HeadingWrapper,
  CreatorsWrapper,
  LeftSideImage,
  Leftsidebox,
  PinkH1,
  PinkLineWrapper,
  UpperRightbox,
  Rightsidebox,
  SmallSizeimage,
  Subbox,
  Textbox,
  TextStyle,
  CardWrapper,
} from './spraddsection.styled';
export function SpreadforCreator() {
  return (
    <>
      <CreatorsWrapper>
        <UpperRightbox>
          <SmallSizeimage
            src="https://spreadd.io/assets/home/left-dot-patch.svg"
            alt="left-dot-patch"
          ></SmallSizeimage>
        </UpperRightbox>
        <HeadingWrapper>
          <Subbox>
            <Leftsidebox>
              <PinkLineWrapper>100+ curated products</PinkLineWrapper>
              <CardWrapper>
                <PinkH1>100+</PinkH1>
                <Smalldescription>Happy Customers</Smalldescription>
              </CardWrapper>
              <LeftSideImage
                src="https://spreadd.io/assets/home/iphone.png"
                alt="phone-image"
              ></LeftSideImage>
            </Leftsidebox>
            <Rightsidebox>
              <Creatorcard>Creator Store</Creatorcard>
              <Textbox>
                <TextStyle>Curate your</TextStyle>
              </Textbox>
              <Textbox>
                <TextStyle>products and turn</TextStyle>
              </Textbox>
              <Textbox>
                <TextStyle>your content shop-</TextStyle>
              </Textbox>
              <Textbox>
                <TextStyle>able</TextStyle>
              </Textbox>
              <Smalldescriptionription>
                <p>Apply to create your own store. You can choose brands</p>
                <p>and display their product within your own store. You can</p>
                <p>get paid on every sale brand makes through you.</p>
              </Smalldescriptionription>
            </Rightsidebox>
          </Subbox>
        </HeadingWrapper>
      </CreatorsWrapper>
    </>
  );
}
