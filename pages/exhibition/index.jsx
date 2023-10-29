import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import articleData from '../../constants/article-data';
import { useRouter } from 'next/router';

const Exhibition = () => {
  const router = useRouter();
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
        {makeAricleData(articleData, 'type1')?.map((x) => {
          return (
            <Type1Container key={x.id} onClick={() => router.push(`/exhibition/${x.id}`)}>
              <div style={{ width: '100%', height: '100%' }}>
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
              </div>
            </Type1Container>
          );
        })}
      </Container>

      {/* mobile */}
      <MobileContainer>
        {makeMobileArticleData(articleData)?.map((x) => {
          return (
            <React.Fragment key={x.id}>
              <div style={{ width: '100%', height: '100%' }}>
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

                    {x.title3 && (
                      <FontSize fontSize={'3rem'} fontWeight={600} margin="0 0 3rem 0">
                        {x.title3}
                      </FontSize>
                    )}
                  </Type1Container>
                )}
              </div>
            </React.Fragment>
          );
        })}
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

const Type1Container = styled.div`
  display: flex;
  padding: 1.5rem;
  width: 100%;
  border: 1px solid #000;

  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-30px);
  }

  @media screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
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
