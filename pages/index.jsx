import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import articleData from '../constants/article-data';
import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';
import FadeIn from 'react-fade-in';
import sortByDateAscending from '../functions/sortByDateAscending';

const Article = () => {
  const router = useRouter();

  const [visibleItems1, setVisibleItems1] = useState(5);
  const [visibleItems2, setVisibleItems2] = useState(5);
  const [visibleItems3, setVisibleItems3] = useState(5);
  const [mobileVisibleItems, setMobileVisibleItems] = useState(5);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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

    if (type === 'mobile') {
      setMobileVisibleItems((prev) => prev + 5);
      return;
    }
  };

  const makeAricleData = (articleData, articleType) => {
    if (articleType === 'type1') {
      return sortByDateAscending(
        articleData.filter((x) => x.type === 'type1'),
        'date'
      );
    }

    if (articleType === 'type2') {
      return sortByDateAscending(
        articleData.filter((x) => x.type === 'type2'),
        'date'
      );
    }

    if (articleType === 'type3') {
      return sortByDateAscending(
        articleData.filter((x) => x.type === 'type3'),
        'date'
      );
    }
  };

  const makeMobileArticleData = (articleData) => {
    return sortByDateAscending(articleData, 'date');
  };

  const [windowDimensions, setWindowDimensions] = useState();

  const updateWindowDimensions = () => {
    setWindowDimensions(window.innerWidth);
  };

  useEffect(() => {
    setWindowDimensions(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const type2ContainerPaddingTop = windowDimensions * 0.08;
  const type2ContainerHeight = windowDimensions * 0.326;
  const type3ContainerHeight = windowDimensions * 0.185;

  return (
    <>
      {/* descktop */}
      <Container>
        <GlobalStyle />

        <InnerWrapper>
          {makeAricleData(articleData, 'type1')
            .slice(0, visibleItems1)
            ?.map((x, index) => {
              return (
                <div key={x.id}>
                  <FadeIn>
                    <Type1Container hoveredIndex={hoveredIndex} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} onClick={() => router.push(`/exhibition/${x.id}`)}>
                      <div style={{ width: '100%', height: '100%' }}>
                        <ImageWrapper>
                          <Image width={500} height={500} src={x.images[0]} alt={`card-thumbnail${x.id}`} layout="fill" priority={true} quality={100} />
                        </ImageWrapper>

                        <FontSize fontSize={'1.4rem'} fontWeight={700} margin="2rem 0 0.5rem 0">
                          {x.title1}
                        </FontSize>

                        <PreTag fontSize={'3rem'} lineHeight={1.5} fontWeight={700}>
                          {x.title2}
                        </PreTag>

                        {x.title3 && (
                          <FontSize fontSize={'3rem'} fontWeight={700} margin="0 0 3rem 0">
                            {x.title3}
                          </FontSize>
                        )}
                      </div>
                    </Type1Container>
                  </FadeIn>
                </div>
              );
            })}

          {visibleItems1 < makeAricleData(articleData, 'type1')?.length ? (
            <LoadMoreBtn onClick={() => onLoadMore(1)}>
              <FontSize fontSize={'2.5rem'} fontWeight={700}>
                LOAD MORE
              </FontSize>
            </LoadMoreBtn>
          ) : null}
        </InnerWrapper>

        <InnerWrapper>
          {makeAricleData(articleData, 'type2')
            .slice(0, visibleItems2)
            .map((x, index) => {
              return (
                <div key={x.id}>
                  <Type2Container
                    hoveredIndex={hoveredIndex}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    type2ContainerHeight={type2ContainerHeight}
                    type2ContainerPaddingTop={type2ContainerPaddingTop}
                    onClick={() => router.push(`/program/${x.id}`)}
                  >
                    <FadeIn>
                      <div>
                        <FontSize fontSize={'2.3rem'} fontWeight={700}>
                          {x.title1}
                        </FontSize>

                        <Line />

                        <FontSize fontSize={'2.1rem'} fontWeight={700} margin={'0 0 1rem 0'}>
                          {x.title2}
                        </FontSize>

                        <PreTag fontSize={'3rem'} fontWeight={700} lineHeight={1.5}>
                          {x.title3}
                        </PreTag>
                      </div>
                    </FadeIn>

                    <FadeIn>
                      <PreTag fontSize={'2.1rem'} fontWeight={700} lineHeight={1.5}>
                        {x.title4}
                      </PreTag>
                    </FadeIn>
                  </Type2Container>
                </div>
              );
            })}

          {visibleItems2 < makeAricleData(articleData, 'type2')?.length ? (
            <LoadMoreBtn onClick={() => onLoadMore(2)}>
              <FontSize fontSize={'2.5rem'} fontWeight={700}>
                LOAD MORE
              </FontSize>
            </LoadMoreBtn>
          ) : null}
        </InnerWrapper>

        <InnerWrapper>
          {makeAricleData(articleData, 'type3')
            .slice(0, visibleItems3)
            .map((x, index) => {
              return (
                <div key={x.id} style={{ width: '100%' }}>
                  <FadeIn>
                    <Type3Container
                      hoveredIndex={hoveredIndex}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      type3ContainerHeight={type3ContainerHeight}
                      onClick={() => router.push(`/notice/${x.id}`)}
                    >
                      <PreTag fontSize={'3.2rem'} fontWeight={700} lineHeight={1.5} margin={'0 0 2rem 0'}>
                        {x.title1}
                      </PreTag>
                    </Type3Container>
                  </FadeIn>
                </div>
              );
            })}

          {visibleItems3 < makeAricleData(articleData, 'type3')?.length ? (
            <LoadMoreBtn onClick={() => onLoadMore(3)}>
              <FontSize fontSize={'2.5rem'} fontWeight={700}>
                LOAD MORE
              </FontSize>
            </LoadMoreBtn>
          ) : null}
        </InnerWrapper>
      </Container>

      {/* mobile */}
      <MobileContainer>
        {makeMobileArticleData(articleData)
          .slice(0, mobileVisibleItems)
          ?.map((x) => {
            return (
              <React.Fragment key={x.id}>
                <div style={{ width: '100%' }}>
                  {x.type === 'type1' && (
                    <Type1Container onClick={() => router.push(`/exhibition/${x.id}`)}>
                      <FadeIn>
                        <ImageWrapper>
                          <Image src={x.mobileImages[0]} alt={`card-thumbnail${x.id}`} layout="fill" priority={true} quality={100} objectFit="cover" />
                        </ImageWrapper>

                        <FontSize fontSize={'1.4rem'} fontWeight={700} margin="2rem 0 0.5rem 0">
                          {x.title1}
                        </FontSize>

                        <PreTag fontSize={'3rem'} lineHeight={1.5} fontWeight={700}>
                          {x.title2}
                        </PreTag>

                        {x.title3 && (
                          <FontSize fontSize={'3rem'} fontWeight={700} margin="0 0 3rem 0">
                            {x.title3}
                          </FontSize>
                        )}
                      </FadeIn>
                    </Type1Container>
                  )}
                </div>

                {x.type === 'type2' && (
                  <div style={{ width: '100%', height: '100%' }}>
                    <FadeIn>
                      <Type2Container onClick={() => router.push(`/program/${x.id}`)}>
                        <div>
                          <FontSize fontSize={'2.3rem'} fontWeight={700}>
                            {x.title1}
                          </FontSize>

                          <Line />

                          <FontSize fontSize={'2.1rem'} fontWeight={700} margin={'0 0 1rem 0'}>
                            {x.title2}
                          </FontSize>

                          <PreTag fontSize={'3rem'} fontWeight={700} lineHeight={1.5} margin={'0 0 2rem 0'}>
                            {x.title3}
                          </PreTag>
                        </div>

                        <PreTag fontSize={'2.1rem'} fontWeight={700} lineHeight={1.5}>
                          {x.title4}
                        </PreTag>
                      </Type2Container>
                    </FadeIn>
                  </div>
                )}

                {x.type === 'type3' && (
                  <div style={{ width: '100%' }}>
                    <FadeIn>
                      <Type3Container onClick={() => router.push(`/notice/${x.id}`)}>
                        <PreTag fontSize={'3.2rem'} fontWeight={700} lineHeight={1.5} margin={'0 0 2rem 0'}>
                          {x.title1}
                        </PreTag>
                      </Type3Container>
                    </FadeIn>
                  </div>
                )}
              </React.Fragment>
            );
          })}

        {mobileVisibleItems < makeMobileArticleData(articleData)?.length ? (
          <MobileLoadMoreBtn onClick={() => onLoadMore('mobile')}>
            <FontSize fontSize={'2.5rem'} fontWeight={700}>
              LOAD MORE
            </FontSize>
          </MobileLoadMoreBtn>
        ) : null}
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

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 480px) {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 79vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    overflow: hidden;
  }
`;

const Type1Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2.5rem 6.5rem 2.5rem;
  border: 0.15rem solid #000;
  background-color: #fff;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }
`;

const Type2Container = styled.div`
  display: flex;
  flex-direction: column;

  height: ${(props) => props.type2ContainerHeight}px;
  padding-top: ${(props) => props.type2ContainerPaddingTop}px;
  padding-right: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;

  background-image: url('/arch.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    justify-content: space-between;

    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }

  @media screen and (max-width: 480px) {
    padding: 13rem 2rem 2rem 2rem;
    height: 53rem;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 18rem;
    max-height: 64rem;
  }
`;

const Type3Container = styled.div`
  height: ${(props) => props.type3ContainerHeight}px;
  /* height: 35rem; */
  padding: 2rem;
  background-image: url('/test2.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }

  @media screen and (max-width: 480px) {
    height: 30rem;
  }

  @media screen and (min-width: 1920px) {
    max-height: 35rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  /* min-height: 50rem; */
  min-height: 70rem;

  @media screen and (max-width: 480px) {
    min-height: 25rem;
  }
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #000;
  margin: 1.5rem 0 3.5rem 0;
`;

const GlobalStyle = createGlobalStyle`
  @media screen and (min-width: 480px) {
    body {
      overflow: hidden !important;
    }
  }
`;

const LoadMoreBtn = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1.3rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MobileLoadMoreBtn = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
