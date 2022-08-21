import styled from 'styled-components';
import Font from 'components/common/font';
import Image from 'next/image';
import { cardDataType } from 'constants/card-title/index';
import { useRouter } from 'next/router';

type Props = {
  data: cardDataType;
};

const Card = ({ data }: Props) => {
  const router = useRouter();

  return (
    <a href={data.url} target="_blank">
      <Frame>
        <ImageWrapper>
          <CustomImage src={data.imageUrl} alt="card-thumbnail" layout="fill" priority={true} quality={100} />
        </ImageWrapper>

        <Font size={18} fontWeight={600} margin="10px 0px 0px 0px" lineHeight="2.4rem">
          {data.title}
        </Font>

        <Font size={14} color="#545454" margin="10px 0px 0px 0px">
          {data.createdAt}
        </Font>
      </Frame>
    </a>
  );
};

export default Card;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 27rem;
  height: 48rem;
  padding: 10px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  transition: all 0.2s;
  cursor: pointer;

  @media screen and (min-width: 501px) {
    &:hover {
      transform: translateY(-30px);
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

const CustomImage = styled(Image)`
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 27rem;
`;
