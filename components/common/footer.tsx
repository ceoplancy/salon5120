import styled from 'styled-components';

const Footer = () => {
  return <Frame>footer</Frame>;
};

export default Footer;

const Frame = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  position: absolute;
  bottom: 0;
  left: 0;

  border: 1px solid red;
`;
