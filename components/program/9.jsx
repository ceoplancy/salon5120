import React from 'react';
import styled from 'styled-components';

const Comp9 = () => {
  return (
    <div>
      <PreTag fontSize={'3.2rem'} fontWeight={700} lineHeight={1.4}>
        아트시그널 Art Signal
      </PreTag>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 3rem 0">
        아트시그널은 문학, 미술, 음악, 영화 등 장르를 가리지 않고 예술 관련 학과 학생들이나 동아리원들이 모여 자유로운 좌담회 형식으로 이야기를 나누는 라운드테이블 프로그램입니다. 청년 예술인들에게
        어떤 지원이 필요한지 이야기하고, 각자의 작업을 공유하는 시간을 가집니다.
      </PreTag>

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
