import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import articleData from '../constants/article-data';
import { useRouter } from 'next/router';
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
  // const type2ContainerHeight = windowDimensions * 0.326;
  const type2ContainerHeight = windowDimensions * 0.313;
  const type3ContainerHeight = windowDimensions * 0.18;

  return (
    <>
      {/* descktop */}
      <Container>
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
                          <Image
                            src={x.images[0]}
                            alt={`card-thumbnail${x.id}`}
                            layout="fill"
                            priority={true}
                            quality={100}
                            placeholder="blur"
                            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                          />
                        </ImageWrapper>

                        <FontSize fontSize={'1.556rem'} fontWeight={700} margin="2rem 0 0.5rem 0">
                          {x.title1}
                        </FontSize>

                        <PreTag fontSize={'3.333rem'} lineHeight={1.46} fontWeight={700}>
                          {x.title2}
                        </PreTag>

                        {x.title3 && (
                          <FontSize fontSize={'3.333rem'} fontWeight={700} margin="0 0 3rem 0">
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
                        <FontSize fontSize={'2.556rem'} fontWeight={700}>
                          {x.title1}
                        </FontSize>

                        <Type2LineWrapper>
                          <Image src={`/line.svg`} alt={`line`} layout="fill" priority={true} quality={100} />
                        </Type2LineWrapper>

                        <FontSize fontSize={'2.333rem'} fontWeight={700} margin={'0 0 1rem 0'}>
                          {x.title2}
                        </FontSize>

                        <PreTag fontSize={'3.333rem'} fontWeight={700} lineHeight={1.46}>
                          {x.title3}
                        </PreTag>
                      </div>
                    </FadeIn>

                    <FadeIn>
                      <PreTag fontSize={'2.333rem'} fontWeight={700} lineHeight={1.52}>
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
                <div key={x.id}>
                  <FadeIn>
                    <Type3Container
                      hoveredIndex={hoveredIndex}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      type3ContainerHeight={type3ContainerHeight}
                      onClick={() => router.push(`/notice/${x.id}`)}
                    >
                      <PreTag fontSize={'3.333rem'} fontWeight={700} lineHeight={1.4} margin={'0 0 2rem 0'}>
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
                          <Image
                            src={x.mobileImages[0]}
                            alt={`card-thumbnail${x.id}`}
                            layout="fill"
                            priority={true}
                            quality={100}
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                          />
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

                          <Type2LineWrapper>
                            <Image src={`/line.svg`} alt={`line`} layout="fill" priority={true} quality={100} />
                          </Type2LineWrapper>

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
                        <PreTag fontSize={'3.333rem'} fontWeight={700} lineHeight={1.5} margin={'0 0 2rem 0'}>
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
  margin-top: 4rem;

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
  padding-right: 0.5rem;

  /* ::-webkit-scrollbar {
    display: none;
  } */

  &::-webkit-scrollbar {
    display: flex;
    opacity: 1;
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    height: 20px;
    background: #000;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
  }

  /* 기본 상태에서는 스크롤바를 감춥니다. */
  /* &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    &::-webkit-scrollbar {
      display: flex;
      opacity: 1;
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      height: 20px;
      background: #888;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.5);
    }
  } */

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
  cursor: url('/red.svg'), url('/purple.svg') 5 5, progress;

  @media screen and (min-width: 480px) {
    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }

  @media screen and (min-width: 1601px) {
    border: 0.111rem solid #000;
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
  cursor: url('/green.svg'), url('/purple.svg') 5 5, progress;

  @media screen and (min-width: 480px) {
    justify-content: space-around;

    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }

  @media screen and (max-width: 480px) {
    padding: 13rem 2rem 2rem 2rem;
    height: 50rem;
  }

  @media screen and (min-width: 1600px) {
    padding-top: 12rem;
    max-height: 51rem;
  }
`;

const Type3Container = styled.div`
  height: ${(props) => props.type3ContainerHeight}px;
  padding: 2rem;
  background-image: url('/bookmarkborder.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: url('/purple.svg'), url('/purple.svg') 5 5, progress;

  @media screen and (min-width: 480px) {
    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }

  @media screen and (max-width: 480px) {
    height: 28rem;
  }

  @media screen and (min-width: 1600px) {
    max-height: 28rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 47rem;

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

const Type2LineWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  margin: 1.6rem 0 3.8rem 0;
`;
