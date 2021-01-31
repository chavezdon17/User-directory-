import React from "react";
import userInfo from "./API/API.js";
import Tables from "./components/Tables/tables.js";

function App() {
  return <Tables employees={userInfo}> </Tables>;
}

export default App;
