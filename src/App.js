import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MyCart from "./Pages/MyCart";
import UserDetailsPage from "./Pages/UserDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/user-details-form" element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
