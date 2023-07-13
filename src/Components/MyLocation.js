import useGeolocation from "react-hook-geolocation";
import { useQuery, useQueryClient } from "react-query";
function MyLocation() {
  const geolocation = useGeolocation();
  const queryClient = useQueryClient();
  console.log(geolocation.latitude);
  const getList = async () => {
    const list = await fetch(
      `/B551011/GoCamping/locationBasedList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=Hello&mapX=${geolocation.longitude}&mapY=${geolocation.latitude}&radius=20000&_type=json`
    );
    const json = await list.json();
    return json;
  };

  const result = useQuery(["getLocationBasedList"], getList, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e.message);
    },
    select: (data) => {
      const filterData = data.response.body.items.item.filter(
        (list) => list.firstImageUrl !== ""
      );
      return filterData;
    },
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}

export default MyLocation;
