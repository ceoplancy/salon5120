import styled from 'styled-components';
import Image from 'next/image';

const SubFooter = () => {
  return (
    <Frame>
      <FooterFrame>
        <Container>
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
        </Container>
      </FooterFrame>
    </Frame>
  );
};

export default SubFooter;

const Frame = styled.footer`
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 2;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

const FooterFrame = styled.div`
  border-top: 1px solid #000;
  position: absolute;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;

const Container = styled.div`
  max-width: 192rem;
  margin: 0 auto;
  padding: 1rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: #fff;
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
