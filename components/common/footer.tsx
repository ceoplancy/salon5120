import styled from 'styled-components';
import Image from 'next/image';
import github from 'public/github.svg';
import notion from 'public/notion.svg';
import Font from 'components/common/font';

const Footer = () => {
  return (
    <Frame>
      <FooterFrame>
        <ImageFrame>
          <ImageWrapper>
            <CustomImage src={github} alt="github" />
          </ImageWrapper>

          <ImageWrapper>
            <CustomImage src={notion} alt="github" />
          </ImageWrapper>
        </ImageFrame>

        <Font size={16}>Copyrightⓒ2022 Nick All rights reserved.</Font>
      </FooterFrame>
    </Frame>
  );
};

export default Footer;

const Frame = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;

  /* 부모의 크기와 상관없이 화면 전체 nav */
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  height: 10rem;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
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

const ImageWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
`;

const CustomImage = styled(Image)`
  cursor: pointer;
`;
