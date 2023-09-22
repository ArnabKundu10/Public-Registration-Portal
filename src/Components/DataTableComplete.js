import React, { useEffect, useRef, useState } from "react";
import "../CSS/StyleDataTable.css";
function DataTable({ Rio }) {
  const [UserData, SetData] = useState([]);
  const PorS = Rio
    ? "https://jsonplaceholder.typicode.com/users"
    : "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(PorS)
      .then((response) => response.json())
      .then((data) => {
        SetData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
              <th>Application Status</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((Element, index) => {
              if (Element.id % 2 !== 0) {
                return (
                  <tr className="datarow1" key={index}>
                    <td>{Element.id}</td>
                    <td>12-11-2022</td>
                    <td>{Element.name}</td>
                    <td>RP-A-3240</td>
                    <td>{Element.phone}</td>
                    <td className="green">
                      <b>Accepted</b>
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
                    <td className="red">
                      <b>Rejected</b>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;
