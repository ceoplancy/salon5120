import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Comp31 = () => {
  return (
    <Container>
      <TitleContainer>
        <ImageWrapper>
          <Image
            src={`/image/type3-31/1.svg`}
            alt={`type3-31/1`}
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
        <PreTag fontSize={'3rem'} fontWeight={700} lineHeight={1.4}>
          {`웹진 ‘놀’ Vol.1 창간호 발간`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.66} margin="6rem 0 0 0">
          {`문화살롱 5120에서 펴내는 문화예술종합잡지, 웹진 ‘놀’ 창간호가 발간되었습니다.

이번 호의 내용은 공모 세션과 기획 세션으로 구성되었습니다. 먼저 공모 세션에는 작년 하반기 문학 공모의 당선작인 단편 소설 1편(장아연)과 시 2편(임혜리)을 실었습니다. 또한, 기획 세션의 필진으로는 철학자 허경, 미술 평론가 이연숙(리타), 작가 윤혜은이 참여하여 다채로운 논의가 펼쳐졌습니다.

웹진 ‘놀’의 창간호에 실린 이야기들을 통해 청년 예술인의 이야기에 공감하기도, 단조로운 일상을 깨우는 사유의 시간을 가져보기도 하는 것은 어떨까요? 매년 상반기, 하반기마다 발간될 다음 호의 내용도 열린 마음으로 기대해주세요.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="3rem 0 0 0">
          {`문의 | 02-948-1217 / culturesalon5120@gmail.com`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp31;

const PreTag = styled.pre`
  color: ${(props) => (props.color ? props.color : '#000')};
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

const FileDownLoadWrapper = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #8536ff;
    text-decoration: underline;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;
