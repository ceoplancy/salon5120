import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { codeString, codeString2 } from 'constants/code-block-data/part-order';
import CodeBlockModal from 'components/modal/code-block-modal';

const CardDetail = () => {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);

  return (
    <Frame>
      <div>{router.query.id}</div>

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
    </Frame>
  );
};

export default CardDetail;

const Frame = styled.div`
  width: 100%;
  display: flex;

  pre {
    font-size: 2rem;
  }
`;
