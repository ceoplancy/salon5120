import styled from 'styled-components';

const Modal = (props: any) => {
  const { inRef, exceptRef, children } = props;
  return (
    <Background>
      <ModalCard ref={inRef}>{children}</ModalCard>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const ModalCard = styled.div`
  /* width: 400px; */
  /* min-height: 100%; */
  /* padding: 25px 30px; */

  width: 100rem;
  height: 80rem;

  display: flex;
  /* flex-direction: column;
  justify-content: center; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fff;
  border-radius: 20px;
`;
