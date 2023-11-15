import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Comp14 = () => {
  return (
    <Container>
      <TitleContainer>
        <ImageWrapper>
          <Image
            src={`/image/type3-14/1.jpg`}
            alt={`type3-14/1`}
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageWrapper>
      </TitleContainer>

      <div>
        <PreTag fontSize={'3.2rem'} fontWeight={700} lineHeight={1.4}>
          {`문화살롱5120 읽기모임시즌1 -SF,
김보영 『종의 기원담』 읽기`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="6rem 0 6rem 0">
          {`문화살롱 5120에서 ‘읽기 모임’ 시즌 1을 진행합니다. ‘읽기 모임’은 문학과 비문학의 경계를 구분하지 않고 하나의 작품을 선정해, 2주에 한 번씩 모여 각자 읽은 것과 느낀 것을 함께 나누는 모임입니다.
그 첫 시작으로 현재 한국문학에서 가장 뜨거운 장르라고 할 수 있는 장르, SF를 선정하였습니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
          {`도서 I 김보영의 『종의 기원담』
일시 I 23년 10월 6일 금요일, 오후 4시
장소 I 문화살롱 5120 (서울 노원구 공릉로 51길 20, 지하 1층)`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp14;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
`;

const Container = styled.div`
  margin-top: 6rem;
  padding-bottom: 6rem;
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
  }
`;

const TitleContainer = styled.div`
  max-width: 42rem;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 42rem;
  height: 42rem;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
