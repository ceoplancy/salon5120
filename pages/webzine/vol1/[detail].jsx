import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import articleData from '../../../constants/article-data';
import { useRouter } from 'next/router';
import Comp20 from '../../../components/webzine/20';
import Comp21 from '../../../components/webzine/21';
import Comp22 from '../../../components/webzine/22';
import Comp23 from '../../../components/webzine/23';
import Comp24 from '../../../components/webzine/24';
import Comp25 from '../../../components/webzine/25';
import Comp26 from '../../../components/webzine/26';
import Comp27 from '../../../components/webzine/27';

const WebzineDetail = ({ query }) => {
  const router = useRouter();
  const [makeData, setMakeData] = useState({});

  const makeAricleData = (articleData, id) => {
    return [...articleData].filter((x) => x.id === id);
  };

  useEffect(() => {
    setMakeData(makeAricleData(articleData, Number(query.detail)));
  }, []);

  return (
    <>
      {makeData.length === 0 ? (
        <NoArticle>존재하지 않는 게시물입니다.</NoArticle>
      ) : (
        <Container>
          <TitleContainer>
            <FontSize fontSize="3rem" fontWeight={700} margin="0 0 4rem 0">
              웹진
            </FontSize>

            <TitleWrapper>
              <FontSize fontSize="13rem" fontWeight={700} translateY="-7px">
                놀
              </FontSize>

              <PreTag fontSize="2.1rem" fontWeight={700} lineHeight={1.5}>
                {`Vol. 1
2023. 겨울`}
              </PreTag>
            </TitleWrapper>
          </TitleContainer>

          <div style={{ width: '100%' }}>
            {Number(router.query.detail) === 20 && <Comp20 />}
            {Number(router.query.detail) === 21 && <Comp21 />}
            {Number(router.query.detail) === 22 && <Comp22 />}
            {Number(router.query.detail) === 23 && <Comp23 />}
            {Number(router.query.detail) === 24 && <Comp24 />}
            {Number(router.query.detail) === 25 && <Comp25 />}
            {Number(router.query.detail) === 26 && <Comp26 />}
            {Number(router.query.detail) === 27 && <Comp27 />}
          </div>
        </Container>
      )}
    </>
  );
};

export default WebzineDetail;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
  gap: 6rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  max-width: 42rem;
  width: 100%;

  @media screen and (max-width: 480px) {
    max-width: 48rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 6rem;
`;

const NoArticle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  margin-top: 10rem;
`;

const PreTag = styled.pre`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  transform: translateY(${(props) => (props.translateY ? props.translateY : '')});
`;

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
}
