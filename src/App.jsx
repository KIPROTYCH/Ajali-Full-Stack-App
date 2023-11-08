// import { Routes, Route } from "react-router-dom";
// import LogIn from "./components/Login";
// import SignUp from "./components/SignUp";
// import NavBar from "./components/Navbar";
// import HomePage from "./components/HomePage";
// import Reviews from "./components/Reviews";
// import Emergencies from "./components/Emergencies";
// import AdminPage from "./components/Admin";
// import Map from "./components/Map";
// import AdminDashboard from "./components/AdminDashboard";
// import AboutPage from "./components/AboutPage";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <NavBar />
//       <Routes>
//         <Route path="/" exact element={<HomePage />} />
//         <Route path="/Emergencies" element={<Emergencies />} />
//         <Route path="/signup" exact element={<SignUp />} />
//         <Route path="/login" exact element={<LogIn />} />
//         <Route path="/reviews" exact element={<Reviews />} />{" "}
//         <Route path="/Admin" exact element={<AdminPage />} />
//         <Route path="/Map" exact element={<Map />} />
//         <Route path="/AdminDashboard" exact element={<AdminDashboard />} />
//         <Route path="/AboutPage" exact element={<AboutPage />} />
//         <Route path="/Footer" exact element={<Footer />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////////


import { Routes, Route } from "react-router-dom";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Reviews from "./components/Reviews";
import Emergencies from "./components/Emergencies";
import AdminPage from "./components/Admin";
import Map from "./components/Map";
import MapPage from "./components/MapPage";
import AdminDashboard from "./components/AdminDashboard";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Emergencies" element={<Emergencies />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/reviews" exact element={<Reviews />} />{" "}
        <Route path="/Admin" exact element={<AdminPage />} />
        <Route path="/Map" exact element={<Map />} />
        <Route path="/MapPage" exact element={<MapPage />} />
        <Route path="/AdminDashboard" exact element={<AdminDashboard />} />
        <Route path="/AboutPage" exact element={<AboutPage />} />
        <Route path="/HomePage" exact element={<HomePage />} />
        <Route path="/Footer" exact element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
