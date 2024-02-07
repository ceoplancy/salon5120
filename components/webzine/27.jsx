import React from 'react';
import styled from 'styled-components';

const Comp27 = () => {
  return (
    <div>
      <FontSize fontSize={'2.3rem'} fontWeight={700} color="#FF504F">
        문학 공모
      </FontSize>

      <FontSize fontSize={'1.5rem'} fontWeight={700} margin="2rem 0 0 0">
        심사평
      </FontSize>

      <FontSize fontSize={'4.5rem'} fontWeight={700} margin="3rem 0 0 0">
        문화살롱 5120 제1회 웹진 ‘놀’ 문학공모 심사평
      </FontSize>

      <FontSize fontSize={'1.5rem'} fontWeight={700} margin="6rem 0 0 0">
        심사위원 일동
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} letterSpacing="3%" lineHeight="175%" margin="6rem 0 6rem 0">
        {`    문화살롱 5120이 펴내는 웹진 ‘놀’은 청년 예술인에게 창작의 기회를 펼칠 수 있는 지면을 제공하고자 지난 9월 13일부터 10월 22일까지 창간호를 위한 문학 작품을 공모하였습니다. 총 41명이 응모했으며, 108편(시 64편, 단편 소설 13편, 에세이 14편, 시나리오 6편, 미술비평 2편, 기타 8편)의 원고가 접수되었고, 이 중 문화살롱 5120을 위탁 운영하고 있는 단국대학교 부설 한국문화기술연구소 내부의 예비 심사를 거쳐 본선에 진출한 작품들(시 24편, 단편 소설 2편, 에세이 4편, 문학비평 1편)을 신중히 검토하였습니다. 본선 심사에는 한국문화기술연구소 소장 박덕규(소설가, 시인), 노원구 시인 조항록, 한국문화기술연구소 연구 교수 이은주(문학평론가)와 배혜정(미술평론가, 문화살롱 5120 디렉터)가 참여하였습니다. 문학성과 완성도 그리고 문장력을 고려한 심사를 거쳐 단편 소설 1편과 시 2편을 선정했습니다. 심사평은 다음과 같습니다.

    소설은 스토리를 기반으로 한다는 장르라는 걸 모르는 사람은 없다. 당연히 스토리가 제대로 작용하지 않은 소설은 문제다. 그런데 그렇다 하더라도 소설이 스토리를 들려주는 데 급급해서는 곤란하다. 스토리를 품고 하나의 담론적 상황을 만드는 것! 이 점에 대해 고민하기를 바란다. 이번 응모작 중에서는 「너는 겨울잠을 잔다」가 그나마 이런 고민을 거친 결과로 보인다.

    신인의 시에서 흠결을 들추기보다는 미덕에 주목하려고 했다. 앞으로도 오랫동안 시를 쓸 테니까. 최종심에 올라온 8명의 24편 가운데 임혜리의 시 「표류」, 「다중우주의 당신」을 당선작으로 뽑았다. 임혜리의 작품들에는 삶의 비애가 깃들어 있다. 누구나 단독자로 살아낼 수밖에 없는 인생이 처연히 나뒹군다. 그래서 그의 생각과 마음을 읽는 일이 아프지만 그것이 시인에게는 어쩌지 못하는 숙명이겠지. 그저 “경유가 목적인 삶”이라 자책하는 사람들에게, 당선자가 시인으로 살아가면서 작은 위로를 건네면 좋겠다. 

    웹진 ‘놀’의 다음 호에 더 많은 작품들이 응모되길 바라며 수상자들에게 축하의 인사를 전합니다.`}
      </PreTag>
    </div>
  );
};

export default Comp27;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
  float: ${(props) => (props.float ? props.float : '')};
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : '')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : '')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  color: ${(props) => (props.color ? props.color : '#000')};
`;
