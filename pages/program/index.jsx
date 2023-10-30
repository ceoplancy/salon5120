import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import articleData from '../../constants/article-data';
import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in/lib/FadeIn';
import sortByDateAscending from '../../functions/sortByDateAscending';

const Program = () => {
  const router = useRouter();

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

  const type2ContainerHeight = windowDimensions * 0.326;

  return (
    <>
      {/* descktop */}
      <Container>
        {makeAricleData(articleData)?.map((x) => {
          return (
            <div key={x.id}>
              <FadeIn>
                <Type2Container type2ContainerHeight={type2ContainerHeight} onClick={() => router.push(`/program/${x.id}`)}>
                  <FadeIn>
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
                  </FadeIn>

                  <FadeIn>
                    <FontSize fontSize={'1.5rem'} fontWeight={600}>
                      {x.title4}
                    </FontSize>
                  </FadeIn>
                </Type2Container>
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
              {x.type === 'type2' && (
                <FadeIn>
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
                </FadeIn>
              )}
            </div>
          );
        })}
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

const Type2Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  /* height: 65rem; */
  height: ${(props) => props.type2ContainerHeight}px;

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

const Line = styled.div`
  width: 100%;
  border: 1px solid #000;
  margin: 1.5rem 0 3.5rem 0;
`;
