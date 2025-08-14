
import { useContext } from 'react'
import { allcards } from '../logisticscontext/LogistixCard'

const Services = () => {
  const { details, setdetails } = useContext(allcards)
  console.log(details)

  return (
    <>
      <div>
        <h1 className='text-4xl mb-4 tracking-widest font-bold text-blue-600 text-center mt-10'>Our Services</h1>
        <h3 className='text-center pt-2 text-gray-600 text-lg'>Our Reliable Logistics Solutions</h3>
        {details.map((items, idx) => (
          <div className='px-5' key={idx}>
            <div className='px-5'>
              <h1 className='font-bold pt-5'>{items.heading}</h1>
              <div className='md:flex gap-5'>
                <p className='pt-5 '>{items.details}</p>
                <img src={items.image} className='md:w-1/4' />
              </div>
            </div>
          </div>
        ))}
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

export default Services
