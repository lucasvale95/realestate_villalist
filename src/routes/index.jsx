import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default RoutesMain;
