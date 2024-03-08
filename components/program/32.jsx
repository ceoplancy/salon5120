import React from 'react';
import styled from 'styled-components';

const Comp32 = () => {
  return (
    <div>
      <FontSize fontSize={'3rem'} fontWeight={700} lineHeight={1.66}>
        해금, 노마드
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="4.8rem 0 4.8rem 0">
        {`문화살롱 5120의 공연 프로그램 스테이지 5120의 첫 번째 공연, 〈해금, 노마드〉는 해금 연주가 ’천지윤‘과 퍼포먼스와 전자 음악이 더해진 국악을 프로듀싱해 온 TARL(탈)의 프로듀서 ‘락가’가 함께 선보이는 연주와 낭독이 어우러진 콘서트 입니다.

〈해금, 노마드〉는 천지윤의 에세이 『단정한 자유』로부터 비롯되었습니다. 『단정한 자유』에서 천지윤은 세계 여러 도시의 공연 현장에서 만난 다양한 인연과 자연의 풍광, 사랑과 음식, 축제의 순간들을 담아냈습니다. 이동하고 유랑하며 끊임없이 새로운 것을 찾아가는 태생적 속성을 지닌 해금을 연주하는 천지윤은 길 위에서 다양한 삶의 이야기를 흡수하며 사유를 연마하고 음악적 경험을 확장해왔습니다.

이번 공연 〈해금, 노마드〉는 해금으로 세계를 담아온 천지윤과 자유로운 국악을 펼쳐내는 TARL(탈)의 프로듀서 ’락가‘의 전자 음악과의 만남으로 전통으로부터 탈주하지만 그 어딘가에서 전통의 뿌리로 회귀하는 음악적 순례의 길을 그리고자 합니다. 두 아티스트의 교감이 그려낼 새로운 음악 여정에 동행하여 다채로운 음악적 영감과 감동을 함께 느껴보는 건 어떨까요?`}
      </PreTag>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`일시 | `}
          </PreTag>
          {`2024년 2월 22일 목요일, 오후 7시 30분`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`강연자 | `}
          </PreTag>
          {`천지윤(해금 연주가), 락가(TARL(탈) 프로듀서)`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`참여신청 | `}
          </PreTag>
          <a style={{ textDecoration: 'underline' }} href="https://bitly.ws/3d5yc">
            https://bitly.ws/3d5yc
          </a>
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`사진 | `}
          </PreTag>
          {`이동웅`}
        </PreTag>
      </div>
    </div>
  );
};

export default Comp32;

const PreTag = styled.pre`
  display: ${(props) => (props.inlineBlock ? props.inlineBlock : '')};
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
`;

const DateFrame = styled.div`
  display: flex;
  gap: 2rem;
`;

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
