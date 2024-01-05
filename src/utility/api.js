import axios from "axios";

const api = axios.create({
  baseURL: "http://apis.data.go.kr/B551011/GoCamping",
  withCredentials: false,
});

export async function getLocationCamping(latitude, longtitude) {
  return await api.get(
    `/locationBasedList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=Hello&mapX=${longtitude}&mapY=${latitude}&radius=20000&_type=json`
  );
}

export async function getTemaCamping(id) {
  return await api.get(
    `/searchList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=Hello&keyword=${id}&_type=json`
  );
}
export async function getCampingImage(id) {
  return await api.get(
    `/imageList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${id}&_type=json`
  );
}
