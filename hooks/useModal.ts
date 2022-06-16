import { useState, useEffect, useCallback } from 'react';
import useOnClickOutside from './useOnClickOutside';

/* modal custom hook */

type PropsT = {
  // 바깥을 클릭 했을 때 setState함수가 실행 됨(사용하고자 하는 모달 태그에 ref속성으로 넣어준다.)
  inRef: React.RefObject<HTMLInputElement>;

  // 해당 버튼을 눌렀을 때 다시 modalopen이 되지 않게 함(사용하고자 하는 버튼에 ref속성으로 넣어준다.)
  exceptRef: React.RefObject<HTMLInputElement>;

  // 모달 켰을 때 스크롤 되지 않게 하려면 true로 설정
  overflowHidden?: boolean;
};

const useModal = ({ inRef, exceptRef, overflowHidden = true }: PropsT) => {
  // Client State
  const [modalOpen, setModalOpen] = useState(false);

  useOnClickOutside({ inRef, exceptRef, handler: () => setModalOpen(false) });

  const togglePopUp = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  // 열려 있을 때 스크롤 막기
  useEffect(() => {
    if (overflowHidden && modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen, overflowHidden]);

  return { modalOpen, togglePopUp };
};

export default useModal;
