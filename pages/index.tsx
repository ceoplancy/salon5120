import type { NextPage } from 'next';
import styled from 'styled-components';
import Card from 'components/card/card';
import { cardData, cardDataType } from 'constants/card-title/index';
import { useRecoilState } from 'recoil';
import { filterStateAtom } from 'atoms';
import { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import React from 'react';
import Font from 'components/common/font';
import Toast from 'components/common/toast';

const Home: NextPage = () => {
  const [filterState, setFilterState] = useRecoilState(filterStateAtom);

  // unmount
  useEffect(() => {
    return () => {
      return setFilterState('all');
    };
  }, []);

  const filterData = (type: string) => {
    if (type === 'all') {
      return cardData;
    }

    if (type === 'tech') {
      return cardData.filter((x: cardDataType) => x.type === 'tech');
    }

    if (type === 'retrospect') {
      return cardData.filter((x: cardDataType) => x.type === 'retrospect');
    }
  };

  return (
    <CardFrame>
      {filterData(filterState)?.length === 0 ? (
        <FadeIn>
          <NoContent>
            <Font size={18} textAlign="center">
              준비중 입니다.
            </Font>
          </NoContent>
        </FadeIn>
      ) : (
        filterData(filterState)?.map((data: cardDataType) => {
          return (
            <React.Fragment key={data.id}>
              <FadeIn>
                <div style={{ width: '100%' }}>
                  <Card data={data} />
                </div>
              </FadeIn>
            </React.Fragment>
          );
        })
      )}

      <div>
        {filterState === 'all' && <Toast value="전체" />}
        {filterState === 'tech' && <Toast value="기술 블로그" />}
        {filterState === 'retrospect' && <Toast value="회고 블로그" />}
      </div>
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

  @media screen and (max-width: 520px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const NoContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
