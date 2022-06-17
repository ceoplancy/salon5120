import styled from 'styled-components';
import Font from './common/font';
import Image from 'next/image';

const Card = () => {
  return (
    <Frame>
      <Image src="" alt="card-thumbnail" />

      <Font size={14} color="#545454">
        createdAt
      </Font>

      <Font size={16} fontWeight={600}>
        title
      </Font>

      <Font size={14} color="#545454">
        sub title
      </Font>
    </Frame>
  );
};

export default Card;

const Frame = styled.div`
  display: flex;

  border: 1px solid red;
`;
