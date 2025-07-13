import { useContext } from "react"
import { allcards } from "../logisticscontext/LogistixCard"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const { servicecard, setservicecard } = useContext(allcards)
  const {Testimonials,setTestimonials} = useContext(allcards)
  

  const bookinghandle = () => {
    console.log("booking...")
    navigate("/booking")
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
          {Testimonials.map((data)=>(
              <div key={data.id} className="p-5 mb-5 border border-gray-100 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div  className="items-center p-4  hover:bg-gray-100 dark:hover:bg-gray-700">
            <h1 className="text-white">{data.head}</h1>
            <div className="text-gray-400 dark:text-gray-500">
              <h3>{data.name}</h3> 
            </div>
          </div>

        </div>
          ))}
        
      </div>



    </>
  )
}

export default Home






