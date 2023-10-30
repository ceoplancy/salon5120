import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import articleData from '../../constants/article-data';
import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in/lib/FadeIn';
import sortByDateAscending from '../../functions/sortByDateAscending';

const Notice = () => {
  const router = useRouter();

  const makeAricleData = (articleData) => {
    return sortByDateAscending(
      articleData.filter((x) => x.type === 'type3'),
      'date'
    );
  };

  const type2Data = sortByDateAscending(
    articleData.filter((x) => x.type === 'type3'),
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

  const type3ContainerHeight = windowDimensions * 0.19;

  return (
    <>
      {/* descktop */}
      <Container>
        {makeAricleData(articleData)?.map((x) => {
          return (
            <div key={x.id}>
              <FadeIn>
                <Type3Container type3ContainerHeight={type3ContainerHeight} onClick={() => router.push(`/notice/${x.id}`)}>
                  <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                    {x.title1}
                  </FontSize>
                </Type3Container>
              </FadeIn>
            </div>
          );
        })}
      </Container>

      {/* mobile */}
      <MobileContainer>
        {type2Data?.map((x) => {
          return (
            <div key={x.id} style={{ width: '100%', height: '100%' }}>
              {x.type === 'type3' && (
                <FadeIn>
                  <Type3Container onClick={() => router.push(`/notice/${x.id}`)}>
                    <FontSize fontSize={'3rem'} fontWeight={600} lineHeight={1.2} margin={'0 0 2rem 0'}>
                      {x.title1}
                    </FontSize>
                  </Type3Container>
                </FadeIn>
              )}
            </div>
          );
        })}
      </MobileContainer>
    </>
  );
};

export default Notice;

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

const Type3Container = styled.div`
  width: 100%;
  /* height: 36rem; */
  height: ${(props) => props.type3ContainerHeight}px;
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