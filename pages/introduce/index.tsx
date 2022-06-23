import Font from 'components/common/font';
import Image from 'next/image';
import styled from 'styled-components';
import { test1 } from 'public/test';
import CodeBlock from 'components/code-block';

const Introduce = () => {
  return (
    <Frame>
      <ProfileFrame>
        <TitleWrapper>
          <Font size={24}>안녕하세요.</Font>
          <Font size={28} margin="15px 0px 0px 0px" fontWeight={600}>
            제품을 만드는&nbsp;<span style={{ color: '#4141E7' }}>박상우</span>&nbsp;입니다.
          </Font>
        </TitleWrapper>

        <ProfileWrapper>
          <Image src={test1} alt="profile" />
        </ProfileWrapper>
      </ProfileFrame>

      <CodeBlock />
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
