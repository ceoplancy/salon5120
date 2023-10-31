import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';
import Font from 'components/common/font';
import useScrollEvent from 'hooks/useScrollEvent';
import { useRecoilState } from 'recoil';
import { filterStateAtom, toastStateAtom } from 'atoms';

const Navigation = () => {
  const router = useRouter();
  const { scrollEventState } = useScrollEvent();

  const [isMobileMenu, setMobileMenu] = useState(false);

  const [filterState, setFilterState] = useRecoilState(filterStateAtom);
  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const toastHandler = () => {
    setToastState(true);
    window.scrollTo(0, 0);
  };

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
        <CustomImageWrapper onClick={() => router.push('/')}>
          <CustomImage src={'/logo.svg'} alt="logo" layout="fill" />
        </CustomImageWrapper>

        {/* desktop */}
        <DeskTopMenuWrapper>
          <MenuWrapper>
            <Font
              size={18}
              pointer={true}
              fontWeight={600}
              onClick={() => {
                setFilterState('all');
                toastHandler();
                router.push('/about');
              }}
            >
              ABOUT
            </Font>

            <Font
              size={18}
              pointer={true}
              fontWeight={600}
              onClick={() => {
                setFilterState('tech');
                toastHandler();
                router.push('/exhibition');
              }}
            >
              EXHIBITION
            </Font>

            <Font
              size={18}
              pointer={true}
              fontWeight={600}
              onClick={() => {
                setFilterState('retrospect');
                toastHandler();
                router.push('/program');
              }}
            >
              PROGRAM
            </Font>

            <Font
              size={18}
              pointer={true}
              fontWeight={600}
              onClick={() => {
                setFilterState('retrospect');
                toastHandler();
                router.push('/webzine');
              }}
            >
              WEBZINE
            </Font>

            <Font
              size={18}
              pointer={true}
              fontWeight={600}
              onClick={() => {
                setFilterState('retrospect');
                toastHandler();
                router.push('/notice');
              }}
            >
              NOTICE
            </Font>
          </MenuWrapper>
        </DeskTopMenuWrapper>

        {/* mobile */}
        <MobileMenuFrame>
          {isMobileMenu && (
            <ToggleImageWrapper width="2rem" height="2rem" onClick={() => setMobileMenu(!isMobileMenu)}>
              <CustomImage width={20} height={20} src={'/close.svg'} alt="menu" layout="fill" />
            </ToggleImageWrapper>
          )}

          {!isMobileMenu && (
            <ToggleImageWrapper width="2rem" height="4.5rem" onClick={() => setMobileMenu(!isMobileMenu)}>
              <CustomImage width={20} height={45} src={'/menu.svg'} alt="menu" layout="fill" />
            </ToggleImageWrapper>
          )}

          <MobileMenuWrapper className={isMobileMenu ? 'showMobildeMenu' : 'hideMobildeMenu'}>
            <IconWrapper
              onClick={() => {
                setMobileMenu(!isMobileMenu);
                toastHandler();
                router.push('/about');
              }}
            >
              <ToggleImageWrapper width="2.4rem" height="2rem">
                <CustomImage width={24} height={20} src={'/blank.svg'} alt="menu" layout="fill" />
              </ToggleImageWrapper>

              <Font size={32} pointer={true} fontWeight={700}>
                ABOUT
              </Font>
            </IconWrapper>

            <IconWrapper
              onClick={() => {
                setMobileMenu(!isMobileMenu);
                toastHandler();
                router.push('/exhibition');
              }}
            >
              <ToggleImageWrapper width="2.4rem" height="2rem">
                <CustomImage width={24} height={20} src={'/square.svg'} alt="menu" layout="fill" />
              </ToggleImageWrapper>

              <Font size={32} pointer={true} fontWeight={700}>
                EXHIBITION
              </Font>
            </IconWrapper>

            <IconWrapper
              onClick={() => {
                setMobileMenu(!isMobileMenu);
                toastHandler();
                router.push('/program');
              }}
            >
              <ToggleImageWrapper width="2.4rem" height="2rem">
                <CustomImage width={24} height={20} src={'/roof.svg'} alt="menu" layout="fill" />
              </ToggleImageWrapper>

              <Font size={32} pointer={true} fontWeight={700}>
                PROGRAM
              </Font>
            </IconWrapper>

            <IconWrapper
              onClick={() => {
                setMobileMenu(!isMobileMenu);
                toastHandler();
                router.push('/webzine');
              }}
            >
              <ToggleImageWrapper width="2.4rem" height="2rem">
                <CustomImage width={24} height={20} src={'/blank.svg'} alt="menu" layout="fill" />
              </ToggleImageWrapper>

              <Font size={32} pointer={true} fontWeight={700}>
                WEBZINE
              </Font>
            </IconWrapper>

            <IconWrapper
              onClick={() => {
                setMobileMenu(!isMobileMenu);
                toastHandler();
                router.push('/notice');
              }}
            >
              <ToggleImageWrapper width="2.4rem" height="2rem">
                <CustomImage width={24} height={20} src={'/bookmark.svg'} alt="menu" layout="fill" />
              </ToggleImageWrapper>

              <Font size={32} pointer={true} fontWeight={700}>
                NOTICE
              </Font>
            </IconWrapper>
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
const Frame = styled.nav`
  display: flex;
  height: 8rem;

  position: sticky;
  top: 0;
  z-index: 3;

  background: #fff;
  border-bottom: 1px solid #000;
  padding: 3rem 6rem;

  @media screen and (max-width: 520px) {
    padding: 1.5rem;
  }

  visibility: ${(props) => (props.scrollEventState ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.scrollEventState ? 0 : 1)};
  transition: all 0.2s;
`;

const NavigationFrame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileMenuFrame = styled.div`
  display: none;

  @media screen and (max-width: 520px) {
    display: flex;
  }
`;

/**
 * Wrapper
 */
const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 7rem;
`;

const DeskTopMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: 520px) {
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
  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding-top: 1rem;
  margin-top: 8rem;
  padding-top: 2rem;
  padding-left: 2rem;

  &.showMobildeMenu {
    visibility: visible;
    opacity: 1;
  }

  &.hideMobildeMenu {
    opacity: 0;
  }
`;

const CustomImage = styled(Image)`
  cursor: pointer;
  z-index: 3;
`;

const CustomImageWrapper = styled.div`
  position: relative;
  width: 8rem;
  height: 4.6rem;
`;

const ToggleImageWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '3rem')};
  height: ${(props) => (props.height ? props.height : '3rem')};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
