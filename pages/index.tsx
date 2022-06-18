import type { NextPage } from 'next';
import styled from 'styled-components';
import Footer from 'components/common/footer';
import Card from 'components/card';
import { cardData, cardDataType } from 'constants/card/index';

const Home: NextPage = () => {
  return (
    <>
      <CardFrame>
        {cardData &&
          cardData.map((data: cardDataType, idx: number) => {
            return <Card key={idx} data={data} />;
          })}
      </CardFrame>

      <Footer />
    </>
  );
};

export default Home;

const CardFrame = styled.section`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
