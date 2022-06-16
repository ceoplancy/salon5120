import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { codeString } from 'constants/code-block-data/part-order';
import useOnClickOutside from 'hooks/useOnClickOutside';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'), { ssr: false });

const Home: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const codeModalInRef: any = useRef();
  const codeModalExceptRef: any = useRef();
  useOnClickOutside({
    inRef: codeModalInRef,
    exceptRef: codeModalExceptRef,
    handler: () => {
      setModalOpen(false);
    },
  });

  return (
    <Frame>
      <p>Home</p>

      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        코드보기
      </button>

      <CodeBlockFrame className={isModalOpen ? 'showCodeBlock' : 'hideCodeBlock'} isModalOpen={isModalOpen}>
        <CodeBlockWrapper ref={codeModalInRef}>
          <CustomSyntaxHighlighter language="javascript">{codeString}</CustomSyntaxHighlighter>

          <CloseButton onClick={() => setModalOpen(false)}>닫기</CloseButton>
        </CodeBlockWrapper>
      </CodeBlockFrame>

      <div>asdasdasdasd</div>
    </Frame>
  );
};

export default Home;

const Frame = styled.div`
  width: 100%;

  pre {
    font-size: 2rem;
  }
`;

const CodeBlockFrame = styled.div<{ isModalOpen: boolean }>`
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
  width: 140rem;
  height: 90rem;
`;

const CustomSyntaxHighlighter = styled(SyntaxHighlighter)`
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
`;
