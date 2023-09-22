import React, { useRef } from "react";
import ProfilePhoto from "../Assets/white BG.jpg";
import "../CSS/StyleSideBar.css";
function Sidebar({ Rio, setRio }) {
  const ParivaarStyle = useRef();
  const SurakhshaStyle = useRef();
  function RioParivaar() {
    setRio(true);
    SurakhshaStyle.current.style.backgroundColor = "transparent";
    SurakhshaStyle.current.style.color = "#0D61D3";
    ParivaarStyle.current.style.backgroundColor = "#0D61D3";
    ParivaarStyle.current.style.color = "#F8F8F8";
  }
  function RiyoSurakhsha() {
    setRio(false);
    ParivaarStyle.current.style.backgroundColor = "transparent";
    ParivaarStyle.current.style.color = "#0D61D3";
    SurakhshaStyle.current.style.backgroundColor = "#0D61D3";
    SurakhshaStyle.current.style.color = "#F8F8F8";
  }
  return (
    <>
      <div className="container NameBox">
        <div className="ProfilePhoto container">
          <img className="pp1" src={ProfilePhoto} alt="" />
          <div className="pp2">
            Name: <b> Arnab Kundu</b>
          </div>
          <div className="pp3">
            Unique ID: <b>RJA1</b>
          </div>
        </div>
        <div className="RiyoTwo">
          <div
            ref={ParivaarStyle}
            onClick={RioParivaar}
            className="Application_container1 pt-2 pb-2"
          >
            <b>Riyo Parivaar Application</b>
          </div>
          <div
            ref={SurakhshaStyle}
            onClick={RiyoSurakhsha}
            className="Application_container2 pt-2 pb-2"
          >
            <b>Riyo Suraksha Application</b>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
