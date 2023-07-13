import { useQuery, useQueryClient } from "react-query";
export function useAPI(queryName, fetchFunc) {
  return useQuery(queryName, fetchFunc, {
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
