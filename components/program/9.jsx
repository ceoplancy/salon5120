import React from 'react';
import styled from 'styled-components';

const Comp9 = () => {
  return (
    <div>
      <FontSize fontSize={'1.5rem'} fontWeight={700} lineHeight={1.66} margin="3rem 0 0 0">
        1st
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
        {`아트시그널 첫 번째 자리는 여러 대학교에서 모인 영화와 힙합 동아리원들이 서로가 생각하는 ‘예술’과 신진 예술인들을 위해 필요한 것들을 공유하고, 자신의 작업물을 소개하며 이야기를 나누는 시간으로 꾸며졌습니다.
일시 : 6월 30일 금요일 오후 2시`}
      </PreTag>
    </div>
  );
};

export default Comp9;

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
`;
