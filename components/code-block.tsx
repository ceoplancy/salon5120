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

  /**
   * 코드 블록 width 지정이 필요한 경우(% 단위로 입력)
   */
  width?: number;
};

const CodeBlock = (props: Props) => {
  const { codeString, width } = props;

  return (
    <Suspense
      fallback={
        <DotSpinnerWrapper>
          <DotSpinner width={18} height={18} marginRight={18} dotColor="#4141E7" />
        </DotSpinnerWrapper>
      }
    >
      <FadeIn>
        <CodeBlockWrapper width={width}>
          <SyntaxHighlighter language="javascript" showLineNumbers={true}>
            {codeString}
          </SyntaxHighlighter>
        </CodeBlockWrapper>
      </FadeIn>
    </Suspense>
  );
};

export default CodeBlock;

const CodeBlockWrapper = styled.div<{ width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  pre {
    width: ${(props) => (props.width ? `${props.width}%` : '100%')};
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    pre {
      width: 100%;
    }
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
