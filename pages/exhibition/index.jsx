import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import articleData from '../../constants/article-data';
import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in/lib/FadeIn';
import sortByDateAscending from '../../functions/sortByDateAscending';

const Exhibition = () => {
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
      articleData.filter((x) => x.type === 'type1'),
      'date'
    );
  };

  const type1Data = sortByDateAscending(
    articleData.filter((x) => x.type === 'type1'),
    'date'
  );

  return (
    <>
      {/* descktop */}
      <Container>
        {makeAricleData(articleData)?.map((x) => {
          return (
            <React.Fragment key={x.id}>
              <FadeIn>
                <Type1Container key={x.id} onClick={() => router.push(`/exhibition/${x.id}`)}>
                  <div style={{ width: '100%', height: '100%' }}>
                    <ImageWrapper>
                      <Image
                        src={x.images[0]}
                        alt={`card-thumbnail${x.id}`}
                        priority={true}
                        quality={100}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                      />
                    </ImageWrapper>

                    <FontSize fontSize={'1.66rem'} fontWeight={700} margin="2rem 0 0.5rem 0">
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
            </React.Fragment>
          );
        })}
      </Container>

      {/* mobile */}
      <MobileContainer>
        {type1Data?.slice(0, mobileVisibleItems).map((x) => {
          return (
            <React.Fragment key={x.id}>
              <div style={{ width: '100%', height: '100%' }}>
                {x.type === 'type1' && (
                  <FadeIn>
                    <Type1Container onClick={() => router.push(`/exhibition/${x.id}`)}>
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
                    </Type1Container>
                  </FadeIn>
                )}
              </div>
            </React.Fragment>
          );
        })}

        {mobileVisibleItems < type1Data.length ? (
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

export default Exhibition;

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

const Type1Container = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 6.5rem 2.5rem;
  width: 100%;
  border: 1px solid #000;
  cursor: url('/red.svg'), url('/purple.svg') 5 5, progress;

  @media screen and (min-width: 480px) {
    min-height: 80rem;

    transition: all 0.2s;
    &:hover {
      transform: translateY(${(props) => (props.hoveredIndex === 0 ? '0px' : '-30px')});
    }
  }

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
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

const MobileLoadMoreBtn = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
