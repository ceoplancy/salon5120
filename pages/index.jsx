import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import articleData from '../constants/article-data';
import FadeIn from 'react-fade-in';

const Article = () => {
  const makeAricleData = (articleData, articleType) => {
    if (articleType === 'type1') {
      return articleData.filter((x) => x.type === 'type1');
    }

    if (articleType === 'type2') {
      return articleData.filter((x) => x.type === 'type2');
    }

    if (articleType === 'type3') {
      return articleData.filter((x) => x.type === 'type3');
    }
  };

  const makeMobileArticleData = (articleData) => {
    const sortByDateAscending = (a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    };

    const sortedData = [...articleData].sort(sortByDateAscending);
    return sortedData;
  };

  return (
    <>
      {/* descktop */}
      <Container>
        <InnerWrapper isType1={true}>
          <Type1Container>
            {makeAricleData(articleData, 'type1')?.map((x) => {
              return (
                <FadeIn key={x.id}>
                  <ImageWrapper>
                    <Image src={x.images[0]} alt={`card-thumbnail${x.id}`} layout="fill" priority={true} quality={100} />
                  </ImageWrapper>

                  <FontSize fontSize={'1rem'} fontWeight={600} margin="2rem 0 0.5rem 0">
                    {x.content1}
                  </FontSize>

                  <PreTag fontSize={'3rem'} lineHeight={1.2} fontWeight={600}>
                    {x.content2}
                  </PreTag>

                  <FontSize fontSize={'3rem'} fontWeight={600} margin="0 0 3rem 0">
                    {x.content7}
                  </FontSize>
                </FadeIn>
              );
            })}
          </Type1Container>
        </InnerWrapper>

        <InnerWrapper>
          {makeAricleData(articleData, 'type2').map((x) => {
            return (
              <Type2Container key={x.id}>
                <FadeIn>
                  <FontSize fontSize={'2.3rem'} fontWeight={600}>
                    {x.content1}
                  </FontSize>

                  <Line />

                  <FontSize fontSize={'1.5rem'} fontWeight={600} margin={'0 0 1rem 0'}>
                    {x.content3}
                  </FontSize>

                  <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                    {x.content4.slice(0, 30) + '...'}
                  </FontSize>

                  <FontSize fontSize={'1.5rem'} fontWeight={600}>
                    일시 I 9월 13일 수요일 오후 4시
                  </FontSize>
                </FadeIn>
              </Type2Container>
            );
          })}
        </InnerWrapper>

        <InnerWrapper>
          {makeAricleData(articleData, 'type3').map((x) => {
            return (
              <Type3Container key={x.id}>
                <FadeIn>
                  <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                    {x.content4.slice(0, 30) + '...'}
                  </FontSize>
                </FadeIn>
              </Type3Container>
            );
          })}
        </InnerWrapper>
      </Container>

      {/* mobile */}
      <MobileContainer>
        {makeMobileArticleData(articleData).map((x) => {
          return (
            <React.Fragment key={x.id}>
              <CustomFadeIn>
                {x.type === 'type1' && (
                  <Type1Container>
                    <ImageWrapper>
                      <Image src={x.images[0]} alt={`card-thumbnail${x.id}`} layout="fill" priority={true} quality={100} />
                    </ImageWrapper>

                    <FontSize fontSize={'1rem'} fontWeight={600} margin="2rem 0 0.5rem 0">
                      {x.content1}
                    </FontSize>

                    <PreTag fontSize={'3rem'} lineHeight={1.2} fontWeight={600}>
                      {x.content2}
                    </PreTag>

                    <FontSize fontSize={'3rem'} fontWeight={600} margin="0 0 3rem 0">
                      {x.content7}
                    </FontSize>
                  </Type1Container>
                )}
              </CustomFadeIn>

              {x.type === 'type2' && (
                <FadeIn>
                  <Type2Container>
                    <FontSize fontSize={'2.3rem'} fontWeight={600}>
                      {x.content1}
                    </FontSize>

                    <Line />

                    <FontSize fontSize={'1.5rem'} fontWeight={600} margin={'0 0 1rem 0'}>
                      {x.content3}
                    </FontSize>

                    <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                      {x.content4.slice(0, 30) + '...'}
                    </FontSize>
                  </Type2Container>
                </FadeIn>
              )}

              {x.type === 'type3' && (
                <FadeIn>
                  <Type3Container>
                    <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                      {x.content4.slice(0, 30) + '...'}
                    </FontSize>
                  </Type3Container>
                </FadeIn>
              )}
            </React.Fragment>
          );
        })}
      </MobileContainer>
    </>
  );
};

export default Article;

const Container = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 520px) {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  width: 42rem;
  height: 70rem;
  display: flex;
  justify-content: center;
  overflow: scroll;
  border: ${(props) => (props.isType1 ? '1px solid #000' : '')};

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
    overflow: hidden;
  }
`;

const Type1Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;

  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-30px);
  }

  @media screen and (max-width: 520px) {
    border: 1px solid #000;
  }
`;

const Type2Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10rem 2rem 2rem 2rem;
  font-size: 3rem;
  word-break: break-word;

  background-image: url('/arch.svg');
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 520px) {
    padding: 13rem 2rem 2rem 2rem;
    height: 51rem;
  }
`;

const Type3Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  font-size: 3rem;
  word-break: break-word;

  background-image: url('/test2.svg');
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 520px) {
    height: 30rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  /* width: 33rem; */
  min-height: 50rem;
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const PreTag = styled.pre`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #000;
  margin: 1.5rem 0 3.5rem 0;
`;

const CustomFadeIn = styled(FadeIn)`
  width: 100%;
`;
