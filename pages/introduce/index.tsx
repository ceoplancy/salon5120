import Font from 'components/common/font';
import Image from 'next/image';
import styled from 'styled-components';
import { test1 } from 'public/test';
import CodeBlock from 'components/code-block';
import ImageWrapper from 'components/common/image-wrapper';
import profile from 'constants/code-data/profile';
import { github, notion } from 'public/common';

const Introduce = () => {
  return (
    <Frame>
      <ProfileFrame>
        <TitleWrapper>
          <Font size={24}>안녕하세요,</Font>
          <Font size={28} margin="15px 0px 0px 0px" fontWeight={600}>
            개발자&nbsp;<span style={{ color: '#4141E7' }}>박상우</span>&nbsp;입니다.
          </Font>
        </TitleWrapper>

        <ProfileWrapper>
          <Image src={test1} alt="profile" />
        </ProfileWrapper>
      </ProfileFrame>

      <CodeBlock codeString={profile} />

      <ContentFrame>
        <pre>
          웹에 대해 공부하며 개발하고 있는 <HightLightText>박상우</HightLightText> 입니다.
          <br />
          혼자 보다는<HightLightText>협업</HightLightText>하는 것을 좋아하고 <HightLightText>비지니스 가치가 있는 웹 서비스</HightLightText>를 만드는 것에 집중하고 있습니다.
        </pre>
      </ContentFrame>

      <ImageFrame>
        <ImageWrapper width={4.5} height={4.5} onClick={() => window.open('https://github.com/psw0962')}>
          <CustomImage src={github} alt="github" />
        </ImageWrapper>

        <ImageWrapper width={4.5} height={4.5} onClick={() => window.open('https://url.kr/49bzk5')}>
          <CustomImage src={notion} alt="notion" />
        </ImageWrapper>
      </ImageFrame>
    </Frame>
  );
};

export default Introduce;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 4rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(10px);
`;

const ProfileWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 100%;

  img {
    border-radius: 100%;
  }
`;

const ImageFrame = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 5rem;
`;

const CustomImage = styled(Image)`
  cursor: pointer;
`;

const ContentFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 5rem;

  pre {
    text-align: center;
    font-size: 2.1rem;
    white-space: pre-wrap;
    font-weight: 600;
    line-height: 4rem;
  }
`;

const HightLightText = styled.span`
  text-decoration: underline;
  color: #4141e7;
  font-weight: 600;
`;
