let filter = (campingList, checkValue) => {
  let filterList = campingList.filter((campinglist) => {
    return checkValue.every((checkValue) => {
      return (
        campinglist.sbrsCl.includes(checkValue) ||
        campinglist.glampInnerFclty.includes(checkValue) ||
        campinglist.caravInnerFclty.includes(checkValue)
      );
    });
  });
  return filterList;
};

export default filter;
