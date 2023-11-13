import React from 'react';
import styled from 'styled-components';

const Comp13 = () => {
  return (
    <div>
      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 0 0">
        {`날짜 I 11월 11일 / 11월 25일 / 12월 9일 / 12월 23일 (토요일, 총 4회)
시간 I 오후 3시-5시 (매회 2시간) 비용 I *무료*`}
      </PreTag>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="0 0 6rem 0" pointer={'pointer'} onClick={() => window.open('https://bitly.ws/XZ4R', '_blank')}>
        신청 | https://bitly.ws/XZ4R
      </PreTag>

      <DateFrame>
        <DirectionWrapper>
          <FontSize fontSize={'1.5rem'} fontWeight={700} lineHeight={1.66}>
            1회 "기념사진"
          </FontSize>

          <FontSize fontSize={'1.5rem'} fontWeight={700} lineHeight={1.66}>
            2회 "옷"
          </FontSize>

          <FontSize fontSize={'1.5rem'} fontWeight={700} lineHeight={1.66}>
            3회 "그릇"
          </FontSize>

          <FontSize fontSize={'1.5rem'} fontWeight={700} lineHeight={1.66}>
            4회 "가구"
          </FontSize>
        </DirectionWrapper>

        <DirectionWrapper>
          <FontSize fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
            11월 11일 (토) 오후 3시
          </FontSize>

          <FontSize fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
            11월 25일 (토) 오후 3시
          </FontSize>

          <FontSize fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
            12월 9일 (토) 오후 3시
          </FontSize>

          <FontSize fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
            12월 23일 (토) 오후 3시
          </FontSize>
        </DirectionWrapper>
      </DateFrame>

      <FontSize fontSize={'1.5rem'} fontWeight={700} lineHeight={1.66} margin="6rem 0 0 0">
        안내자 소개
      </FontSize>

      <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
        {`파랑~ (@yhgh0000)
박물관과 미술관에서 일해왔고, 박물관과 문화유산을 기반으로 사람들에게 말을 붙이는 프로그램들을 만들고 진행하고 있습니다.
전문가의 태도보다 애호가의 태도를 사랑하고 다양한 존재들을 대화의 방식으로 만나는 것에 관심이 많습니다.`}
      </PreTag>
    </div>
  );
};

export default Comp13;

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

const DateFrame = styled.div`
  display: flex;
  gap: 2rem;
`;

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
