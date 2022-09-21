import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import AllCars from "./pages/AllCars";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<AllCars />}></Route>
          <Route path="/add-car" element={<AddCar />}></Route>
          <Route path="/edit-car/:id" element={<EditCar />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
