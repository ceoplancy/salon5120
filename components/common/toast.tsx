import styled from 'styled-components';
import Font from 'components/common/font';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { filterStateAtom, toastStateAtom } from 'atoms';

type Props = {
  value: string;
};

const Toast = (props: Props) => {
  const [filterState, setFilterState] = useRecoilState(filterStateAtom);
  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  useEffect(() => {
    const handler: NodeJS.Timeout = setTimeout(() => {
      setToastState(false);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [toastState]);

  return (
    <Frame active={toastState}>
      <Font size={16} color="#fff">
        '{props.value}'가 선택되었습니다.
      </Font>
    </Frame>
  );
};

export default Toast;

const Frame = styled.div<{ active: boolean }>`
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 12rem;
  left: 42%;
  padding: 1rem 2rem;

  background-color: #777;
  border-radius: 10px;
`;
