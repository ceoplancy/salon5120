import KaKaoMap from 'components/common/kakao-map';
import styled from 'styled-components';

const Test = () => {
  const makeLocation = (customer: any) => {
    return [
      {
        content: customer?.data?.name,
        latlng: customer?.data?.address,
      },
    ];
  };

  return (
    <Frame>
      <KaKaoMap
        locationData={[
          { content: '1번 고객', latlng: '서울 강남구 강남대로94길 86' },
          { content: '2번 고객', latlng: '청계천로' },
          { content: '3번 고객', latlng: '서울특별시 중구 을지로3가' },
        ]}
      />
    </Frame>
  );
};

export default Test;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
