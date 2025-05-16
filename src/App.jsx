import React, { useState } from "react";
import FinalApp from "./tooltip/FinalApp";
import BarChart from "./chartLibrary/BarChart";
import Form from "./lableAccess/Form";
import CheckForm from "./customCheckbox/CheckForm";
import PanelGroup from "./collapsiblePanels/PanelGroup";
import DragItem from "./dragAndDrop/DragItem";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FinalComp from "./chartLibrary/FinalComp";
import ToolTipWithTag from "./tooltip/ToolTipWithTag";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FinalApp />} />
          <Route path="/dragDrop" element={<DragItem />} />
          <Route path="/chart" element={<FinalComp />} />
          <Route path="/lable" element={<Form />} />
          <Route path="/checkform" element={<CheckForm />} />
          <Route path="/panels" element={<PanelGroup />} />
        </Routes>
        <div className="menu">
          <Link to="/">Scenario 1:</Link>
          <Link to="/dragDrop">Scenario 2:</Link>
          <Link to="/chart">Scenario 3:</Link>
          <Link to="/lable">Scenario 4:</Link>
          <Link to="/checkform">Scenario 5:</Link>
          <Link to="/panels">Scenario 6:</Link>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
