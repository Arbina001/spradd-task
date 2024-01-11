import {
  InnerWrapper,
  FirstBox,
  LogoBox,
  Assetimage,
  MainContainer,
  SecondBox,
  WhyStyledTitle,
  Description,
  StyledTitle,
  Middlebox,
  ContentBox,
  Maincontainer,
} from './cards.styled';
export function Tasks() {
  return (
    <>
      <Maincontainer>
        <MainContainer>
          <ContentBox>
            <WhyStyledTitle>Why Spreadd?</WhyStyledTitle>
            <p>
              Its time to give your ideas the wings they need. Bring them on to
              Spreadd and see them grow.
            </p>
          </ContentBox>
          <InnerWrapper>
            <FirstBox>
              <LogoBox>
                <Assetimage src="https://spreadd.io/assets/home/whyspreadd/noname.svg"></Assetimage>
                <StyledTitle>No middle-man</StyledTitle>
                <Description>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </Description>
              </LogoBox>
            </FirstBox>
            <SecondBox>
              <LogoBox>
                <Assetimage src="https://spreadd.io/assets/home/whyspreadd/marketplace.svg"></Assetimage>
                <StyledTitle>NFT marketplace</StyledTitle>
                <Description>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </Description>
              </LogoBox>
            </SecondBox>
            <Middlebox>
              <LogoBox>
                <Assetimage src="https://spreadd.io/assets/home/whyspreadd/sales.svg"></Assetimage>
                <StyledTitle>Increase your product sale</StyledTitle>
                <Description>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your moneey.
                </Description>
              </LogoBox>
            </Middlebox>
          </InnerWrapper>
        </MainContainer>
      </Maincontainer>               
    </>
  );
}
