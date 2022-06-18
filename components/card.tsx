import styled from 'styled-components';
import Font from './common/font';
import Image from 'next/image';
import { cardDataType } from 'constants/card/index';
import { useRouter } from 'next/router';

type Props = {
  data: cardDataType;
};

const Card = ({ data }: Props) => {
  const router = useRouter();

  return (
    <Frame onClick={() => router.push(`/card/${data.id}`)}>
      <CustomImage src={data.imageUrl} alt="card-thumbnail" layout="responsive" width={280} height={300} />

      <FontWrapper>
        <Font size={26} fontWeight={600}>
          {data.title}
        </Font>

        <Font size={21} color="#545454">
          {data.subTitle}
        </Font>
      </FontWrapper>

      <Font size={14} color="#545454" margin="10px 0px 0px 0px">
        {data.createdAt}
      </Font>
    </Frame>
  );
};

export default Card;

const Frame = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30rem;
  height: 40rem;
  padding: 10px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

const CustomImage = styled(Image)`
  border-radius: 10px;
`;

const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
