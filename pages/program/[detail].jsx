import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import articleData from '../../constants/article-data';

const ProgramDetail = ({ query }) => {
  const [makeData, setMakeData] = useState({});

  const makeAricleData = (articleData, id) => {
    return [...articleData].filter((x) => x.id === id);
  };

  useEffect(() => {
    const confirmArticle = makeAricleData(articleData, Number(query.detail));
    if (confirmArticle[0]?.type !== 'type2') {
      setMakeData([]);
      return;
    }

    setMakeData(makeAricleData(articleData, Number(query.detail)));
  }, []);

  return (
    <>
      {makeData.length === 0 ? (
        <NoArticle>존재하지 않는 게시물입니다.</NoArticle>
      ) : (
        <Container>
          <TitleContainer>
            <FontSize fontSize={'4.5rem'} fontWeight={700} margin="0 0 3rem 0">
              {makeData[0]?.content1}
            </FontSize>

            <FontSize fontSize={'1.5rem'} fontWeight={400}>
              {makeData[0]?.content2}
            </FontSize>
          </TitleContainer>

          <ContentContainer>
            {/* 1 */}
            <PreTag fontSize={'2.1rem'} fontWeight={700}>
              {makeData[0]?.content3}
            </PreTag>

            <PreTag fontSize={'3rem'} fontWeight={700} margin="1rem 0 0 0">
              {makeData[0]?.content4}
            </PreTag>

            <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.5} margin="3rem 0 3rem 0">
              {makeData[0]?.content5}
            </PreTag>

            <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.5}>
              {makeData[0]?.content6}
            </PreTag>

            {/* 2 */}
            <PreTag fontSize={'2.1rem'} fontWeight={700} margin="6rem 0 0 0">
              {makeData[0]?.content7}
            </PreTag>

            <PreTag fontSize={'3rem'} fontWeight={700} margin="1rem 0 0 0">
              {makeData[0]?.content8}
            </PreTag>

            <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.5} margin="3rem 0 3rem 0">
              {makeData[0]?.content9}
            </PreTag>

            <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.5}>
              {makeData[0]?.content10}
            </PreTag>

            {/* 3 */}
            <PreTag fontSize={'2.1rem'} fontWeight={700} margin="6rem 0 0 0">
              {makeData[0]?.content11}
            </PreTag>

            <PreTag fontSize={'3rem'} fontWeight={700} margin="1rem 0 0 0">
              {makeData[0]?.content12}
            </PreTag>

            {makeData[0]?.content13 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.5} margin="3rem 0 0 0">
                {makeData[0]?.content13}
              </PreTag>
            )}

            <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.5} margin="3rem 0 0 0">
              {makeData[0]?.content14}
            </PreTag>
          </ContentContainer>
        </Container>
      )}
    </>
  );
};

export default ProgramDetail;

const Container = styled.div`
  margin-top: 9rem;
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0rem;
  }
`;

const TitleContainer = styled.div`
  width: 47rem;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const NoArticle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  margin-top: 10rem;
`;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
}
