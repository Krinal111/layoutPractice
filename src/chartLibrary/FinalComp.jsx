import React, { useState } from "react";
import BarChart from "./BarChart";

function FinalComp() {
  const [data, setData] = useState([
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 15 },
    { name: "D", value: 50 },
    { name: "E", value: 30 },
    { name: "F", value: 35 },
    { name: "G", value: 20 },
  ]);
  return <BarChart data={data} />;
}

export default FinalComp;
