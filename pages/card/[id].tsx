import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FontButton } from 'components/card/detail';

const CardDetail = () => {
  const router = useRouter();
  const cardId = router.query.id;

  return (
    <React.Fragment>
      <div>{router.query.id}</div>

      {cardId === '1' && <FontButton />}
    </React.Fragment>
  );
};

export default CardDetail;
