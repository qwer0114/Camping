import { useQuery } from "react-query";
import { getCampingImage } from "../../utility/api";

export function useCampingImage(id) {
  console.log(id.contentId);
  return useQuery({
    queryKey: ["CampingImage", id],
    queryFn: () => getCampingImage(id.contentId),
    onSuccess: (data) => {
      console.log(data);
    },
    select: (data) => {
      return data.data.response.body.items.item;
    },
  });
}
