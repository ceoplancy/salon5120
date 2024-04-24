import React from 'react';
import styled from 'styled-components';

const Comp34 = () => {
  return (
    <div>
      <FontSize fontSize={'3rem'} fontWeight={700} lineHeight={1.66}>
        작가노트, 쓰기
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="4.8rem 0 4.8rem 0">
        {`작업의 좋은 조력자, 작가노트 쓰기`}
      </PreTag>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="4.8rem 0 4.8rem 0">
        {`작가에게 가장 중요한 것은 작업이지만, 잘 쓴 작가노트는 활동하는 데에 좋은 조력자가 될 수 있습니다. 비평문 이전에 작품에 관한 1차 자료가 되는 것은 물론이고 포트폴리오, 각종 공모 지원, 전시와 언론 매체 인용 등 다양한 곳에 사용될 수도 있습니다. 또한 비평문과는 별도로 작품과 관련된 내밀하고 개인적인 면을 드러내며 더 풍부한 작품 해석의 길을 열어 줄 수 있습니다.`}
      </PreTag>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="4.8rem 0 4.8rem 0">
        {`많은 작가가 작가노트 쓰기에 어려움을 겪습니다. 작가노트의 용도가 다양한 데에서 오는 혼란, 비평문과의 차이를 구분하기 어려운 경우, 스스로의 경험을 글로 드러내는 것이 익숙하지 않은 경우 등 다양합니다. 본 워크숍에서는 작가노트 쓰기의 기초를 잡고 스스로 글을 써본 뒤 간단한 합평과 퇴고를 거칠 예정입니다. 스스로 자신의 작업에 가까이 다가가는 글, 타인 또한 나의 작업에 가까이 닿을 수 있도록 이끄는 작가노트를 완성하는 것을 목표로 합니다. (각 회차마다 준비해 올 과제가 있습니다.)`}
      </PreTag>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`일시 | `}
          </PreTag>
          {`2024년 5월 9일, 16일 목요일, 오후 7-9시 (2회차)`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`강연자 | `}
          </PreTag>
          {`김지연(미술비평가)`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`참여인원 | `}
          </PreTag>
          {`8명`}
        </PreTag>
      </div>

      <div>
        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} inlineBlock="inline-block">
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} inlineBlock="inline-block">
            {`참여신청 | `}
          </PreTag>
          <a style={{ textDecoration: 'underline' }} href="https://bitly.ws/3inVx">
            https://bitly.ws/3inVx
          </a>
        </PreTag>
      </div>
    </div>
  );
};

export default Comp34;

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
