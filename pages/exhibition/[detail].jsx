import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Slick from 'react-slick';
import articleData from '../../constants/article-data';
import Lightbox from 'react-image-lightbox';
import { useRouter } from 'next/router';
import 'react-image-lightbox/style.css';
import Comp1 from '../../components/exhibition/1';
import Comp12 from '../../components/exhibition/12';
import Comp30 from '../../components/exhibition/30';
import Comp2 from '../../components/exhibition/2';

const ExhibitionDetail = ({ query }) => {
  const router = useRouter();
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
              imageCaption={<ImageCaptionBox style={{ fontSize: '2rem' }}>{makeData[0].imageCaptions[photoIndex]}</ImageCaptionBox>}
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
            {makeData[0]?.content1 && (
              <FontSize fontSize={'2.3rem'} fontWeight={700} margin="0 0 0.5rem 0">
                {makeData[0]?.content1}
              </FontSize>
            )}

            {makeData[0]?.content2 && (
              <PreTag fontSize={'4.5rem'} lineHeight={1.33} fontWeight={700}>
                {makeData[0]?.content2}
              </PreTag>
            )}

            {makeData[0]?.content3 && (
              <PreTag fontSize={'2.3rem'} fontWeight={400} margin="10rem 0 0 0" lineHeight={1.2}>
                {makeData[0]?.content3}
              </PreTag>
            )}

            {makeData[0]?.content4 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} margin="3rem 0 3rem 0" lineHeight={1.73}>
                {makeData[0]?.content4}
              </PreTag>
            )}

            {makeData[0]?.content7 && (
              <PreTag fontSize={'1.5rem'} lineHeight={1.66} fontWeight={700}>
                {makeData[0]?.content7}
              </PreTag>
            )}

            {makeData[0]?.content8 && (
              <PreTag fontSize={'1.5rem'} lineHeight={1.66} fontWeight={400} margin="0 0 3rem 0">
                {makeData[0]?.content8}
              </PreTag>
            )}

            {makeData[0]?.content5 && (
              <PreTag fontSize={'2.3rem'} fontWeight={700} lineHeight={1.39} margin="0 0 2.5rem 0">
                {makeData[0]?.content5}
              </PreTag>
            )}

            {makeData[0]?.content6 && (
              <PreTag fontSize={'1.5rem'} lineHeight={1.66} fontWeight={400} margin="1rem 0 3rem 0">
                {makeData[0]?.content6}
              </PreTag>
            )}

            {/* 별도 */}
            {Number(router.query.detail) === 1 && <Comp1 />}
            {Number(router.query.detail) === 2 && <Comp2 />}
            {Number(router.query.detail) === 12 && <Comp12 />}
            {Number(router.query.detail) === 30 && <Comp30 />}
          </ContentContainer>
        </Container>
      )}
    </>
  );
};

export default ExhibitionDetail;

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
}

const Container = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
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

const ImageCaptionBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;
