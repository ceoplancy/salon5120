import React from 'react';
import styled from 'styled-components';

const Webzine = () => {
  return (
    <>
      <Frame>
        <TitleContainer>
          <FontSize fontSize={'4.5rem'} fontWeight={700} lineHeight={1.33}>
            WEBZINE
          </FontSize>

          <FontSize fontSize={'4.5rem'} fontWeight={700} margin="0 0 3rem 0" lineHeight={1.33}>
            {`<놀>`}
          </FontSize>
        </TitleContainer>

        <ContentContainer>
          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
            {`2023년 12월, 청년 예술인들을 위한 네트워크 공간 문화살롱 5120에서 종합예술웹진 『놀』을 창간합니다. ‘놀’은 ‘놀다’의 어간 ‘놀’을 뜻하기도 하고, ‘노을’의 준말을 뜻하기도 합니다. 또한 문화살롱 5120을 품고 있는 ‘노원구’라는 행정구역명의 어감을 변용한 것이기도 합니다. 이처럼 『놀』은 정해진 틀 없이 누구나 읽고 쓸 수 있고, 무엇이든 이야기할 수 있는 자유로운 종합예술웹진을 표방합니다.

예술계에서 가장 활발하게 이야기되고 있는 이슈부터 고전 담론까지 모든 것을 포괄한 예술비평을 지향합니다. 청년 예술가들이 일상에서 천천히, 그리고 분명하게 감각하고 깨달은 것들을 자신만의문장으로 표현한 시, 소설, 에세이, 아동문학, 극작품 등 모든 문학작품을 재발견하는 여정을 시작합니다.

예술을 향유하고 사랑하는 모든 예술가와 작품이 자유롭듯 다양한 색깔로 채워질 『놀』을 기대해 주시기 바랍니다.`}
          </PreTag>
        </ContentContainer>
      </Frame>
    </>
  );
};

export default Webzine;

const Frame = styled.div`
  width: 100%;
  margin-top: 9rem;
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 84rem;
`;

const TitleContainer = styled.div`
  width: 47rem;
`;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;
