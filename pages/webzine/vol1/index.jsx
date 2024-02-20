import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import articleData from '../../../constants/article-data';
import sortByDateAscending from '../../../functions/sortByDateAscending';
import { useRouter } from 'next/router';

const WebzineVol1 = () => {
  const router = useRouter();

  const makeAricleData = (articleData, articleType) => {
    if (articleType === 'type4') {
      return sortByDateAscending(
        articleData.filter((x) => x.type === 'type4'),
        'date'
      );
    }

    if (articleType === 'type5') {
      return sortByDateAscending(
        articleData.filter((x) => x.type === 'type5'),
        'date'
      );
    }

    if (articleType === 'type6') {
      return sortByDateAscending(
        articleData.filter((x) => x.type === 'type6'),
        'date'
      );
    }
  };
  return (
    <Frame>
      <TitleFrame>
        <TitleContainer>
          <FontSize fontSize="3rem">웹진</FontSize>

          <TitleWrapper>
            <FontSize fontSize="13rem">놀</FontSize>

            <SubTitleWrapper>
              <FontSize fontSize="2.1rem">Vol.1</FontSize>

              <FontSize fontSize="2.1rem">2023. 겨울</FontSize>

              <FontSize
                color="#8500FF"
                fontSize="2.1rem"
                onClick={() => {
                  // router.push('/webzine');
                  alert('준비 중입니다.');
                }}
                cursor="pointer"
              >
                다른 호 보기
              </FontSize>
            </SubTitleWrapper>
          </TitleWrapper>
        </TitleContainer>

        <ImageWrapper>
          <Image
            src={`/webzinemenu.svg`}
            alt={`webzinemenu`}
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageWrapper>
      </TitleFrame>

      <Line />

      <ContentFrame>
        {/* type4 */}
        <div>
          <FontSize color="#8500FF" fontSize="3rem">
            발간의 글
          </FontSize>

          {makeAricleData(articleData, 'type4')?.map((x, index) => {
            return (
              <ContentWrapper key={x.id} onClick={() => router.push(`/webzine/${router.pathname.split('/')[2]}/${x.id}`)}>
                <Type4Contaienr>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <FontSize fontSize="3rem">{x.title1}</FontSize>

                    <FontSize fontSize="1.5rem">| 웹진 놀 편집부</FontSize>
                  </div>
                </Type4Contaienr>
              </ContentWrapper>
            );
          })}
        </div>

        <div>
          {/* type5 */}
          <FontSize color="#FF504F" fontSize="3rem">
            문학 공모
          </FontSize>

          <ContentWrapper>
            <Type5Contaienr>
              {makeAricleData(articleData, 'type5').map((x, index) => {
                return (
                  <div key={x.id} onClick={() => router.push(`/webzine/${router.pathname.split('/')[2]}/${x.id}`)}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <FontSize fontSize="1.5rem">{x.title2}</FontSize>

                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginTop: '1.5rem' }}>
                        <PreTag fontSize="3rem" lineHeight={1.4}>
                          {x.title1}
                        </PreTag>

                        <PreTag fontSize="1.5rem" lineHeight={1.8}>
                          {x.title3}
                        </PreTag>
                      </div>
                    </div>

                    {index !== makeAricleData(articleData, 'type5').length - 1 && <div style={{ border: '0.5px solid #FF504F', width: '100%', margin: '3.5rem 0 3.5rem 0' }} />}
                  </div>
                );
              })}
            </Type5Contaienr>
          </ContentWrapper>
        </div>

        <div>
          {/* type6 */}
          <FontSize color="#40E9CB" fontSize="3rem">
            기획 칼럼
          </FontSize>

          {makeAricleData(articleData, 'type6').map((x, index) => {
            return (
              <ContentWrapper key={x.id} onClick={() => router.push(`/webzine/${router.pathname.split('/')[2]}/${x.id}`)}>
                <Type6Contaienr>
                  <FontSize fontSize="3rem" lineHeight={1.3}>
                    {x.title1}
                  </FontSize>

                  <FontSize fontSize="1.5rem" margin="2rem 0 0 0">
                    {x.title2}
                  </FontSize>
                </Type6Contaienr>
              </ContentWrapper>
            );
          })}
        </div>
      </ContentFrame>
    </Frame>
  );
};

export default WebzineVol1;

const Frame = styled.div``;

const TitleFrame = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5em;
  margin-top: 4.2rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  color: ${(props) => (props.color ? props.color : '#000')};
  cursor: ${(props) => (props.cursor ? props.cursor : '')};
`;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
  float: ${(props) => (props.float ? props.float : '')};
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : '')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : '')};
`;

const ImageWrapper = styled.div`
  width: 7.7rem;
  height: 17rem;
  position: relative;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Line = styled.div`
  border: 0.5px solid #000;
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 6.7rem;
`;

const ContentFrame = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-bottom: 10rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Type4Contaienr = styled.div`
  width: 100%;
  height: 100%;
  min-height: 28rem;
  margin-top: 2.3rem;
  padding: 3rem;

  background-image: url('/webzinetype1.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

const Type5Contaienr = styled.div`
  width: 100%;
  height: 100%;
  min-height: 43rem;
  margin-top: 2.3rem;
  padding: 3.5rem;
  border: 1px solid #ff504f;
`;

const Type6Contaienr = styled.div`
  width: 100%;
  height: 100%;
  min-height: 38.5rem;
  margin-top: 2.3rem;
  padding: 11.5rem 3rem 3rem 3rem;

  background-image: url('/webzinetype3.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;
