import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Slick from 'react-slick';
import articleData from '../../constants/article-data';

const ImageData = ['/type1.png', '/type1.png', '/type1.png'];

const ArticleDetail = () => {
  const router = useRouter();
  const pathName = router.query.detail;

  const makeAricleData = () => {};

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: 'absolute',
          right: '10px',
          zIndex: '10',
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      />
      //   <div style={{ width: '90px', height: '50px', position: 'relative', top: '590px', right: '180px', cursor: 'pointer' }}>
      //     <Image
      //       src={`/rightarrow.svg`}
      //       alt={`slick`}
      //       layout="fill"
      //       priority={true}
      //       quality={100}
      //       placeholder="blur"
      //       blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      //       onClick={(e) => {
      //         e.stopPropagation();
      //         onClick();
      //       }}
      //     />
      //   </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: 'absolute',
          left: '10px',
          zIndex: '10',
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      />
      //   <div style={{ width: '90px', height: '50px', position: 'relative', top: '590px', left: '180px', cursor: 'pointer' }}>
      //     <Image
      //       src={`/leftarrow.svg`}
      //       alt={`slick`}
      //       layout="fill"
      //       priority={true}
      //       quality={100}
      //       placeholder="blur"
      //       blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      //       onClick={(e) => {
      //         e.stopPropagation();
      //         onClick();
      //       }}
      //     />
      //   </div>
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    autoplay: true,
    draggable: true,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Container>
      <SlickContainer>
        <CustomSlick {...settings}>
          {ImageData?.map((item, index) => {
            return (
              <React.Fragment key={`image${index}`}>
                <ImageWrapper>
                  <Image
                    src={item}
                    alt={`slick${index}`}
                    layout="fill"
                    priority={true}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
                </ImageWrapper>
              </React.Fragment>
            );
          })}
        </CustomSlick>
      </SlickContainer>

      <ContentContainer>
        <FontSize fontSize={'1rem'} fontWeight={600} margin="2rem 0 0.5rem 0">
          문화살롱 5120 기획전
        </FontSize>

        <PreTag fontSize={'3rem'} lineHeight={1.2} fontWeight={600}>
          {`김지희 작가 개인전
<낯선 풍경들 (Unknown Scenes)>
23.8.8-9.16`}
        </PreTag>

        <PreTag fontSize={'3rem'} fontWeight={600} margin="3rem 0 3rem 0" lineHeight={1.2}>
          {`상상의 풍경: 회화와 공간 사이
김지희 작가는 상상의 풍경을 그린다. 그는 그곳을 “물리적으로 있음직한 공간과 심리적 공간 사이 어딘가”의 공간이라고 부른다. 있음직하지만 모호한 그곳을 표현하고자작가는 캔버스와 그 바깥인 실제의 공간을 넘나든다. 회화의 캔버스는 그림의 바탕이자 배경을 이룬다. 네모난 캔버스는 그 내부에 그려진 세계가 단일한 하나의 세계라는 전제이자 약속을 구성한다.
그러나 작가가 넘어서고자 하는 것은 캔버스가 하나의 세계를 이룬다는 바로 그 정언이다. 초기작에서 비롯해 오랜 공백 이후 선보이는 근작의 공통된 특징이 화면의 제한을 넘어서 다층의 공간을
넘나드는 세계를 창조하는 것이다. 그의 화폭 속에서 세계는 분할되고 구성되는 한편, 주어진 면과 구획을 넘나들며 옆에 걸린 또 다른 화폭으로, 나아가 벽면으로 확장된다. 벽화는 김지희 작업의 이러한
특징을 단적으로 보여준다. 여느 벽화가 벽면에 오롯이 그려지는 반면 그의 벽화는 캔버스 회화의 세계를 확장하고 차원을 더한다. 캔버스 한 구획에서 시작된 면은 벽으로 확장되어 현실로 돌출되며
그렇게 돌출된 색면은 관객의 공간을 한 번 더 분할한다. 그 덕에 관객은 보이는 화면, 넘어선 공간에서의 회화, 내가 감상을 위해 걷고 있는 공간을 추상적인 하나의 세계로, 촉각적으로 경험한다.
물리적 공간과 상상 공간, 캔버스와 그 너머의 실제 공간, 그 세계를 오가는 유희 속에서 당신의 걸음은 색이 되고 그 공간은 빛으로 물들어 당신의 삶을 채우길 바라본다. ■ 배혜정 문화살롱 5120 디렉터`}
        </PreTag>

        <PreTag>{`연계프로그램: 아티스트토크
참여작가 I 김지희 일시 I 23. 9. 9 (토) 15:00 대상 I 모든 관람객(온라인 신청 구글폼 링크)`}</PreTag>
      </ContentContainer>
    </Container>
  );
};

export default ArticleDetail;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

const SlickContainer = styled.div`
  width: 42rem;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const CustomSlick = styled(Slick)`
  display: flex;
  justify-content: center;

  .slick-list {
    /* border-radius: 5px; */
  }

  .slick-slider {
    touch-action: 'auto';
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 42rem;
  height: 59rem;
`;
