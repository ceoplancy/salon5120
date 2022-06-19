import styled from 'styled-components';

type Props = {
  width: number;
  height: number;
  onClick?: () => void;
  children?: any;
};

const ImageWrapper = (props: Props) => {
  const { width, height, onClick, children } = props;

  return (
    <Frame width={width} height={height} onClick={onClick}>
      {children}
    </Frame>
  );
};

export default ImageWrapper;

const Frame = styled.div<{ width: number; height: number }>`
  width: ${(props) => (props.width ? `${props.width}rem` : 0)};
  height: ${(props) => (props.height ? `${props.height}rem` : 0)};
`;
