import React from 'react';
import styled from 'styled-components';

const Comp21 = () => {
  return (
    <div>
      <FontSize fontSize={'2.3rem'} fontWeight={700} color="#FF504F">
        문학 공모
      </FontSize>

      <FontSize fontSize={'1.5rem'} fontWeight={700} margin="2rem 0 0 0">
        시 당선작
      </FontSize>

      <FontSize fontSize={'4.5rem'} fontWeight={700} margin="3rem 0 0 0">
        표류
      </FontSize>

      <FontSize fontSize={'1.5rem'} fontWeight={700} margin="6rem 0 0 0">
        임혜리
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} margin="6rem 0 6rem 0" letterSpacing="3%" lineHeight="175%">
        {`    누군가 지나는 길목에
    청설모가 둥지를 틀었다

    경적을 먹고 자라는 새끼들

    경유가 목적인 삶도 있다

    보청기를 두고 간 할아버지의
    마지막 행적은 정류장이었다

    마음을 내보이지 못했더니
    모든 세계가 나를 지나쳤다

    상하이는 적막했다

    빈 의자가 있어도
    아무도 내게 앉으라 하지 않았다

    상처를 놓아두는 비행을 연습해도
    마음은 자라지 않았다

    둥지를 떠난 청설모는 돌아오지 않았다`}
      </PreTag>
    </div>
  );
};

export default Comp21;

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
