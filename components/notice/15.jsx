import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Comp15 = () => {
  return (
    <Container>
      <TitleContainer>
        <ImageWrapper>
          <Image
            src={`/image/type3-15/1.jpg`}
            alt={`type3-15/1`}
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
          {`박관우, 《증인과 증언들》 워크숍 참여자 모집`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="6rem 0 6rem 0">
          {`10월, 문화살롱 5120에서 진행되는 실험예술 워크숍 《증인과 증언들》 사건의 일부가 될 구성원을 모집합니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
          {`워크숍 일정`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`진행날짜 I 10월 5일, 10일, 12일, 17일, 19일 (화, 목)
진행시간 I 19:00 ~ 22:00 (매회 3시간)
참여비용 I 무료*`}
        </PreTag>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`1부`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`“보이지 않는 연인들” (10.05 목)`}
          </PreTag>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`2부`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`“증인과 증언” (10.10 화)`}
          </PreTag>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`3부`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`“마시다 만 술병들, 먹다 남은 음식들, 춤추는 사람들” (10.12 목)`}
          </PreTag>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`4부`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`“자화상” (10.17 화)`}
          </PreTag>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`5부`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
            {`“너를 아마 꿈속에서 본 적이 있지” (10.19 목)`}
          </PreTag>
        </div>

        <div style={{ display: 'flex', gap: '1rem', margin: '3rem 0 6rem 0' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`<증인과 증언, 아티스트 토크>`}
          </PreTag>

          <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} pointer="pointer">
            {`(10월 28일 토요일)`}
          </PreTag>
        </div>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
          {`모집 인원`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`8명 (짝수, 최대 10명)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`모집 기간`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`9월 11일 ~ 9월 25일`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="2rem 0 0 0">
          {`프로젝트에 관한 자세한 사항은 아래 신청 링크의 상세 페이지를 참고해주세요.`}
        </PreTag>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8}>
            {`참여 신청`}
          </PreTag>

          <PreTag
            fontSize={'1.5rem'}
            fontWeight={400}
            lineHeight={1.8}
            pointer="pointer"
            textDecoration="underline"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe45jKtq9c5GmntQauEF6IulP0F1PcIqLOyNQVxQG5l0Jdh9g/closedform', '_blank')}
          >
            {`forms.gle/64zMZur8u31DMwXg8`}
          </PreTag>
        </div>
      </div>
    </Container>
  );
};

export default Comp15;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : '')};
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
