import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { useRef } from 'react';
import Image from 'next/image';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { close } from 'public/common';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'), { ssr: false });

type Props = {
  /**
   * 모달의 열고 닫음 상태
   */
  isModalOpen: boolean;

  /**
   * 모달의 열고 닫음 상태를 바꿀 수 있는 함수
   */
  setModalOpen: (isModalOpen: boolean) => void;

  /**
   * 코드 블록에 들어갈 code string
   */
  codeString: string;
};

const CodeBlockModal = (props: Props) => {
  const { isModalOpen, setModalOpen, codeString } = props;

  const codeModalInRef: React.RefObject<HTMLInputElement> | null = useRef(null);
  const codeModalExceptRef: React.RefObject<HTMLInputElement> | null = useRef(null);

  useOnClickOutside({
    inRef: codeModalInRef,
    exceptRef: codeModalExceptRef,
    handler: () => {
      setModalOpen(false);
    },
  });

  return (
    <CodeBlockFrame className={isModalOpen ? 'showCodeBlock' : 'hideCodeBlock'}>
      <CodeBlockWrapper ref={codeModalInRef}>
        <CustomSyntaxHighlighter language="javascript">{codeString}</CustomSyntaxHighlighter>

        <CloseButton onClick={() => setModalOpen(false)}>
          <Image src={close} alt="close" width={30} height={30} />
        </CloseButton>
      </CodeBlockWrapper>
    </CodeBlockFrame>
  );
};

export default CodeBlockModal;

const CodeBlockFrame = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  &.showCodeBlock {
    visibility: visible;
    opacity: 1;
  }

  &.hideCodeBlock {
    opacity: 0;
  }
`;

const CodeBlockWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 85%;
  height: 85%;

  pre {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  cursor: pointer;

  @media screen and (max-width: 520px) {
    top: 10px;
    right: 15px;
  }
`;
