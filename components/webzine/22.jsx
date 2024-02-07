import React from 'react';
import styled from 'styled-components';

const Comp22 = () => {
  return (
    <div>
      <FontSize fontSize={'2.3rem'} fontWeight={700} color="#FF504F">
        문학 공모
      </FontSize>

      <FontSize fontSize={'1.5rem'} fontWeight={700} margin="2rem 0 0 0">
        시 당선작
      </FontSize>

      <FontSize fontSize={'4.5rem'} fontWeight={700} margin="3rem 0 0 0">
        다중우주의 당신
      </FontSize>

      <FontSize fontSize={'1.5rem'} fontWeight={700} margin="6rem 0 0 0">
        임혜리
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} margin="6rem 0 6rem 0" letterSpacing="3%" lineHeight="175%">
        {`    그 사람과 인사하지 못했다

    비가 떠난 자리에 꺼끌꺼끌한 홈이 파였다

    떨어진 새잎의 얼굴이 결코 닿을 수 없는 바닥

    계절이 이별의 목선을 훑는 동안
    당신은 어디로 갔는가

    억겁의 소나기가 내리는 동안
    애벌레의 오줌 같은 이슬이 손톱을 통과했다

    물방울 속에 하나의 지구가 담겨있고
    또 다른 당신이 있다

    비로 환생하고 싶다던 당신
    이제는 웃고 있을까

    당신을 맞이하려고 우주에서 가장 낮은 자세로 웅크렸다

    안녕 인사하면
    끝나지 않는 장마가 밤을 차갑게 도려낸다`}
      </PreTag>
    </div>
  );
};

export default Comp22;

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
