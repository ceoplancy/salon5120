import React from 'react';
import styled from 'styled-components';

const Comp2 = () => {
  return (
    <Container>
      <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.6}>
        {`문화살롱 5120 개관기념 특별전`}
      </PreTag>

      <PreTag fontSize={'4.5rem'} fontWeight={700} lineHeight={1.5}>
        {`<전영진 : OPENING NEW DOOR>
23.06.07-06.30`}
      </PreTag>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="10rem 0 0 0">
        {`자연을 소재로 그림을 그리는 전영진 작가는 자연이 시대, 사회, 역사적 맥락에서 가장 자유로운 소재라고 생각하며 회화의 본질인 2차원의 평면성과 물성을 드러내고자 이미지 안에 서사를 제거하는 작업을 한다.
회화의 정체성을 드러내고자 작가는 물감을 최대한 얇게 펴바른다. 적게는 3번에서, 많게는 20번까지 반복하여 채색하며 붓자국없이 단일하고 명료한 컬러가 만들어진다. 오랜 시간에 걸쳐 색으로 채워진 도형과 패턴의 화면은 원래의 캔버스처럼 평평함을 그대로 지켜낸다. 간혹, 작품의 재미를 주기 위해 완전히 새로운, 동시대 회화에서만 가능한 미디엄을 일부 이미지 위에 입힌다.
이는 작품 표면의 질감을 우연한 결과로 얻는 것이 아니라, 의도적으로 구현해 낸 회화 표현의 물성에 대해 다시 생각하도록 만드는 일종의 장치이다.`}
      </PreTag>

      <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.4} margin="6rem 0 6rem 0">
        {`연계프로그램: 아티스트토크`}
      </PreTag>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`참여작가 | `}
          </PreTag>
          {`전영진 @jun.youngjin`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`모더레이터 | `}
          </PreTag>
          {`홍해준(문화살롱 5120 프로그램 매니저)`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`일시 | `}
          </PreTag>
          {`2023. 6. 17.(토) 16:00`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`대상 | `}
          </PreTag>
          {`모든 관람객(온라인 신청)`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`전시 사진 | `}
          </PreTag>
          {`이동웅`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp2;

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
