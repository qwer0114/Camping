import { async } from "q";
import { useEffect, useState } from "react";

function useFetch(url) {
  const getFetch = async () => {
    const list = await fetch(`${url}`);
    const json = await list.json();
    return json;
  };

  return getFetch;
}

export default useFetch;
