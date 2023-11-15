import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import articleData from '../../constants/article-data';
import Comp13 from '../../components/program/13';
import Comp9 from '../../components/program/9';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ProgramDetail = ({ query }) => {
  const router = useRouter();
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
            <PreTag fontSize={'4.5rem'} fontWeight={700} lineHeight={1.33} margin="0 0 4rem 0">
              {makeData[0]?.content1}
            </PreTag>

            <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
              {makeData[0]?.content2}
            </PreTag>

            {makeData[0]?.content1 === '마티네 클라스 Matinée Class' && (
              <ImageWrapper>
                <Image
                  src={`/image/matineeclass.jpg`}
                  alt={`matineeclass`}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                />
              </ImageWrapper>
            )}
          </TitleContainer>

          <ContentContainer>
            {/* 1 */}
            {makeData[0]?.content3 && (
              <PreTag fontSize={'2.1rem'} fontWeight={700}>
                {makeData[0]?.content3}
              </PreTag>
            )}

            {makeData[0]?.content4 && (
              <PreTag fontSize={'3.2rem'} fontWeight={700} margin="1rem 0 3rem 0" lineHeight={1.4}>
                {makeData[0]?.content4}
              </PreTag>
            )}

            {makeData[0]?.content5 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="0 0 3rem 0">
                {makeData[0]?.content5}
              </PreTag>
            )}

            {makeData[0]?.content6 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
                {makeData[0]?.content6}
              </PreTag>
            )}

            {/* 2 */}
            {makeData[0]?.content7 && (
              <PreTag fontSize={'2.1rem'} fontWeight={700} margin="6rem 0 0 0">
                {makeData[0]?.content7}
              </PreTag>
            )}

            {makeData[0]?.content8 && (
              <PreTag fontSize={'3.2rem'} fontWeight={700} margin="1rem 0 0 0" lineHeight={1.4}>
                {makeData[0]?.content8}
              </PreTag>
            )}

            {makeData[0]?.content9 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 3rem 0">
                {makeData[0]?.content9}
              </PreTag>
            )}

            {makeData[0]?.content10 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
                {makeData[0]?.content10}
              </PreTag>
            )}

            {/* 3 */}
            {makeData[0]?.content11 && (
              <PreTag fontSize={'2.1rem'} fontWeight={700} margin="6rem 0 0 0">
                {makeData[0]?.content11}
              </PreTag>
            )}

            {makeData[0]?.content12 && (
              <PreTag fontSize={'3.2rem'} fontWeight={700} margin="1rem 0 0 0" lineHeight={1.4}>
                {makeData[0]?.content12}
              </PreTag>
            )}

            {makeData[0]?.content13 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 0 0">
                {makeData[0]?.content13}
              </PreTag>
            )}

            {makeData[0]?.content14 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 0 0">
                {makeData[0]?.content14}
              </PreTag>
            )}

            {/* 별도 */}
            {Number(router.query.detail) === 13 && <Comp13 />}
            {Number(router.query.detail) === 9 && <Comp9 />}
          </ContentContainer>
        </Container>
      )}
    </>
  );
};

export default ProgramDetail;

const Container = styled.div`
  margin-top: 6rem;
  padding-bottom: 6rem;
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const TitleContainer = styled.div`
  max-width: 42rem;
  width: 100%;
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
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
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

const ImageWrapper = styled.div`
  margin-top: 12rem;
  width: 42rem;
  height: 31.5rem;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
