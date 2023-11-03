import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Slick from 'react-slick';
import articleData from '../../constants/article-data';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ExhibitionDetail = ({ query }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const openLightbox = (index) => {
    if (!isDragging) {
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };

  const [makeData, setMakeData] = useState([]);

  const makeArticleData = (articleData, id) => {
    return [...articleData].filter((x) => x.id === id);
  };

  useEffect(() => {
    const confirmArticle = makeArticleData(articleData, Number(query.detail));

    if (confirmArticle[0]?.type !== 'type1') {
      setMakeData([]);
      return;
    }

    setMakeData(makeArticleData(articleData, Number(query.detail)));
  }, []);

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <RightArrowWrapper>
        <Image
          src={`/rightarrow.svg`}
          alt={`rightarrow`}
          layout="fill"
          priority={true}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        />
      </RightArrowWrapper>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <LeftArrowWrapper>
        <Image
          src={`/leftarrow.svg`}
          alt={`leftarrow`}
          layout="fill"
          priority={true}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        />
      </LeftArrowWrapper>
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 100,
    autoplay: false,

    beforeChange: () => {
      setIsDragging(true);
    },
    afterChange: () => {
      setIsDragging(false);
    },

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      {makeData.length === 0 ? (
        <NoArticle>존재하지 않는 게시물입니다.</NoArticle>
      ) : (
        <Container>
          {isOpen && (
            <Lightbox
              mainSrc={makeData[0].images[photoIndex]}
              nextSrc={makeData[0].images[(photoIndex + 1) % makeData[0].images.length]}
              prevSrc={makeData[0].images[(photoIndex + makeData[0].images.length - 1) % makeData[0].images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex + makeData[0].images.length - 1) % makeData[0].images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % makeData[0].images.length)}
            />
          )}

          {makeData[0] && (
            <CustomSlick {...settings}>
              {makeData[0]?.images?.map((item, index) => {
                return (
                  <React.Fragment key={`image${index}`}>
                    <ImageWrapper onClick={() => openLightbox(index)}>
                      <Image
                        src={item}
                        alt={`slick${index}`}
                        layout="fill"
                        objectFit="cover"
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
          )}

          <ContentContainer>
            <FontSize fontSize={'2.3rem'} fontWeight={700} margin="0 0 0.5rem 0">
              {makeData[0]?.content1}
            </FontSize>

            <PreTag fontSize={'4.5rem'} lineHeight={1.33} fontWeight={700}>
              {makeData[0]?.content2}
            </PreTag>

            <PreTag fontSize={'2.3rem'} fontWeight={400} margin="10rem 0 0 0" lineHeight={1.2}>
              {makeData[0]?.content3}
            </PreTag>

            <PreTag fontSize={'1.5rem'} fontWeight={400} margin="3rem 0 3rem 0" lineHeight={1.73}>
              {makeData[0]?.content4}
            </PreTag>

            <PreTag fontSize={'2.3rem'} fontWeight={700}>
              {makeData[0]?.content5}
            </PreTag>

            <PreTag fontSize={'1.5rem'} lineHeight={1.66} fontWeight={400} margin="3rem 0 3rem 0">
              {makeData[0]?.content6}
            </PreTag>
          </ContentContainer>
        </Container>
      )}
    </>
  );
};

export default ExhibitionDetail;

const Container = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0rem;
  }
`;

const CustomSlick = styled(Slick)`
  width: 42rem;
  height: 59rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 42rem;
  height: 59rem;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const NoArticle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 3rem;
  margin-top: 10rem;
`;

const PreTag = styled.pre`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const FontSize = styled.p`
  white-space: pre-wrap;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

const RightArrowWrapper = styled.div`
  width: 10rem;
  height: 3rem;
  position: absolute;
  top: 62rem;
  right: 12rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    top: 61rem;
    right: 14rem;
  }
`;

const LeftArrowWrapper = styled.div`
  width: 10rem;
  height: 3rem;
  position: absolute;
  top: 62rem;
  left: 12rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    top: 61rem;
    left: 14rem;
  }
`;

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
}
