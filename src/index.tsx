import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//setup react router dom
import { BrowserRouter, Route, Routes, Navigate, Outlet, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import HomeTemplate from "./templates/HomeTemplate";
//import scss
import "./scss/styles.scss";
import DemoAntDesign from "./pages/DemoAnt/DemoAntDesign";
//antd
import "antd/dist/antd.css";
import ResponsiveItem from "./HOC/ResponsiveItem/ResponsiveItem";
//homemoblie
import HomeMobile from "./pages/Home/HomeMobile"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ResponsiveItem Component={HomeTemplate} ComponentMoblie = {(props) =>{
          return (
            <>
            <Outlet/>
            <div style={{height: 50}}></div>
            <footer className="bg-dark text-white d-flex justify-content-around position-fixes">
              <div className="mx-5">
                <NavLink to = "/">
                  <i className="fa fa-home"></i>Home
                </NavLink>
              </div>
              <div className="mx-5">
                <NavLink to = "/">
                  <i className="fa fa-home"></i>Home
                </NavLink>
              </div>
              <div className="mx-5">
                <NavLink to = "/">
                  <i className="fa fa-home"></i>Home
                </NavLink>
              </div>
            </footer>
            </>
          )
        }} />}>
          <Route index element={<ResponsiveItem Component={Home} ComponentMoblie ={HomeMobile}/>}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="detail">
            <Route path=":id"></Route>
          </Route>
          <Route path="demoantd" element={<DemoAntDesign />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
