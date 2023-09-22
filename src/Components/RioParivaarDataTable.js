import React, { useEffect, useRef, useState } from "react";
import "../CSS/StyleDataTable.css";
function DataTable({ setstyle, Rio }) {
  const [UserData, SetData] = useState([]);
  const ShowPopUp = () => {
    setstyle({ display: "block" });
  };

  useEffect(() => {
    const PorS = Rio
      ? "https://jsonplaceholder.typicode.com/users"
      : "https://fakestoreapi.com/products";
    console.log(PorS);
    fetch(PorS)
      .then((response) => response.json())
      .then((data) => {
        SetData(data);
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {};
  }, [Rio]);
  return (
    <>
      <div className="container DataTable mt-0">
        <table id="T1">
          <thead>
            <tr>
              <th>S. No</th>
              <th>Date</th>
              <th>Name</th>
              <th>Unique ID</th>
              <th>Number</th>
              <th>Application</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((Element, index) => {
              if (index % 2 === 0) {
                return (
                  <tr className="datarow1" key={index}>
                    <td>{Element.id}</td>
                    <td>12-11-2022</td>
                    <td>{Element.name}</td>
                    <td>RP-A-3240</td>
                    <td>{Element.phone}</td>
                    <td>
                      <a
                        className="anchorView"
                        onClick={ShowPopUp}
                        id="AnchorView"
                        href="#"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr className="datarow2" key={index}>
                    <td>{Element.id}</td>
                    <td>12-11-2022</td>
                    <td>{Element.name}</td>
                    <td>RP-A-3240</td>
                    <td>{Element.phone}</td>
                    <td>
                      <a
                        className="anchorView"
                        onClick={ShowPopUp}
                        id="AnchorView"
                        href="#"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                );
              }
            })}
            {/* <tr className="datarow1">
              <td>1</td>
              <td>12-11-2022</td>
              <td>Arnab Kundu</td>
              <td>RP-A-3240</td>
              <td>6547-016-987</td>
              <td>
                <a
                  className="anchorView"
                  onClick={ShowPopUp}
                  id="AnchorView"
                  href="#"
                >
                  View
                </a>
              </td>
            </tr>
            <tr className="datarow2">
              <td>2</td>
              <td>12-11-2022</td>
              <td>Sanjay das</td>
              <td>RP-A-3241</td>
              <td>6547-015-987</td>
              <td>
                <a className="anchorView" onClick={ShowPopUp} href="#">
                  View
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;
