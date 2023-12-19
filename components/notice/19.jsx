import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Comp19 = () => {
  return (
    <Container>
      <TitleContainer>
        {/* <ImageWrapper>
          <Image
            src={`/image/type3-18/1.svg`}
            alt={`type3-18/1`}
            layout="fill"
            objectFit="cover"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageWrapper> */}
      </TitleContainer>

      <div>
        <PreTag fontSize={'3.2rem'} fontWeight={700} lineHeight={1.4}>
          {`문화살롱 5120 프로그램 매니저 채용 결과`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.66} margin="6rem 0 0 0">
          {`문화살롱 5120 프로그램 매니저 채용 결과 알림`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="3rem 0 0 0">
          {`문화살롱 5120에 지원해주신 분들께 감사드립니다.
프로그램 매니저 채용 결과는 다음과 같습니다.`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={700} lineHeight={1.8} margin="3rem 0 0 0">
          {`채용 결과`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8}>
          {`최종 합격자 : 박*욱 (010-****-4272)
예비 합격자 : 오*은 (010-****-2649)`}
        </PreTag>

        <PreTag fontSize={'1.5rem'} fontWeight={400} lineHeight={1.8} margin="3rem 0 0 0">
          {`※ 최종 합격자에게는 개별 연락 및 안내 예정
※ 예비 합격자는 최종 합격자의 입사포기, 결격사유로 인한 합격취소, 채용 후 즉시 퇴직 등의 사유로 결원이 발생한 경우, 합격자 발표일로부터 3개월 이내에 예비 합격자를 채용 대상자로 결정함.`}
        </PreTag>
      </div>
    </Container>
  );
};

export default Comp19;

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
