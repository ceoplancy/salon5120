import React from 'react';
import styled from 'styled-components';

const Comp30 = () => {
  return (
    <Container>
      <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.4}>
        {`문화살롱 5120 2023 전시공모 선정작가전`}
      </PreTag>

      <PreTag fontSize={'4.5rem'} fontWeight={700} lineHeight={1.4}>
        {`<펜드 패턴 Penned Pattern>
24.02.08-24.03.16`}
      </PreTag>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.6} margin="2rem 0 6rem 0">
        {`문화살롱 5120의 2023 전시공모 선정작가 4팀 중 첫 번째 전시로 임하은 조현민 작가의 2인전 <펜드 패턴 Penned Pattern>이 2월 8일 목요일부터 개최됩니다.

<펜드 패턴>은 회화의 도구이기도 한 ‘pen’의 동사형에 두 작가의 조형 세계에 공통되는 요소인 패턴을 결합하여 만든 제목입니다.

임하은 작가는 이번 전시에서 트랙터의 자국과 같이 자연 풍경에 남은 인간 활동의 흔적을 담은 풍경들을 일종의 패턴으로 간주하고 캔버스 뿐만 아니라 관광지의 간판이나 홍보물의 형식으로 전유하여 선보입니다. 사물의 그림자에 천착해 온 조현민 작가는 목도리, 스커트의 주름 등 일상 사물의 패턴이나, 대상을 인위적으로 배치하여 만들어지는 무늬 등을 2차원 캔버스의 평면 위에 고유한 조형의 요소로 탐구해 펼쳐냅니다.

공모를 통해 선정되어 프리뷰 전시에서 선보였던 이들 작가의 심화된 회화적 탐구와 새로운 작품들에 많은 기대를 부탁드립니다.`}
      </PreTag>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`참여작가 | `}
          </PreTag>
          {`임하은 조현민`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`관람시간 | `}
          </PreTag>
          {`화-토, 오전 10시-오후 7시(일요일, 월요일 휴관 / 공휴일 휴관)`}
        </PreTag>
      </div>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
        {`※ 휠체어 접근이 가능합니다(미리 연락 부탁드립니다).`}
      </PreTag>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`오프닝 | `}
          </PreTag>
          {`2024년 2월 8일(목) 오후 5시`}
        </PreTag>
      </div>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="0 0 6rem 0">
        {`※ 전시 관람은 오전 10시부터 가능합니다.`}
      </PreTag>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`문의 | `}
          </PreTag>
          {`02-948-1217 / culturesalon5120@gmail.com`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp30;

const PreTag = styled.pre`
  display: ${(props) => (props.inlineBlock ? props.inlineBlock : '')};
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
