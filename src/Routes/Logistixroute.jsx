import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Booking from "../pages/Booking"
import Services from "../pages/Services"
import Trackingpage from "../pages/Trackingpage"

const Logistixroute = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/Booking" element={<Booking></Booking>}></Route>
            <Route path="/Services" element={<Services></Services>}></Route>
            <Route path="/tracking details/:id" element={<Trackingpage></Trackingpage>}></Route>
        </Routes>
        
    </>
  )
}

export default Logistixroute
