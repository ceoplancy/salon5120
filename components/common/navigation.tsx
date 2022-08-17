import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import Font from 'components/common/font';
import ImageWrapper from 'components/common/image-wrapper';
import useScrollEvent from 'hooks/useScrollEvent';
import { mobileMenu, closebBtn } from 'public/common';
import logo from 'public/vercel.svg';
import { useRecoilState } from 'recoil';
import { filterStateAtom } from 'atoms';

const Navigation = () => {
  const router = useRouter();
  const { scrollEventState } = useScrollEvent();

  const [filterState, setFilterState] = useRecoilState(filterStateAtom);
  const [isMobileMenu, setMobileMenu] = useState(false);

  console.log(filterState);

  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenu]);

  return (
    <Frame scrollEventState={scrollEventState}>
      <NavigationFrame>
        <ImageWrapper width={12} height={2.5} onClick={() => router.push('/')}>
          <CustomImage src={logo} alt="logo" />
        </ImageWrapper>

        <DeskTopMenuWrapper>
          <MenuWrapper>
            <Font
              size={18}
              translateY={2}
              pointer={true}
              onClick={() => {
                setFilterState('all');

                if (router.pathname !== '/') {
                  router.push('/');
                }
              }}
            >
              전체
            </Font>

            <MenuLine />

            <Font
              size={18}
              translateY={2}
              pointer={true}
              onClick={() => {
                setFilterState('tech');

                if (router.pathname !== '/') {
                  router.push('/');
                }
              }}
            >
              기술 블로그
            </Font>

            <MenuLine />

            <Font
              size={18}
              translateY={2}
              pointer={true}
              onClick={() => {
                setFilterState('retrospect');

                if (router.pathname !== '/') {
                  router.push('/');
                }
              }}
            >
              회고 블로그
            </Font>
          </MenuWrapper>

          <Font size={21} translateY={2} pointer={true} onClick={() => router.push('/introduce')}>
            Introduce
          </Font>
        </DeskTopMenuWrapper>

        <MobileMenuFrame>
          {!isMobileMenu && (
            <ImageWrapper
              width={2.5}
              height={2.5}
              onClick={() => {
                setMobileMenu(!isMobileMenu);
              }}
            >
              <CustomImage src={mobileMenu} alt="mobile-menu" />
            </ImageWrapper>
          )}

          {isMobileMenu && (
            <ImageWrapper width={2.5} height={2.5} onClick={() => setMobileMenu(!isMobileMenu)}>
              <CustomImage src={closebBtn} alt="mobile-menu-close" />
            </ImageWrapper>
          )}

          <MobileMenuWrapper className={isMobileMenu ? 'showMobildeMenu' : 'hideMobildeMenu'}>
            <Font
              size={18}
              pointer={true}
              onClick={() => {
                setFilterState('all');
                setMobileMenu(!isMobileMenu);

                if (router.pathname !== '/') {
                  router.push('/');
                }
              }}
            >
              전체
            </Font>

            <Font
              size={18}
              pointer={true}
              onClick={() => {
                setFilterState('tech');
                setMobileMenu(!isMobileMenu);

                if (router.pathname !== '/') {
                  router.push('/');
                }
              }}
            >
              기술 블로그
            </Font>

            <Font
              size={18}
              pointer={true}
              onClick={() => {
                setFilterState('retrospect');
                setMobileMenu(!isMobileMenu);

                if (router.pathname !== '/') {
                  router.push('/');
                }
              }}
            >
              회고 블로그
            </Font>

            <Font
              size={21}
              pointer={true}
              onClick={() => {
                router.push('/introduce');
                setMobileMenu(false);
              }}
            >
              Introduce
            </Font>
          </MobileMenuWrapper>
        </MobileMenuFrame>
      </NavigationFrame>
    </Frame>
  );
};

export default Navigation;

/**
 * Frame
 */
const Frame = styled.nav<{ scrollEventState: boolean }>`
  position: sticky;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: center;

  height: 8rem;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  visibility: ${(props) => (props.scrollEventState ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.scrollEventState ? 0 : 1)};
  transition: all 0.2s;
`;

const NavigationFrame = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;

const MobileMenuFrame = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

/**
 * Wrapper
 */
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DeskTopMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 2;

  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s;

  &.showMobildeMenu {
    visibility: visible;
    opacity: 1;
  }

  &.hideMobildeMenu {
    opacity: 0;
  }
`;

/**
 * Etc
 */
const MenuLine = styled.div`
  width: 1px;
  height: 15px;
  border: 1px solid #989898;
`;

const CustomImage = styled(Image)`
  cursor: pointer;
  z-index: 3;
`;
