import styled from 'styled-components';
import Font from 'components/common/font';

const Navigation = () => {
  return (
    <Frame>
      <Font size={21} pointer={true}>
        logo
      </Font>

      <MenuWrapper>
        <Font size={16} translateY={2} pointer={true}>
          All
        </Font>

        <MenuLine />

        <Font size={16} translateY={2} pointer={true}>
          Components
        </Font>

        <MenuLine />

        <Font size={16} translateY={2} pointer={true}>
          Blog
        </Font>
      </MenuWrapper>

      <Font size={16} translateY={2} pointer={true}>
        Introduce
      </Font>
    </Frame>
  );
};

export default Navigation;

const Frame = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #fff;
  border: 1px solid red;
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
