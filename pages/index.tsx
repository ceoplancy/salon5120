import type { NextPage } from 'next';
import styled from 'styled-components';
import Card from 'components/card/card';
import { cardData, cardDataType } from 'constants/card-title/index';
import { useRecoilState } from 'recoil';
import { filterStateAtom } from 'atoms';
import { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import React from 'react';

const Home: NextPage = () => {
  const [filterState, setFilterState] = useRecoilState(filterStateAtom);

  // unmount
  useEffect(() => {
    return () => {
      return setFilterState('all');
    };
  }, []);

  return (
    <CardFrame>
      {cardData &&
        cardData.map((data: cardDataType, idx: number) => {
          return (
            <React.Fragment key={data.id}>
              {filterState === 'all' ? (
                <FadeIn>
                  <Card data={data} />
                </FadeIn>
              ) : (
                filterState !== 'all' &&
                filterState === data.type && (
                  <FadeIn>
                    <Card data={data} />
                  </FadeIn>
                )
              )}
            </React.Fragment>
          );
        })}
    </CardFrame>
  );
};

export default Home;

const CardFrame = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;
  margin: 6rem 0;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
