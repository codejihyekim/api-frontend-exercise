import React from "react"
import { useRoutes } from "react-router-dom"
import { Bmi, Calc, Grade, Login} from "./components/index"
import Home from './pages/Home'

export default function App(){
  return useRoutes([
    {path: "/", element:<Home />},
    {path: "bmi", element:<Bmi />},
    {path: "calc", element:<Calc />},
    {path: "login", element:<Login />},
    {path: "grade" , element:<Grade />}
  ])
}