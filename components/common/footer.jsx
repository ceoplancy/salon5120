import styled from 'styled-components';
import Image from 'next/image';
import Font from 'components/common/font';
import ImageWrapper from 'components/common/image-wrapper';
import { github, notion } from 'public/common';

const Footer = () => {
  return (
    <Frame>
      <FooterFrame>
        <FontSize fontSize="1rem" fontWeight={700}>
          ⓒ 문화살롱 5120
        </FontSize>

        <ImageFrame>
          <CustomImageWrapper onClick={() => router.push('/')}>
            <CustomImage src={'/i.svg'} alt="logo" layout="fill" />
          </CustomImageWrapper>

          <CustomImageWrapper onClick={() => router.push('/')}>
            <CustomImage src={'/m.svg'} alt="logo" layout="fill" />
          </CustomImageWrapper>

          <CustomImageWrapper width="10rem" height="3rem" onClick={() => router.push('/')}>
            <CustomImage src={'/h.svg'} alt="logo" layout="fill" />
          </CustomImageWrapper>
        </ImageFrame>
      </FooterFrame>
    </Frame>
  );
};

export default Footer;

const Frame = styled.footer`
  width: 100%;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #000;
  padding: 1rem 6rem;

  display: flex;

  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; */
  background-color: #fff;
  z-index: 2;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

const FooterFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ImageFrame = styled.div`
  display: flex;
  gap: 3rem;
`;

const CustomImage = styled(Image)`
  cursor: pointer;
`;

const CustomImageWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '3rem')};
  height: ${(props) => (props.height ? props.height : '3rem')};
`;

const FontSize = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.6rem')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;
