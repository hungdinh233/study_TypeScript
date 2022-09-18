import React from 'react'
import {NavLink, Outlet} from "react-router-dom"

type Props = {}

export default function HomeTemplateMobile({}: Props) {
  return (
    <div>
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
    </div>
  )
}