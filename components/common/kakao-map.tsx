import React, { useEffect } from 'react';
import styled from 'styled-components';

/*global kakao*/

declare global {
  interface Window {
    kakao: any;
  }
}

const KaKaoMap = ({ locationData }: any): JSX.Element => {
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY;
  const test = 'cb94807ad82ce933bff117bb88c2babf';

  function getMap() {
    // 맵이 담긴 엘리먼트를 생성합니다.
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${test}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 4, // 확대레벨
          };

        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다.
        let zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        // 주소 -> 좌표 변환 객체를 생성합니다.
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소 -> 좌표 변환 객체를 bounds에 추가하여 평균거리를 확인해 확대레벨을 동적으로 만들어 줍니다.
        var bounds = new window.kakao.maps.LatLngBounds();

        locationData?.map((x: any) => {
          geocoder.addressSearch(x.latlng, function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다.
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // bounds에 좌표를 하나씩 추가해 줍니다.
              bounds.extend(coords);

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;height:30px;line-height:30px;text-align:center;font-size:14px;font-weight:bold;font-family: sans-serif;">${x.content}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 마커들을 결과값으로 받은 위치로 이동시킵니다.
              map.setBounds(bounds);
            }
          });
        });
      });
    };
  }

  useEffect(() => {
    getMap();
  }, []);

  return (
    <React.Fragment>
      <Maps id="map" />
    </React.Fragment>
  );
};

export default KaKaoMap;

const Maps = styled.div`
  width: 50rem;
  height: 50rem;
  margin: 2rem 0px;
  border-radius: 10px;
`;
