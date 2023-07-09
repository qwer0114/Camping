import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import CampingLists from "./CampingLists";
import Loading from "./Loading";
function TemaCamping() {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const getList = async () => {
    const list = await fetch(
      `/B551011/GoCamping/searchList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=Hello&keyword=${id}&_type=json`
    );
    const json = await list.json();
    return json;
  };

  const result = useQuery(["getTemaList", id], getList, {
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
  });
  return (
    <div className="camping-page">
      <NavBar></NavBar>
      {result.isLoading === true ? (
        <Loading></Loading>
      ) : (
        <CampingLists campingList={result.data}></CampingLists>
      )}
    </div>
  );
}

export default TemaCamping;
