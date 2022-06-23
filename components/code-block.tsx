import dynamic from 'next/dynamic';
import styled from 'styled-components';
import codeString from 'constants/code-block-data/profile';
import { Suspense } from 'react';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'), { suspense: true });

const CodeBlock = () => {
  return (
    <>
      {!SyntaxHighlighter ? (
        <div>loading....</div>
      ) : (
        <Suspense fallback={`loading...`}>
          <SyntaxHighlighter language="javascript">{codeString}</SyntaxHighlighter>
        </Suspense>
      )}
    </>
  );
};

export default CodeBlock;
