import React, { useRef, useState } from "react";
import "../CSS/StyleRandC.css";
import Adhaar1 from "../Assets/pp1.jpg";
import Adhaar2 from "../Assets/thumb.jpg";
import Whiteimg from "../Assets/white BG.jpg";
function RandC({ nowstyle, setstyle, setDataTable, data }) {
  const RejectMsg = useRef();
  const register = useRef();
  const complete = useRef();
  const [AccRej, AccRejDisplay] = useState({ display: "flex" });
  const [Adhaar, AdhaarDisplay] = useState({ display: "none" });
  const [License, LicenseDisplay] = useState({ display: "none" });
  const CrossBtn = () => {
    setstyle({ display: "none" });
    RejectMsg.current.style.display = "none";
    AccRejDisplay({ display: "flex" });
  };

  const CrossBtnNew = () => {
    AdhaarDisplay({ display: "none" });
    LicenseDisplay({ display: "none" });
    setstyle({ display: "block" });
  };

  const RejectBtn = () => {
    RejectMsg.current.style.display = "block";
    AccRejDisplay({ display: "none" });
  };

  function AdhaarPop1() {
    setstyle({ display: "none" });
    AdhaarDisplay({ display: "block" });
  }

  function AdhaarPop2() {
    setstyle({ display: "none" });
    LicenseDisplay({ display: "block" });
  }
  function completedParivaar(e) {
    e.preventDefault();
    register.current.style.color = "#505050";
    register.current.style.backgroundColor = "#ACACAC";
    complete.current.style.color = "#F8F8F8";
    complete.current.style.backgroundColor = "#2c7ff4";
    setDataTable(0);
  }
  function registrationParivaar(e) {
    e.preventDefault();
    register.current.style.color = "#F8F8F8";
    register.current.style.backgroundColor = "#2c7ff4";
    complete.current.style.color = "#505050";
    complete.current.style.backgroundColor = "#ACACAC";
    setDataTable(1);
  }
  return (
    <div className="container DataTable">
      <div className="twoSection mb-1">
        <div
          className="registration"
          ref={register}
          onClick={registrationParivaar}
        >
          New Registration
        </div>
        <div className="completed" ref={complete} onClick={completedParivaar}>
          Completed
        </div>
      </div>
      <div id="pop" style={nowstyle} className="z-2">
        <div id="Cross" onClick={CrossBtn} className="cross">
          <i className="fa-solid fa-xmark CrossMark"></i>
        </div>
        <div className="date">
          <span style={{ marginRight: "3%" }}>
            Date: <b>09/04/2023</b>
          </span>
          <span>
            Time: <b>1:00 pm</b>
          </span>
        </div>
        <div className="container popContainer mt-4 justify-content-between">
          <img className="popPp1" src={Whiteimg} alt="" />
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ marginLeft: "-15%" }}
          >
            <div className="pp2">
              Name: <b> Arnab Kundu</b>
            </div>
            <p className="pp3" style={{ marginLeft: "-22%" }}>
              Unique ID: <b>RJA1</b>
            </p>
          </div>

          <div
            className="d-flex flex-row justify-content-center justify-content-between"
            style={{ height: "40%", width: "40%" }}
          >
            <div className="ViewDetails text-center" onClick={AdhaarPop1}>
              <b>
                <p className="click_view mt-1 mb-0">Click to view</p>
                <p className="mb-1" style={{ color: "#85ee4d" }}>
                  Adhaar Card
                </p>
              </b>
            </div>
            <div className="ViewDetails text-center" onClick={AdhaarPop2}>
              <b>
                <p className="click_view mt-1 mb-0">Click to view</p>
                <p className="mb-1" style={{ color: "#85ee4d" }}>
                  License
                </p>
              </b>
            </div>
          </div>
        </div>
        <div className="MobileNo">
          Mobile Number: <b style={{ color: "#85ee4d" }}>9876-453-654</b>
        </div>
        <div
          className=" justify-content-end mb-5"
          style={AccRej}
          id="AcceptReject"
        >
          <button className="Reject" onClick={RejectBtn}>
            Reject
          </button>
          <button className="Accept" onClick={CrossBtn}>
            Accept
          </button>
        </div>
        <div
          className="RejectMessage "
          id="RejectMessageid"
          ref={RejectMsg}
          style={{ display: "none" }}
        >
          <form style={{ width: "100%" }} action="">
            <label className="textarea-label">Why Rejected</label>
            <textarea
              type="text"
              name="rejection"
              rows="3"
              className="txtarea-margin"
              style={{ width: "90%" }}
              placeholder="Explain the problem in short here"
            ></textarea>
            <button
              type="submit"
              className="Accept"
              onClick={CrossBtn}
              style={{ marginLeft: "80%" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div id="pop1" style={Adhaar} className="z-2">
        <div id="Cross" onClick={CrossBtnNew} className="cross">
          <i className="fa-solid fa-xmark CrossMark"></i>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center mt-4 mb-4">
          <div className="me-4">
            <p
              className="text-center fs-4 fw-bold"
              style={{ color: "#505050" }}
            >
              Adhaar Card Front View
            </p>
            <img className="Adhaar-image rounded" src={Adhaar1} alt="" />
          </div>
          <div className="ms-4">
            <p
              className="text-center fs-4 fw-bold"
              style={{ color: "#505050" }}
            >
              Adhaar Card Back View
            </p>
            <img className="Adhaar-image rounded" src={Adhaar2} alt="" />
          </div>
        </div>
      </div>
      <div id="pop2" style={License} className="z-2">
        <div id="Cross" onClick={CrossBtnNew} className="cross">
          <i className="fa-solid fa-xmark CrossMark"></i>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center mt-4 mb-4">
          <div>
            <p
              className="text-center fs-4 fw-bold"
              style={{ color: "#505050" }}
            >
              Adhaar Card Back View
            </p>
            <img className="Adhaar-image rounded" src={Adhaar1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandC;
