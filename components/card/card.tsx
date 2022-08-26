import styled from 'styled-components';
import Font from 'components/common/font';
import Image from 'next/image';
import Link from 'next/link';
import { cardDataType } from 'constants/card-title/index';
import { useRouter } from 'next/router';

type Props = {
  data: cardDataType;
};

const Card = ({ data }: Props) => {
  const router = useRouter();

  return (
    <Link href={data.url}>
      <Frame>
        <ImageWrapper>
          <Image src={data.imageUrl} alt="card-thumbnail" layout="fill" priority={true} quality={100} />
        </ImageWrapper>

        <Title size={18} fontWeight={600} lineHeight="2.4rem">
          {data.title}
        </Title>

        <Date size={14} color="#545454">
          {data.createdAt}
        </Date>
      </Frame>
    </Link>
  );
};

export default Card;

const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 38rem;
  padding: 1.5rem;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  transition: all 0.2s;
  cursor: pointer;

  @media screen and (max-width: 520px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 501px) {
    &:hover {
      transform: translateY(-30px);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 24rem;
  height: 24rem;

  img {
    border-radius: 10px;
  }

  margin: 0 auto;
`;

const Title = styled(Font)`
  @media screen and (max-width: 520px) {
    margin-bottom: 3rem;
  }
`;

const Date = styled(Font)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
