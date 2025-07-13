import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Login from "../pages/Login"
import Booking from "../pages/Booking"

const Logistixroute = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/Booking" element={<Booking></Booking>}></Route>
        </Routes>
    </>
  )
}

export default Logistixroute
