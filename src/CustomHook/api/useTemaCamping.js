import { getTemaCamping } from "../../utility/api";
import { useQuery } from "react-query";
export function useTemaCamping(id) {
  return useQuery({
    queryKey: ["getLoationList", id],
    queryFn: () => getTemaCamping(id),
    onSuccess: (data) => {
      console.log(data);
    },
    select: (data) => {
      const filterData = data?.data?.response.body.items.item.filter(
        (list) => list.firstImageUrl !== ""
      );
      return filterData;
    },
  });
}
