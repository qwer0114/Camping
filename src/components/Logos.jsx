import React from "react";
import Logo from "./Logo";
export default function Logos() {
  return (
    <div className="main_icons">
      <div className="main_icon_group">
        <Logo
          path={"icon-mountain"}
          title={"산"}
          navigatePath={"search?tema=산"}
        ></Logo>
        <Logo
          path={"icon-sea"}
          title={"바다"}
          navigatePath={"search?tema=바다"}
        ></Logo>
        <Logo
          path={"icon-river"}
          title={"계곡"}
          navigatePath={"search?tema=계곡"}
        ></Logo>
      </div>
      <div className="main_icon_group">
        <Logo
          path={"icon-camping"}
          title={"글램핑"}
          navigatePath={"search?tema=글램핑"}
        ></Logo>
        <Logo
          path={"icon-carvan"}
          title={"카라반"}
          navigatePath={"search?tema=카라반"}
        ></Logo>
        <Logo
          path={"icon-korea"}
          title={"지역"}
          navigatePath={"place/지역/경기도"}
        ></Logo>
      </div>
    </div>
  );
}
