import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import articleData from '../constants/article-data';
import FadeIn from 'react-fade-in';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';

const Article = () => {
  const router = useRouter();

  const [visibleItems1, setVisibleItems1] = useState(5);
  const [visibleItems2, setVisibleItems2] = useState(5);
  const [visibleItems3, setVisibleItems3] = useState(5);

  const onLoadMore = (type) => {
    if (type === 1) {
      setVisibleItems1((prev) => prev + 5);
      return;
    }

    if (type === 2) {
      setVisibleItems2((prev) => prev + 5);
      return;
    }

    if (type === 3) {
      setVisibleItems3((prev) => prev + 5);
      return;
    }
  };

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
        <GlobalStyle />

        <InnerWrapper isType1={true}>
          <Type1Container>
            {makeAricleData(articleData, 'type1')
              .slice(0, visibleItems1)
              ?.map((x) => {
                return (
                  <div key={x.id} onClick={() => router.push(`/exhibition/${x.id}`)}>
                    <FadeIn>
                      <ImageWrapper>
                        <Image src={x.images[0]} alt={`card-thumbnail${x.id}`} layout="fill" priority={true} quality={100} />
                      </ImageWrapper>

                      <FontSize fontSize={'1rem'} fontWeight={600} margin="2rem 0 0.5rem 0">
                        {x.title1}
                      </FontSize>

                      <PreTag fontSize={'3rem'} lineHeight={1.2} fontWeight={600}>
                        {x.title2}
                      </PreTag>

                      <FontSize fontSize={'3rem'} fontWeight={600} margin="0 0 3rem 0">
                        {x.title3}
                      </FontSize>
                    </FadeIn>
                  </div>
                );
              })}
          </Type1Container>

          {visibleItems1 < makeAricleData(articleData, 'type1')?.length ? (
            <LoadMoreBtn onClick={() => onLoadMore(1)}>
              <FontSize fontSize={'2.5rem'} fontWeight={700} margin="0 0 3rem 0">
                LOAD MORE
              </FontSize>
            </LoadMoreBtn>
          ) : null}
        </InnerWrapper>

        <InnerWrapper isType1={false}>
          {makeAricleData(articleData, 'type2')
            .slice(0, visibleItems2)
            .map((x) => {
              return (
                <CustomFadeIn key={x.id}>
                  <Type2Container onClick={() => router.push(`/program/${x.id}`)}>
                    <div>
                      <FontSize fontSize={'2.3rem'} fontWeight={600}>
                        {x.title1}
                      </FontSize>

                      <Line />

                      <FontSize fontSize={'1.5rem'} fontWeight={600} margin={'0 0 1rem 0'}>
                        {x.title2}
                      </FontSize>

                      <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2}>
                        {x.title3}
                      </FontSize>
                    </div>

                    <FontSize fontSize={'1.5rem'} fontWeight={600}>
                      {x.title4}
                    </FontSize>
                  </Type2Container>
                </CustomFadeIn>
              );
            })}

          {visibleItems2 < makeAricleData(articleData, 'type2')?.length ? (
            <LoadMoreBtn onClick={() => onLoadMore(2)}>
              <FontSize fontSize={'2.5rem'} fontWeight={700} margin="0 0 3rem 0">
                LOAD MORE
              </FontSize>
            </LoadMoreBtn>
          ) : null}
        </InnerWrapper>

        <InnerWrapper isType1={false}>
          {makeAricleData(articleData, 'type3')
            .slice(0, visibleItems3)
            .map((x) => {
              return (
                <CustomFadeIn key={x.id}>
                  <Type3Container onClick={() => router.push(`/notice/${x.id}`)}>
                    <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                      {x.title1}
                    </FontSize>
                  </Type3Container>
                </CustomFadeIn>
              );
            })}

          {visibleItems3 < makeAricleData(articleData, 'type3')?.length ? (
            <LoadMoreBtn onClick={() => onLoadMore(3)}>
              <FontSize fontSize={'2.5rem'} fontWeight={700} margin="0 0 3rem 0">
                LOAD MORE
              </FontSize>
            </LoadMoreBtn>
          ) : null}
        </InnerWrapper>
      </Container>

      {/* mobile */}
      <MobileContainer>
        {makeMobileArticleData(articleData).map((x) => {
          return (
            <React.Fragment key={x.id}>
              <CustomFadeIn>
                {x.type === 'type1' && (
                  <Type1Container onClick={() => router.push(`/exhibition/${x.id}`)}>
                    <ImageWrapper>
                      <Image src={x.images[0]} alt={`card-thumbnail${x.id}`} layout="fill" priority={true} quality={100} />
                    </ImageWrapper>

                    <FontSize fontSize={'1rem'} fontWeight={600} margin="2rem 0 0.5rem 0">
                      {x.title1}
                    </FontSize>

                    <PreTag fontSize={'3rem'} lineHeight={1.2} fontWeight={600}>
                      {x.title2}
                    </PreTag>

                    <FontSize fontSize={'3rem'} fontWeight={600} margin="0 0 3rem 0">
                      {x.title3}
                    </FontSize>
                  </Type1Container>
                )}
              </CustomFadeIn>

              {x.type === 'type2' && (
                <CustomFadeIn>
                  <Type2Container onClick={() => router.push(`/program/${x.id}`)}>
                    <div>
                      <FontSize fontSize={'2.3rem'} fontWeight={600}>
                        {x.title1}
                      </FontSize>

                      <Line />

                      <FontSize fontSize={'1.5rem'} fontWeight={600} margin={'0 0 1rem 0'}>
                        {x.title2}
                      </FontSize>

                      <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2}>
                        {x.title3}
                      </FontSize>
                    </div>

                    <FontSize fontSize={'1.5rem'} fontWeight={600} margin="0 0 6rem 0">
                      {x.title4}
                    </FontSize>
                  </Type2Container>
                </CustomFadeIn>
              )}

              {x.type === 'type3' && (
                <CustomFadeIn>
                  <Type3Container onClick={() => router.push(`/notice/${x.id}`)}>
                    <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                      {x.title1}
                    </FontSize>
                  </Type3Container>
                </CustomFadeIn>
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
  width: 100%;
  margin-top: 6rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

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
  width: 100%;
  height: 79vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: ${(props) => (props.isType1 ? '1px solid #000' : '')};
  overflow: scroll;

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
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 65rem;

  padding: 10rem 2rem 2rem 2rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-30px);
  }

  background-image: url('/arch.svg');
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 13rem 2rem 2rem 2rem;
    height: 51rem;
  }
`;

const Type3Container = styled.div`
  width: 100%;
  height: 36rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-30px);
  }

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
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  @media screen and (min-width: 520px) {
    body {
      overflow: hidden !important;
    }
  }
`;

const LoadMoreBtn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;