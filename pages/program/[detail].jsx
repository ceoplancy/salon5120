import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import articleData from '../../constants/article-data';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Slick from 'react-slick';
import MatineClass from '../../components/program/matinee-class';
import Comp13 from '../../components/program/13';
import Comp9 from '../../components/program/9';
import Comp32 from '../../components/program/32';

const ProgramDetail = ({ query }) => {
  const router = useRouter();
  const [makeData, setMakeData] = useState({});

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const openLightbox = (index) => {
    if (!isDragging) {
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };

  const makeAricleData = (articleData, id) => {
    return [...articleData].filter((x) => x.id === id);
  };

  useEffect(() => {
    const confirmArticle = makeAricleData(articleData, Number(query.detail));
    if (confirmArticle[0]?.type !== 'type2') {
      setMakeData([]);
      return;
    }

    setMakeData(makeAricleData(articleData, Number(query.detail)));
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
          <TitleContainer>
            <PreTag fontSize={'4.5rem'} fontWeight={700} lineHeight={1.33} margin="0 0 4rem 0">
              {makeData[0]?.content1}
            </PreTag>

            {makeData[0]?.content2 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="0 0 4rem">
                {makeData[0]?.content2}
              </PreTag>
            )}

            {isOpen && (
              <Lightbox
                mainSrc={makeData[0]?.images[photoIndex]}
                nextSrc={makeData[0]?.images[(photoIndex + 1) % makeData[0]?.images?.length]}
                prevSrc={makeData[0]?.images[(photoIndex + makeData[0]?.images?.length - 1) % makeData[0]?.images?.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + makeData[0]?.images?.length - 1) % makeData[0]?.images?.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % makeData[0]?.images?.length)}
                imageCaption={makeData[0]?.imageCaptions && <ImageCaptionBox style={{ fontSize: '2rem' }}>{makeData[0]?.imageCaptions[photoIndex]}</ImageCaptionBox>}
              />
            )}

            {makeData[0]?.images?.length > 0 && (
              <CustomSlick {...settings}>
                {makeData[0]?.images?.map((item, index) => {
                  return (
                    <ImageWrapper key={`image${index}`} marginTop="4rem" onClick={() => openLightbox(index)}>
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
                  );
                })}
              </CustomSlick>
            )}
          </TitleContainer>

          <ContentContainer>
            {/* 1 */}
            {makeData[0]?.content3 && (
              <PreTag fontSize={'2.1rem'} fontWeight={700}>
                {makeData[0]?.content3}
              </PreTag>
            )}

            {makeData[0]?.content4 && (
              <PreTag fontSize={'3.2rem'} fontWeight={700} margin="1rem 0 3rem 0" lineHeight={1.4}>
                {makeData[0]?.content4}
              </PreTag>
            )}

            {makeData[0]?.content5 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="0 0 3rem 0">
                {makeData[0]?.content5}
              </PreTag>
            )}

            {makeData[0]?.content6 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
                {makeData[0]?.content6}
              </PreTag>
            )}

            {/* 2 */}
            {makeData[0]?.content7 && (
              <PreTag fontSize={'2.1rem'} fontWeight={700} margin="6rem 0 0 0">
                {makeData[0]?.content7}
              </PreTag>
            )}

            {makeData[0]?.content8 && (
              <PreTag fontSize={'3.2rem'} fontWeight={700} margin="1rem 0 0 0" lineHeight={1.4}>
                {makeData[0]?.content8}
              </PreTag>
            )}

            {makeData[0]?.content9 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 3rem 0">
                {makeData[0]?.content9}
              </PreTag>
            )}

            {makeData[0]?.content10 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66}>
                {makeData[0]?.content10}
              </PreTag>
            )}

            {/* 3 */}
            {makeData[0]?.content11 && (
              <PreTag fontSize={'2.1rem'} fontWeight={700} margin="6rem 0 0 0">
                {makeData[0]?.content11}
              </PreTag>
            )}

            {makeData[0]?.content12 && (
              <PreTag fontSize={'3.2rem'} fontWeight={700} margin="1rem 0 0 0" lineHeight={1.4}>
                {makeData[0]?.content12}
              </PreTag>
            )}

            {makeData[0]?.content13 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 0 0">
                {makeData[0]?.content13}
              </PreTag>
            )}

            {makeData[0]?.content14 && (
              <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="3rem 0 0 0">
                {makeData[0]?.content14}
              </PreTag>
            )}

            {/* 별도 */}
            {Number(router.query.detail) === 4 && <MatineClass />}
            {Number(router.query.detail) === 6 && <MatineClass />}
            {Number(router.query.detail) === 8 && <MatineClass />}
            {Number(router.query.detail) === 28 && <MatineClass />}
            {Number(router.query.detail) === 29 && <MatineClass />}

            {Number(router.query.detail) === 13 && <Comp13 />}
            {Number(router.query.detail) === 9 && <Comp9 />}
            {Number(router.query.detail) === 32 && <Comp32 />}
          </ContentContainer>
        </Container>
      )}
    </>
  );
};

export default ProgramDetail;

const Container = styled.div`
  margin-top: 6rem;
  padding-bottom: 6rem;
  width: 100%;
  display: flex;
  gap: 6rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const TitleContainer = styled.div`
  max-width: 42rem;
  width: 100%;

  @media screen and (max-width: 480px) {
    max-width: 48rem;
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
  cursor: ${(props) => (props.pointer ? props.pointer : '')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
}

const ImageWrapper = styled.div`
  width: 42rem;
  height: 42rem;
  /* height: 31.5rem; */
  position: relative;

  @media screen and (max-width: 480px) {
    margin-top: 6rem;
    width: 100%;
  }
`;

const CustomSlick = styled(Slick)`
  width: 42rem;
  height: 45rem;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const RightArrowWrapper = styled.div`
  width: 10rem;
  height: 3rem;
  position: absolute;
  top: 45rem;
  right: 12rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    top: 50rem;
    right: 13rem;
  }
`;

const LeftArrowWrapper = styled.div`
  width: 10rem;
  height: 3rem;
  position: absolute;
  top: 45rem;
  left: 12rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    top: 50rem;
    left: 13rem;
  }
`;

const ImageCaptionBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;
