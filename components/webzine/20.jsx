import React from 'react';
import styled from 'styled-components';

const Comp20 = () => {
  return (
    <div>
      <FontSize fontSize={'2.3rem'} fontWeight={700} color="#8500FF">
        발간의 글
      </FontSize>

      <FontSize fontSize={'4.5rem'} fontWeight={700} margin="3rem 0 0 0">
        발간의 글
      </FontSize>

      <FontSize fontSize={'1.5rem'} fontWeight={700} margin="6rem 0 0 0">
        웹진 놀 편집부
      </FontSize>

      <FontSize fontSize={'2.3rem'} fontWeight={700} margin="10rem 0 0 0">
        웹진 ‘놀’ 발간에 부쳐
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="6rem 0 6rem 0">
        {`웹진 ‘놀’은 지난 2023년 6월 5일 개관한 문화살롱 5120이 펴내는 예술종합잡지로 반년간 발행됩니다. 이번 창간호에는 원고 공모를 함께 진행하였는데요. 이처럼 매년 상반기에는 기획 원고 중심의 문화예술종합지로, 하반기에는 원고 공모가 이뤄질 예정입니다.

문화살롱 5120은 노원구가 청년 예술인을 발굴, 지원, 육성하며 지역 예술인 네트워크의 중심으로 자리매김하겠다는 목표 아래 개관하였습니다. 그러한 만큼 ‘놀’은 시작하는 청년 예술가와 함께하고자 합니다.

시작하는 예술인에게 필요한 것은 무엇일까요? 창작 환경 조성, 창작 예술품 공표 기회 등 여러 가지를 꼽을 수 있습니다. 그중에서도 ‘놀’이 목표로 하는 것은 신진 작가에게 지면을 제공하는 것과 문화계의 담론 생성에 이바지하는 것입니다. 그러한 의미에서 ‘놀’ 창간호는 공모 세션과 기획 세션으로 나누어 준비했습니다. 공모는 장르를 구분하지 않고 지원을 받았습니다. 물론 기존의 공모에는 소설, 시와 같은 문학 장르별 구분이라던가 픽션, 논픽션과 같은 보다 상위의 구분 등이 있기 마련이지요. 그러나 ‘놀’은 장르 구분에 연연하지 않고, 글쓰기에서의 잠재 영역을 위해 여지를 남겨두고자 했습니다. 투고해 주신 시, 소설, 예술 비평, 에세이 등 다양한 장르의 원고는 저희 ‘놀’의 가능성을 가늠해 볼 수 있는 계기가 되었습니다. 아쉽게 공모에 당선되지 않은 투고자분들에게도 아낌없는 응원을 전합니다.

기획 세션의 필진으로는 철학자 허경, 미술평론가 이연숙(리타), 문학가(? 확인) 윤혜은이 참여했습니다. 디렉터와 두 프로그램 매니저, 코디네이터로 구성된 웹진 기획팀은 담론의 다양성을 염두에 두고 구성했습니다. 이러한 필진 구성은 문화예술 현장을 또 다른 관점과 사유 속에서 다채로운 논의를 담아 보고자 하는 의도에서 시작되었는데요. 그에 따라 글의 주제에 있어서도 특별한 제한 또는 제안 없이 열린 주제로 써 주시기를 부탁드렸고, 글의 내용에 있어서도 필자의 글에 대한 최소한의 교정, 교열만을 거쳐 실었습니다. 따라서 ‘놀’의 창간호에 실린 원고는 각 필자의 주제와 논조를 편집진의 개입 없이 그대로 실은 것임을 밝힙니다.

예술은 언제나 인류와 함께였습니다. 힘든 시기에도 예술가들은 다채로운 형상과 내용으로 시대를 노래하고 그려냈지요. ‘놀’은, 그리고 문화살롱 5120은 이러한 예술의 힘을 믿습니다. 저희의 행보를 편견 없이 그러나 매서운 눈으로 지켜보아 주시고 참견해주시고 그럼에도 애정을 보내주시기를 부탁드립니다.`}
      </PreTag>
    </div>
  );
};

export default Comp20;

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
  color: ${(props) => (props.color ? props.color : '#000')};
`;
