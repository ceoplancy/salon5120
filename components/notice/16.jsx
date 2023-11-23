import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Comp16 = () => {
  return (
    <Container>
      <TitleContainer>
        <ImageWrapper>
          <Image
            src={`/image/type3-16/1.jpg`}
            alt={`type3-16/1`}
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
          {`문화살롱 5120 전시공모 선정작가 프리뷰전 
<공유시선 共有視線 The Age's Glance>`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="6rem 0 6rem 0">
          {`전시일정 | 23년 11월 17일(금) - 2024년 1월 20일 (토)
참여작가 | 공재, 로트링겐, 이상균·조화라, 임하은·조현민
전시장소 | 문화살롱 5120 (서울 노원구 공릉로51길 20 지하1층) 
※ 주차장이 없습니다. 대중교통 이용을 부탁드립니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`개인의 시선이 서로 맞닿는 순간, 우리는 각자의 세계를 넘어 하나로 얽힌 관계로 나아갑니다.

이러한 시선은 세상을 이해하고 경험하는 방식을 규정합니다. 개별의 시선이 다른 시선과 부드럽고 섬세하게 만나는 이 순간은, 마치 서로 다른 삶을 살아온 이들 사이에서 공통의 감정과 생각을 발견하는 듯한 경험을 제공합니다.

문화살롱 5120 전시공모 선정작가 프리뷰전 《공유시선 共有視線 The Age's Glance》은 네 팀의 작가들이 각자의 눈에 비친 세계를 그대로 품에 안은 채 세상을 독특한 방식으로 바라볼 때의 순간을 보여주고자 합니다.

공재, 로트링겐, 이상균·조화라, 임하은·조현민 작가들은 서로의 시선을 교차하며, 이를 통해 대화를 나눕니다.

공재는 기억의 변형과 흙의 변형을 동일한 맥락에서 바라보며, 사실과 허구, 신화와 현실을 넘나드는 기념비적 태도를 보여줍니다. 로트링겐은 마르셀 프루스트의 작품과 사진가 장국현의 일화를 통해 책 제작과 지식의 변화를 탐구합니다. 나무에서 종이로, 그리고 지식으로의 변환은 인간 사고의 고정성을 대변하며, 프루스트의 시간 개념은 책의 제작을 시간적 해체로 재해석합니다. 임하은은 자연의 조형적 리듬에 초점을 맞추며, 조현민은 일상 속 풍경과 사물의 그림자 사이에 존재하는 미묘한 디테일에 주목합니다. 이상균은 회화 작가로서 전통적인 물질의 경계를 허물고 있는 반면, 조화라는 디자이너로서 비물질 형태와 공간의 개념을 재해석하며 무형의 아이디어를 시각적으로 표현합니다. 이들의 작업은 재료와 형태의 한계를 넘어서는 방식으로 표현의 새로운 영역을 탐색한다는 점에서 만나게 됩니다.

공유된 네 갈래의 시선은 하나의 교차점에서 겹쳐지며 관객들에게 공감과 이해의 순간으로 전해집니다. 한정된 공간 안에서 우리 각자의 삶은 서로 미묘하게 연결되는 무늬를 이룹니다. 거미줄이 섬세하고 복잡하게 얽히듯, 교차하는 점들은 우리 내면에 새로운 이해와 감정의 길을 조심스레 열어 생각의 직조물을 만들어냅니다.

<공유시선 共有視線 The Age's Glance>은 2024년에 펼쳐질 작가들 개인전의 프리뷰 역할을 합니다. 우리는 지금 각자의 시선에서 출발하여 서로 만나는 지점에 서 있습니다. 각 작가의 작품활동에 대한 이해와 향후 이어질 개별 작가의 깊은 이야기들을 기대하면서, 공감과 이해의 순간을 발견할 수 있기를 바랍니다. ■ 홍해준 (문화살롱 5120 프로그램 매니저)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="6rem 0 0 0">
          {`작품 목록`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`1. 이상균, Guide, 벽면에 먹줄, 가변크기, 2023
2. 이상균, 암거, 캔버스에 유채, 왁스, 알키드, 먹줄, 17.0x17.0cm, 2023
3. 조화라, Movement 3, 종이에 피그먼트 프린트, 59.4x42cm, 2019
4. 조화라, Movement 4, 종이에 피그먼트 프린트, 59.4x42cm, 2019
5. 조화라, Movement 2, 종이에 피그먼트 프린트, 59.4x42cm, 2019
6. 조화라, Movement 1, 종이에 피그먼트 프린트, 59.4x42cm, 2019
7. 조화라, Object 1, 렌티큘러, 7.76x16.3cm, 2019
8. 공재, 9 seats 10 crowds, 나무, 세라믹, 가변크기, 2023
9. 임하은, 해안선 연구, 캔버스에 아크릴, 91.3x116.8cm, 2023
10. 임하은, 둑에서 미끄러지는, 변형 패널에 유채, 77.5x58cm, 2022
11. 조현민, 공릉로, 캔버스에 유채, 66.3x145.5cm, 2023
12. 조현민, 남석2길, 캔버스에 유채, 72.7x72.7cm, 2023
13. 조현민, 성내리, 캔버스에 유채, 80.3x80.3cm, 2023
14. 공재, 인라인 스케이트 멈추는 법, 나무, 세라믹, 가변크기, 2023
15. 공재, 수집되고 믿어진 강력한 기념품, 세라믹, 가변크기, 2023
16. 로트링겐, 즐겁지 않은 지식, 1채널 비디오, 컬러, 사운드, 24분, 2023`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="6rem 0 0 0">
          {`2024년 전시공모 선정작가 전시 일정(예정)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`임하은·조현민 : 2월 8일 – 3월 16일
로트링겐 : 4월 4일 – 5월 11일
공재 : 5월 23일 – 7월 6일
이상균·조화라 : 7월 18일 – 8월 31일`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="6rem 0 0 0">
          {`문의 | 02-948-1217 / culturesalon5120@gmail.com`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp16;

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
