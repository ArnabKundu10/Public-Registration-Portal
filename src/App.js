import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar";
import Sidebar from "./Components/SideBar";
import SearchBtn from "./Components/SearchBtn";
import RandC from "./Components/RegisterAndCompleteHeading";
import DataTable from "./Components/RioParivaarDataTable";
import DataTableComplete from "./Components/DataTableComplete";

function RioParivaar() {
  const [nowstyle, setstyle] = useState({ display: "none" });
  const [data, setDataTable] = useState(true);
  const [Rio, setRio] = useState(true);
  return (
    <>
      <Navbar></Navbar>
      <Sidebar Rio={Rio} setRio={setRio} />
      <SearchBtn />
      <RandC
        nowstyle={nowstyle}
        data={data}
        setstyle={setstyle}
        setDataTable={setDataTable}
      />
      {data ? (
        <DataTable setstyle={setstyle} Rio={Rio} />
      ) : (
        <DataTableComplete Rio={Rio} />
      )}
    </>
  );
}

export default RioParivaar;
