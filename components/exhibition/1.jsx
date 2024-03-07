import React from 'react';
import styled from 'styled-components';

const Comp1 = () => {
  return (
    <Container>
      <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.6}>
        {`문화살롱 5120 기획전`}
      </PreTag>

      <PreTag fontSize={'4.5rem'} fontWeight={700} lineHeight={1.5}>
        {`김지희 작가 개인전
<낯선 풍경들(Unknown Scenes)>
23.08.08-09.16`}
      </PreTag>

      <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.4} margin="10rem 0 6rem 0">
        {`상상의 풍경: 회화와 공간 사이`}
      </PreTag>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
        {`김지희 작가는 상상의 풍경을 그린다. 그는 그곳을 “물리적으로 있음직한 공간과 심리적 공간 사이 어딘가”의 공간이라고 부른다.
있음직하지만 모호한 그곳을 표현하고자 작가는 캔버스와 그 바깥인 실제의 공간을 넘나든다. 회화의 캔버스는 그림의 바탕이자 배경을 이룬다.
네모난 캔버스는 그 내부에 그려진 세계가 단일한 하나의 세계라는 전제이자 약속을 구성한다. 그러나 작가가 넘어서고자 하는 것은 캔버스가 하나의 세계를 이룬다는 바로 그 정언이다.초기작에서 비롯해 오랜 공백 이후 선보이는 근작의 공통된 특징이 화면의 제한을 넘어서 다층의 공간을 넘나드는 세계를 창조하는 것이다. 그의 화폭 속에서 세계는 분할되고 구성되는 한편,주어진 면과 구획을 넘나들며 옆에 걸린 또 다른 화폭으로, 나아가 벽면으로 확장된다.
벽화는 김지희 작업의 이러한 특징을 단적으로 보여준다. 여느 벽화가 벽면에 오롯이 그려지는 반면 그의 벽화는 캔버스 회화의 세계를 확장하고 차원을 더한다. 캔버스 한 구획에서시작된 면은 벽으로 확장되어 현실로 돌출되며 그렇게 돌출된 색면은 관객의 공간을 한 번 더 분할한다. 그 덕에 관객은 보이는 화면, 넘어선 공간에서의 회화, 내가 감상을 위해 걷고 있는 공간을 추상적인 하나의 세계로, 촉각적으로 경험한다.물리적 공간과 상상 공간, 캔버스와 그 너머의 실제 공간, 그 세계를 오가는 유희 속에서 당신의 걸음은 색이 되고 그 공간은 빛으로 물들어 당신의 삶을 채우길 바라본다.`}
      </PreTag>

      <div style={{ textAlign: 'right' }}>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="3.6rem 0 10rem 0">
          {`배혜정 문화살롱 5120 디렉터`}
        </PreTag>
      </div>

      <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.4}>
        {`연계프로그램: 아티스트토크`}
      </PreTag>

      <div style={{ marginTop: '6rem' }}>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`참여작가 | `}
          </PreTag>
          {`김지희`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`일시 | `}
          </PreTag>
          {`23. 9. 9 (토) 15:00`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`대상 | `}
          </PreTag>
          {`모든 관람객(온라인 신청 구글폼 링크)`}
        </PreTag>
      </div>

      <div style={{ marginBottom: '10rem' }}>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`전시 사진 | `}
          </PreTag>
          {`이동웅`}
        </PreTag>
      </div>

      {/* <IframeWrapper>
        <iframe
          width="1905"
          height="801"
          src="https://www.youtube.com/embed/JRF8_InIKlg?autoplay=1&mute=1"
          title="문화살롱 5120 | 김지희 《낯선 풍경들(Unknown Scenes)》 | 타임랩스 영상"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </IframeWrapper> */}
    </Container>
  );
};

export default Comp1;

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

const IframeWrapper = styled.div`
  position: relative;
  margin-top: 10rem;
  padding-top: 56%;
  width: 100%;
  height: 0;
  margin-bottom: 3rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
