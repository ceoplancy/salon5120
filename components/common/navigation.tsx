import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import Font from 'components/common/font';
import logo from 'public/vercel.svg';

const Navigation = () => {
  const router = useRouter();

  return (
    <Frame>
      <NavigationFrame>
        <ImageWrapper onClick={() => router.push('/')}>
          <CustomImage src={logo} alt="logo" />
        </ImageWrapper>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
          <MenuWrapper>
            <Font size={21} translateY={2} pointer={true}>
              All
            </Font>

            <MenuLine />

            <Font size={21} translateY={2} pointer={true}>
              Components
            </Font>

            <MenuLine />

            <Font size={21} translateY={2} pointer={true}>
              Blog
            </Font>
          </MenuWrapper>

          <Font size={21} translateY={2} pointer={true}>
            Introduce
          </Font>
        </div>
      </NavigationFrame>
    </Frame>
  );
};

export default Navigation;

const Frame = styled.nav`
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;

  /* 부모의 크기와 상관없이 화면 전체 nav */
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  height: 8rem;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const NavigationFrame = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuLine = styled.div`
  width: 1px;
  height: 15px;
  border: 1px solid #989898;
`;

const CustomImage = styled(Image)`
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 12rem;
  height: 2.5rem;
`;
