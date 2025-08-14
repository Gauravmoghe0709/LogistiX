import { useContext,useState } from "react"
import { allcards } from "../logisticscontext/LogistixCard"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const { servicecard, setservicecard } = useContext(allcards)
  const { Testimonials, setTestimonials } = useContext(allcards)
  
  const [trackid, settrackid] = useState("")
  const bookinghandle = () => {
    console.log("booking...")
    navigate("/booking")
  }
  const trackinghandle=(e)=>{
        e.preventDefault();
       navigate(`/tracking details/${trackid}`)
  }
  

  return (
    <>
      <div className="text-center pt-10  cursor-default">
        <h1 className='text-5xl md:text-8xl tracking-widest'>LogistiX</h1>
        <h3 className='leading-13 md:leading-23 md:tracking-tight'>Your Reliable Logistics Partner,On Time Every Time...</h3>
      </div>
      <div className="bg-gray-100 cursor-default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {servicecard.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-xl p-8 hover:shadow-2xl transition">
              <img src={item.image} className="block h-30 w-30" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <button onClick={bookinghandle} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-15 px-10 cursor-default">
        <h1 className="text-3xl my-5 tracking-widest "> Customer Testimonials:-</h1>
        {Testimonials.map((data) => (
          <div key={data.id} className="p-5 mb-5 border border-gray-100 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="items-center p-4  hover:bg-gray-100 dark:hover:bg-gray-700">
              <h1 className="text-white">{data.head}</h1>
              <div className="text-gray-400 dark:text-gray-500">
                <h3>{data.name}</h3>
              </div>
            </div>

          </div>
        ))}
      </div>
      


      <div className=" border-1 border-gray-500 shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mt-15">
        <h2 className="text-xl font-bold text-gray-800 text-center">
        Track Your Shipment
      </h2>
      <p className="text-gray-500 text-sm text-center mt-1">
        Enter your tracking ID below
      </p>
       <div >

          <form onSubmit={trackinghandle} className="mt-5 flex gap-2">
            <input type="text"
            placeholder="Enter your tracking id"
            value={trackid}
            onChange={(e)=>settrackid(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"/>
          
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Track
        </button>
        </form>
      </div>
      </div>
      
      <footer className="bg-gray-900 text-white px-6 py-10 mt-10 cursor-default">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-3">LogistiX</h2>
            <p className="text-sm">
              Your trusted logistics partner for fast, safe, and reliable delivery services across the globe.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3 ">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-400">Two-Wheeler Delivery</li>
              <li className="hover:text-yellow-400" >Truck Transport</li>
              <li className="hover:text-yellow-400">Packers & Movers</li>
              <li className="hover:text-yellow-400">Intercity Courier</li>
              <li className="hover:text-yellow-400">International Shipping</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">📍 New Delhi, India</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">📧 support@logistiX.com</p>
            <div className="flex gap-4 mt-3">
              <img src="./img/instagram (1).png" className="h-8 w-8" />
              <img src="./img/communication.png" className="h-8 w-8" />
              <img src="./img/linkedin (1).png" className="h-8 w-8" />
              <img src="./img/twitter (1).png" className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
          © {new Date().getFullYear()} logistiX. All rights reserved.
        </div>
      </footer>
      
    </>
  )
}

export default Home






