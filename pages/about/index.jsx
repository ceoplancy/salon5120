import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
    script.charset = 'UTF-8';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
        const mapWidth = '100%';
        const mapHeight = '42rem';

        new window.daum.roughmap.Lander({
          timestamp: '1698387182448',
          key: '2gmmi',
          mapWidth,
          mapHeight,
        }).render();
      } else {
        console.error('Failed to load Daum Map library.');
      }
    };
  }, []);

  return (
    <Frame>
      <ImageWrapper>
        <Image layout="fill" src={`/about.png`} alt={`thumbnail`} priority={true} quality={100} />
      </ImageWrapper>

      <MobileAbout>
        <FontSize fontSize="3.2rem" fontWeight={700}>
          ABOUT
        </FontSize>
      </MobileAbout>

      <InfoWrapper>
        <PreTag fontSize="1.5rem" fontWeight={400} lineHeight={1.5}>
          {`문화살롱 5120은 지역 내 청년 예술 창작자들을 발굴하고 지원, 육성하기 위해 노원구에서 진행하는 문화예술청년 지원사업의 이름이자 공간의 이름입니다.
옛 철길과 노원의 자연이 어우러진 경춘선 숲길 중간에 위치한 문화살롱 5120은 시작하는 예술가가 꿈을 키워갈 수 있는 기반을 마련하며, 구민이 문화예술을 향유하는 일상 속의 장소를 지향합니다.
무한한 영감을 주는 샘터, 문화살롱 5120은 모두에게 열려 있는 공간이 되고자 합니다.`}
        </PreTag>

        <FontSize fontSize="2.3rem" fontWeight={700} margin="6rem 0 3rem 0">
          ADDRESS
        </FontSize>

        <FontSize fontSize="1.5rem" fontWeight={400} margin="0 0 1rem 0">
          {`서울시 공릉로 51길 20, B1 (01833)`}
        </FontSize>

        <FontSize fontSize="1.5rem" fontWeight={400} margin="0 0 3rem 0">
          {`(주차장이 마련되어 있지 않습니다. 대중교통 이용을 부탁드립니다.)`}
        </FontSize>

        <MapContainer id="daumRoughmapContainer1698387182448" className="root_daum_roughmap root_daum_roughmap_landing" />

        <FontSize fontSize="2.3rem" fontWeight={700} margin="6rem 0 3rem 0">
          CONTACT
        </FontSize>

        <FontSize fontSize="1.5rem" fontWeight={400}>
          culturesalon5120@gmail.com
        </FontSize>

        <FontSize fontSize="1.5rem" fontWeight={400} margin="1rem 0 0 0">
          02-948-1217
        </FontSize>

        <FontSize fontSize="1.5rem" fontWeight={400} margin="1rem 0 0 0">
          @salon_5120
        </FontSize>
      </InfoWrapper>
    </Frame>
  );
};

export default About;

const Frame = styled.div`
  width: 100%;
  margin: 6rem 0;
  display: flex;
  justify-content: space-between;
  gap: 6rem;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    gap: 3rem;
    margin-top: 1.5rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MobileAbout = styled.div`
  @media screen and (min-width: 520px) {
    display: none;
  }
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
  word-break: break-all;
`;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const ImageWrapper = styled.div`
  position: relative;
  min-width: 42rem;
  height: 31.7rem;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

const MapContainer = styled.div`
  width: 100% !important;

  .wrap_map {
    height: 42rem !important;
  }
`;
