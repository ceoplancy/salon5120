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

  //   const map = useMemo(() => {
  //     if (!customer) return;
  //     return <KakaoMap locationData={makeLocation(customer)} />;
  //   }, [customer]);

  return (
    <Frame>
      <KaKaoMap
        locationData={[
          { content: '우리집', latlng: '청계천로 461' },
          { content: '누나집', latlng: '마장로 137' },
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
