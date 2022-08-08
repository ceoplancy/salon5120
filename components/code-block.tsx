import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import DotSpinner from 'components/common/dot-spinner';
import FadeIn from 'react-fade-in';

const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'), { suspense: true });

type Props = {
  /**
   * 코드 블록에 들어갈 code string
   */
  codeString: string;
};

const CodeBlock = (props: Props) => {
  const { codeString } = props;

  return (
    <div>
      <Suspense
        fallback={
          <DotSpinnerWrapper>
            <DotSpinner width={18} height={18} marginRight={18} dotColor="#4141E7" />
          </DotSpinnerWrapper>
        }
      >
        <FadeIn>
          <CodeBlockWrapper>
            <SyntaxHighlighter language="javascript" showLineNumbers={false}>
              {codeString}
            </SyntaxHighlighter>
          </CodeBlockWrapper>
        </FadeIn>
      </Suspense>
    </div>
  );
};

export default CodeBlock;

const CodeBlockWrapper = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  pre {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const DotSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 10rem;
`;
