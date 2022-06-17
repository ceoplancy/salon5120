import type { NextPage } from 'next';
import styled from 'styled-components';
import { useState } from 'react';
import { codeString, codeString2 } from 'constants/code-block-data/part-order';
import CodeBlockModal from 'components/modal/code-block-modal';
import Font from 'components/common/font';
import Line from 'components/common/Line';
import Footer from 'components/common/footer';

const Home: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);

  return (
    <Frame>
      <p>Home</p>

      <Line />

      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        코드보기1
      </button>

      <button
        onClick={() => {
          setModalOpen2(true);
        }}
      >
        코드보기2
      </button>

      <CodeBlockModal isModalOpen={isModalOpen} setModalOpen={setModalOpen} codeString={codeString} />

      <CodeBlockModal isModalOpen={isModalOpen2} setModalOpen={setModalOpen2} codeString={codeString2} />

      <Font size={12} translateY={20}>
        테스트입니다.
      </Font>

      <Footer />
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
