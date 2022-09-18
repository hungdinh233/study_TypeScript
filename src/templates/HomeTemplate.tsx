import React from 'react'
import Headers from '../Components/Headers/Headers'
import {Outlet} from "react-router-dom"

type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
    <Headers/>
    <Outlet/>
    </>
  )
}