import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import React from 'react'
import Body from "./pages/Body";
import Shop from "./pages/Shop";
import Mainlayouts from "./Layouts/Mainlayouts";
import Authlayout from "./Layouts/Authlayout";
import { LogIn } from "lucide-react";
import Login from "./pages/auth/Login";
import Yuplogin from "./pages/auth/Yuplogin";

function App() {
  return (
    <div>
      
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Mainlayouts />}>
           <Route index element={<Body />} />
           <Route path="shop" element={<Shop />} />
          </Route>

          <Route path="/" element={<Authlayout />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="yuplogin" element={<Yuplogin />}></Route>
          </Route>
        </Routes>
       
      </BrowserRouter>
   
    </div>
  )
}

export default App
