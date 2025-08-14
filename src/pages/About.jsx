import { useContext } from 'react'
import { allcards } from '../logisticscontext/LogistixCard'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const { ourservice, setourservice } = useContext(allcards)
    const navigate = useNavigate()
  const handleservices =()=>{
    navigate("/Services")
  }
  return (
    <>
      <section className='cursor-default bg-white text-gray-800 px-6 py-12 md:px-20'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl mb-4 tracking-wider font-bold text-blue-600'>About Logistix</h1>
          <h2 className='text-lg text-gray-600'> Moving the World, One Delivery at a Time</h2>
        </div>
        <div className='grid gap-10 md:grid-cols-2'>
          <div>
            <h3 className='text-2xl font-semibold mb-3'>Who we are</h3>
            <p className='text-gray-700'>
              Logistix is a modern logistics company providing fast, reliable, and
              scalable delivery services. From local parcel drops to
              international shipping, we offer end-to-end logistics solutions
              powered by real-time tracking and tech-driven operations.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-3'>Our Vision</h3>
            <p className='text-gray-700'>
              To become India`s most trusted logistics partner by delivering
              excellence, safety, and speed in every shipment.
            </p>
          </div>
        </div>
        <div className='mt-16'>
          <h3 className='text-3xl text-center text-blue-600 font-semibold mb-8'>Our Core Services</h3>
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
            {ourservice.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition">
                <div className="text-4xl mb-3">{service.emoji}</div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Reliable and cost-effective delivery tailored for every need.
                </p>
                <button className='float-right mt-4 text-sm text-blue-700' onClick={handleservices}>Read more...</button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 bg-blue-50 p-10 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Our Mission
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 font-bold">
            <li>Deliver packages with speed and safety.</li>
            <li>Use smart technology to simplify logistics.</li>
            <li>Make delivery affordable and stress-free.</li>
            <li>Build long-term customer trust through quality.</li>
          </ul>
        </div>
      </section>
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

export default About
