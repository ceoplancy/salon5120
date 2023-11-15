import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Comp10 = () => {
  return (
    <Container>
      <TitleContainer>
        <ImageWrapper>
          <Image
            src={`/image/type3-10/1.jpg`}
            alt={`type3-10/1`}
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
          {`문화살롱 5120 웹진 『놀』 창간 및 원고 공모 안내`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="6rem 0 6rem 0">
          {`문화살롱 5120 에서 종합예술웹진 『놀』을 창간합니다. 『놀』을 함께 만들어갈 다양한 색깔의 원고를 공모합니다. 주제와 형식은 자유롭습니다. 예술을 향유하고 사랑하는 모든 청년 예술인들의 많은 참여를 부탁드립니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
          {`모집 분야`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`웹진에 게재 가능한 텍스트 원고`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`공모 기간`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`2023년 9월 13일 ~ 2023년 10월 3일`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`공모 대상`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`웹진 『놀』에 자신의 글을 싣고 싶은 누구나 (만 39세 이하 청년 작가/노원구 거주 또는 노원 소재 대학 재학 혹은 졸업자 가산점 부여, ※ 관련 서류를 요구할 수 있습니다.)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`당선작 지원사항`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`웹진 『놀』에 원고 게재(웹진 원고 일부는 선별하여 2026년 단행본 출판 예정) 게재 원고료 지급: 200자 원고지 기준 1매당 1만원(시는 1편당 7만원) 예정`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`원고 분량`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`산문의 경우 200자 원고지 15~30매
시 최소 2편 이상`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`필수 제출 서류`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`1) 문화살롱 5120 원고 공모 지원서
2) 개인정보 수집·이용 동의서
3) 1차 완성된 원고(당선 이후 온라인 출판 예정일까지 퇴고 가능)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`지원 방법`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`문화살롱 이메일(culturesalon5120@gmail.com)로 제출 자료 첨부 후 발신`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`신청자 발표`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`개별연락 (2023년 10월 말~ 11월 초 예정)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`기타 사항`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`선정 이후 표절 및 기타 기고 불가 사유 발생 시 선정 취소될 수 있습니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`지원서 다운로드`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} pointer="pointer" onClick={() => window.open('https://bitly.ws/U2Vw', '_blank')}>
          {`https://bitly.ws/U2Vw`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp10;

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
