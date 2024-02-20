import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import webzineHomeArticleData from '../../constants/webzine-home-article-data';

const Webzine = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      alert('준비 중입니다.');
      router.push('/webzine/vol1');
    }
  }, []);

  return (
    <Frame>
      <TitleFrame>
        <TitleContainer>
          <FontSize fontSize="3rem">웹진</FontSize>

          <TitleWrapper>
            <FontSize fontSize="13rem">놀</FontSize>
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

      <Line margin="4.5rem 0 6.7rem 0" />

      <ContentFrame>
        {webzineHomeArticleData.map((x) => {
          return (
            <Contaienr key={x.id} onClick={() => router.push(`/webzine/${x.id}`)}>
              <ContentWrapper>
                <FontSize fontSize="2.1rem" fontWeight={700}>
                  {x.id}
                </FontSize>

                <Line margin="1.7rem 0 3.5rem 0" />

                <ContentTitleWrapper>
                  <FontSize fontSize="3rem" fontWeight={700}>
                    {x.title}
                  </FontSize>

                  <FontSize fontSize="2.1rem" fontWeight={700} lineHeight={1.5}>
                    {x.subTitle}
                  </FontSize>
                </ContentTitleWrapper>
              </ContentWrapper>
            </Contaienr>
          );
        })}
      </ContentFrame>
    </Frame>
  );
};

export default Webzine;

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

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  color: ${(props) => (props.color ? props.color : '#000')};
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
  margin: ${(props) => (props.margin ? props.margin : '')};
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

const Contaienr = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 43.5rem;
  margin-top: 2.3rem;
  padding: 11.5rem 3rem 3rem 3rem;

  background-image: url('/webzinearch.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

const ContentTitleWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
