import styled from 'styled-components';
import Image from 'next/image';

const Footer = () => {
  return (
    <Frame>
      <FooterFrame>
        <Container>
          <FontSize fontSize="1rem" fontWeight={700}>
            ⓒ 문화살롱 5120
          </FontSize>

          <ImageFrame>
            <CustomImageWrapper onClick={() => window.open('https://www.instagram.com/salon_5120/', '_blank')}>
              <CustomImage src={'/i.svg'} alt="logo" layout="fill" />
            </CustomImageWrapper>

            <CustomImageWrapper onClick={() => window.open('https://www.nowon.kr/index.do', '_blank')}>
              <CustomImage src={'/m.svg'} alt="logo" layout="fill" />
            </CustomImageWrapper>

            <CustomImageWrapper width="10rem" height="3rem" onClick={() => window.open('https://cms.dankook.ac.kr/web/dkcti', '_blank')}>
              <CustomImage src={'/h.svg'} alt="logo" layout="fill" />
            </CustomImageWrapper>
          </ImageFrame>
        </Container>
      </FooterFrame>
    </Frame>
  );
};

export default Footer;

const Frame = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 3;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const FooterFrame = styled.div`
  background-color: #fff;
  border-top: 0.15rem solid #000;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 1rem 6rem;
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
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '')};
`;
