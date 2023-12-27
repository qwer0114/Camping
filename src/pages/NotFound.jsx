import React from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound_page">
      <div className="notFound_message">404 Error</div>
      <div className="notFound_subText">
        죄송합니다. 페이지를 찾을 수 없습니다.
        <br /> 존재하지 않는 주소를 입력하셨거나, 요청하신 주소가 변경, <br />
        삭제되어 찾을 수 없습니다
      </div>
      <img src={logo} alt="logo"></img>
      <div
        className="notFound_link"
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </div>
    </div>
  );
}
