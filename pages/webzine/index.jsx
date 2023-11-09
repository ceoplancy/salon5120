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
          <PreTag fontSize={'2rem'} fontWeight={400} lineHeight={1.66}>
            {`문화살롱 5120은 시작하는 예술가와 문화예술 향유를 열망하는 시민들을 위해 웹진 ‘놀’을 준비 중에 있습니다.
웹진 ‘놀’은 신진문학인의 등용문이 될 수 있는 장르별 원고 공모와 예술 비평, 전시 및 공연 리뷰, 이슈 포커스 등 여러가지 주제로 곧 여러분을 찾아 뵙겠습니다.`}
          </PreTag>

          <PreTag fontSize={'2rem'} fontWeight={400} margin="3rem 0 0 0" lineHeight={1.66}>
            {`원고 공모 : 9월 예정
웹진 오픈 : 11월 예정`}
          </PreTag>
        </ContentContainer>
      </Frame>
    </>
  );
};

export default Webzine;

const Frame = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  max-width: 45rem;
  width: 100%;
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
