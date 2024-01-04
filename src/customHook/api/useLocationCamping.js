import { getLocationCamping } from "../../utility/api";
import { useQuery } from "react-query";
export function useLocationCamping(longtitude, latitude) {
  return useQuery({
    queryKey: ["getLoationList", longtitude, latitude],
    queryFn: () => getLocationCamping(longtitude, latitude),
    onSuccess: (data) => {
      console.log(data);
    },
    select: (data) => {
      console.log(data);
      const filterData = data?.data?.response.body.items.item.filter(
        (list) => list.firstImageUrl !== ""
      );
      return filterData;
    },
  });
}
