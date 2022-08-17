import styled from 'styled-components';
import Image from 'next/image';
import Font from 'components/common/font';
import ImageWrapper from 'components/common/image-wrapper';
import { github, notion } from 'public/common';

const Footer = () => {
  return (
    <Frame>
      <FooterFrame>
        <ImageFrame>
          <ImageWrapper width={4.5} height={4.5} onClick={() => window.open('https://github.com/psw0962')}>
            <CustomImage src={github} alt="github" />
          </ImageWrapper>

          <ImageWrapper width={4.5} height={4.5} onClick={() => window.open('https://url.kr/49bzk5')}>
            <CustomImage src={notion} alt="notion" />
          </ImageWrapper>
        </ImageFrame>

        <Font size={16}>Copyrightⓒ2022 Nick All rights reserved. Powered by Vercel</Font>
      </FooterFrame>
    </Frame>
  );
};

export default Footer;

const Frame = styled.footer`
  width: 100%;
  height: 10rem;
  position: sticky;
  bottom: 0;

  display: flex;
  justify-content: center;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  z-index: 2;
`;

const FooterFrame = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  width: 1200px;
  padding: 3rem;
`;

const ImageFrame = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomImage = styled(Image)`
  cursor: pointer;
`;
