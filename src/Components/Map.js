import React, { useEffect } from "react";

const { kakao } = window;

function Map({ lat, lng }) {
  const markerPosition = new kakao.maps.LatLng(Number(lat), Number(lng));

  const marker = new kakao.maps.Marker({
    position: markerPosition,
    clickable: true,
  });
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(Number(lat), Number(lng)), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    marker.setMap(map);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "500px", marginBottom: "100px" }}
    ></div>
  );
}

export default Map;
