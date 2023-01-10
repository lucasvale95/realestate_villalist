import { Route, Routes } from "react-router-dom";
import Completo from "../components/Completo";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Completo />} />
    </Routes>
  );
};

export default RoutesMain;
