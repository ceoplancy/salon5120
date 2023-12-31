import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import articleData from '../../constants/article-data';
import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in/lib/FadeIn';
import sortByDateAscending from '../../functions/sortByDateAscending';
import Image from 'next/image';

const Program = () => {
  const router = useRouter();

  const [mobileVisibleItems, setMobileVisibleItems] = useState(5);

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

  const makeAricleData = (articleData) => {
    return sortByDateAscending(
      articleData.filter((x) => x.type === 'type2'),
      'date'
    );
  };

  const type2Data = sortByDateAscending(
    articleData.filter((x) => x.type === 'type2'),
    'date'
  );

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

  // const type2ContainerHeight = windowDimensions * 0.326;
  const type2ContainerHeight = windowDimensions * 0.313;
  const type2ContainerPaddingTop = windowDimensions * 0.08;

  return (
    <>
      {/* descktop */}
      <Container>
        {makeAricleData(articleData)?.map((x) => {
          return (
            <div key={x.id}>
              <FadeIn>
                <Type2Container type2ContainerPaddingTop={type2ContainerPaddingTop} type2ContainerHeight={type2ContainerHeight} onClick={() => router.push(`/program/${x.id}`)}>
                  <TitleWrapper>
                    <InnerWrapper>
                      <FontSize fontSize={'2.556rem'} fontWeight={700}>
                        {x.title1}
                      </FontSize>

                      <ImageWrapper>
                        <Image src={`/line.svg`} alt={`line`} layout="fill" priority={true} quality={100} />
                      </ImageWrapper>

                      {x.title2 && (
                        <FontSize fontSize={'2.333rem'} fontWeight={700} margin={'0 0 1rem 0'}>
                          {x.title2}
                        </FontSize>
                      )}

                      {x.title3 && (
                        <PreTag fontSize={'3.333rem'} fontWeight={700} lineHeight={1.46} margin={'0 0 1rem 0'}>
                          {x.title3}
                        </PreTag>
                      )}
                    </InnerWrapper>

                    <div style={{ height: '5rem' }}>
                      {x.title4 && (
                        <PreTag fontSize={'2.333rem'} fontWeight={700} lineHeight={1.52}>
                          {x.title4}
                        </PreTag>
                      )}
                    </div>
                  </TitleWrapper>
                </Type2Container>
              </FadeIn>
            </div>
          );
        })}
      </Container>

      {/* mobile */}
      <MobileContainer>
        {type2Data?.slice(0, mobileVisibleItems).map((x) => {
          return (
            <div key={x.id} style={{ width: '100%', height: '100%' }}>
              {x.type === 'type2' && (
                <FadeIn>
                  <Type2Container onClick={() => router.push(`/program/${x.id}`)}>
                    <TitleWrapper>
                      <InnerWrapper>
                        <FontSize fontSize={'2.556rem'} fontWeight={700}>
                          {x.title1}
                        </FontSize>

                        <ImageWrapper>
                          <Image src={`/line.svg`} alt={`line`} layout="fill" priority={true} quality={100} />
                        </ImageWrapper>

                        <FontSize fontSize={'2.1rem'} fontWeight={700} margin={'0 0 1rem 0'}>
                          {x.title2}
                        </FontSize>

                        <PreTag fontSize={'3.333rem'} fontWeight={700} lineHeight={1.46}>
                          {x.title3}
                        </PreTag>
                      </InnerWrapper>

                      <div style={{ height: '5rem' }}>
                        <PreTag fontSize={'2.2rem'} fontWeight={700} lineHeight={1.52}>
                          {x.title4}
                        </PreTag>
                      </div>
                    </TitleWrapper>
                  </Type2Container>
                </FadeIn>
              )}
            </div>
          );
        })}

        {mobileVisibleItems < type2Data.length ? (
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

export default Program;

const Container = styled.div`
  width: 100%;
  margin: 6rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 480px) {
    display: none;
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

const Type2Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: ${(props) => props.type2ContainerHeight}px;
  padding-top: ${(props) => props.type2ContainerPaddingTop}px;
  padding-right: 3rem;
  padding-bottom: 6rem;
  padding-left: 3rem;

  background-image: url('/arch.svg');
  background-repeat: no-repeat;
  background-size: contain;
  cursor: url('/green.svg'), url('/purple.svg') 5 5, progress;

  @media screen and (min-width: 480px) {
    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }

  @media screen and (min-width: 1600px) {
    padding-top: 12rem;
    max-height: 51rem;
  }

  @media screen and (max-width: 480px) {
    padding: 11rem 3rem 6rem 3rem;
    height: 50rem;
  }
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  margin: 1.6rem 0 3rem 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 28rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
