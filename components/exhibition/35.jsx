import React from 'react';
import styled from 'styled-components';

const Comp35 = () => {
  return (
    <Container>
      <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.4}>
        {`문화살롱 5120 2023 전시공모 선정작가전`}
      </PreTag>

      <PreTag fontSize={'4.5rem'} fontWeight={700} lineHeight={1.4}>
        {`《We can take a shower together, If you want.》
24.05.24-24.07.06`}
      </PreTag>

      <div style={{ marginTop: '10rem' }}>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`참여작가 | `}
          </PreTag>
          {`공재`}
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
          {`2024년 5월 24일(금) 오후 6시 30분`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`포스터 디자인 | `}
          </PreTag>
          {`원정인`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`문의 | `}
          </PreTag>
          {`02-948-1217 / culturesalon5120@gmail.com`}
        </PreTag>
      </div>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="6rem 0 0 0">
        {`  문화살롱 5120의 2023 전시공모 선정작가 중 세 번째 전시로 공재 작가의 전시 《We can take a shower together, If you want.》이 5월 24일 금요일부터 개최됩니다.

  공재는 개인의 경험과 기억을 바탕으로 흙과 나무의 물성을 탐구하면서 조각 및 설치로 작업합니다. 이를 통해 작가는 집단적 신화와 전설이 어떻게 변형되고 왜곡되는지 탐구하는데요. 그의 작업은 집단이 부여한 권위와 힘이 어떻게 개인의 평범한 기억을 신화적인 기억으로 변모시키는지 그 과정을 보여줍니다.

  작가는 자신의 경험을 재구성하여 종교적 신화, 영웅담, 그리고 현대 사회의 이야기들이 본질적으로 크게 다르지 않다는 것을 상기합니다. 또한, 사회의 다양한 영역에서 나타나는 집단적 광기와 맹신을 모티브로 삼고 이를 통해 사회 구조와 집단 심리 속에서 개인이 어떻게 행동하고 인식하는지 작업을 통해 표현합니다.

  문화살롱 5120의 전시공모 <공유시선>을 통해 선정되어 작년 프리뷰 전시에서 선보였던 공재 작가의 심화된 조각적 탐구와 새로운 작품들에 많은 기대를 부탁드립니다.
`}
      </PreTag>

      <div style={{ textAlign: 'right' }}>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="3.6rem 0 10rem 0">
          {`포스터 디자인 : 원정인`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp35;

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
