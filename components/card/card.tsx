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
        <CustomImage src={data.imageUrl} alt="card-thumbnail" layout="responsive" width={280} height={300} />

        <FontWrapper>
          <Font size={24} fontWeight={600}>
            {data.title}
          </Font>

          <Font size={18} color="#545454">
            {data.subTitle}
          </Font>
        </FontWrapper>

        <Font size={14} color="#545454" margin="10px 0px 0px 0px">
          {data.createdAt}
        </Font>
      </Frame>
    </a>
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

const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
