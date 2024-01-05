import React from "react";
import { useNavigate } from "react-router-dom";

export default function CampingPlace({ list }) {
  const navigate = useNavigate();
  return (
    <div className="list_item" key={list.contentId}>
      <div
        className="camping_image"
        style={{
          background: `url(${list.firstImageUrl}) no-repeat center/cover `,
        }}
        onClick={() => {
          navigate(`/campingDetail/${list.contentId}`, {
            state: list,
          });
        }}
      >
        <div className="camping_text">
          <div className="camping_name">{list.facltNm}</div>
          <div className="camping_address">{list.addr1}</div>
          <div className="camping_address">{list.operPdCl}</div>
        </div>
      </div>
    </div>
  );
}
