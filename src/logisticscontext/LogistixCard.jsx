import  { createContext } from 'react'
import { useState } from 'react'
import {nanoid} from "nanoid"

export const allcards = createContext(null)

const LogistixCard = ({children}) => {
    const [servicecard, setservicecard] = useState([
      
  {
    id: nanoid(),
    type: "Two Wheeler",
    title: "Quick Two-Wheeler Delivery",
    description: "Fast and affordable two-wheeler delivery service for small packages and documents within the city.",
    image: "../img/placeholder.gif"
  },
  {
   id: nanoid(),
    type: "Truck",
    title: "Heavy Goods Truck Transport",
    description: "Reliable truck transportation for heavy goods and commercial shipments across long distances.",
    image: "../img/delivery-truck.gif",
  },
  {
    id: nanoid(),
    type: "Package and Movers",
    title: "Safe Packing and Moving",
    description: "Professional packing and moving services for residential and office relocations with end-to-end care.",
    image: "../img/courier.gif",
  },
  {
    id: nanoid(),
    type: "Intercity Courier",
    title: "Move Faster Across Cities",
    description: "Door-to-door intercity courier services ensuring secure and on-time delivery of your parcels.",
    image: "../img/location.gif",
  }]);
   const [Testimonials,setTestimonials] = useState([
    {
        id:nanoid(),
        head:"Super fast and reliable! My documents were delivered the same day. Great service and easy tracking!",
        name:"— Ravi Kumar, Pune"  
    },
    {
        id:nanoid(),
        head:"Professional and safe moving experience. The packers handled everything with care. Highly recommended!",
        name:"— Shruti Mehta, Mumbai"
    },
    {
      id:nanoid(),
      head:"Affordable rates with real-time updates. I always use their service for intercity courier.",
      name:"— Amit Joshi, Delhi"
    },
    {
      id:nanoid(),
      head:"Truck delivery was on time, and the driver was very cooperative. Hassle-free logistics experience!",
      name:"— Neha Agarwal Jaipur"
    },
     {
      id:nanoid(),
      head:"Excellent customer service and timely updates. My package arrived safely and earlier than expected!",
      name:"— Pooja Verma, Bengaluru"
    }
    
   ])
   const [ourservice, setourservice] = useState([
    {
      id:nanoid(),
      title:"Two-Wheeler Delivery",
      emoji: "🛵"
    }, 
    {
      id:nanoid(),
      title:"Truck Transport",
      emoji: "🚛" 
    },
    {
      id:nanoid(),
      title:"Packers & Movers",
      emoji: "📦"
    },
    {
      id:nanoid(),
      title:"Courier Services",
      emoji: "✈️"
    },

   ])
   const [details,setdetails] = useState([
    {
      heading:"Two-Wheeler Courier",
      details:"Our Two-Wheeler Courier Service offers a fast, flexible, and cost-effective solution for delivering small to medium-sized packages across the city. Designed for speed and convenience, our bike couriers can navigate through traffic efficiently, ensuring that your parcels reach their destination on time, every time. Whether it’s important documents, small goods, or urgent deliveries, our trained riders handle each item with care and professionalism. With GPS-enabled tracking, you can monitor your shipment in real time, giving you complete peace of mind. Our service is perfect for businesses seeking same-day delivery or individuals who need quick, reliable transport for their packages without the delays and high costs of traditional delivery methods. We pride ourselves on our punctuality, safety, and commitment to customer satisfaction, making us the ideal choice for urban courier needs.",
      image:"../img/yeoul-shin-YghXkwvpf6Y-unsplash.jpg",
    },
    {
      heading:"Truck Freight Service",
      details:"Our Truck Freight Service provides reliable, large-capacity transportation solutions for businesses and individuals who need to move bulk goods efficiently. Whether it’s heavy machinery, commercial inventory, construction materials, or bulk shipments, our fleet of well-maintained trucks is equipped to handle a wide range of freight needs. We offer flexible transport options, including full truckload (FTL) and less-than-truckload (LTL) services, ensuring you only pay for the space you need. With professional drivers, strict safety measures, and GPS-enabled tracking, we guarantee secure handling and timely delivery of your cargo. Our service covers both local and long-distance routes, making us a trusted partner for industries, wholesalers, and distributors. We focus on minimizing delays, reducing costs, and delivering exceptional customer support, so you can move your goods with complete confidence.",
      image:"../img/han-chenxu-20qcctvyR1Q-unsplash.jpg",
    },
    {
      heading:"Packers & Movers - Safe & Hassle-Free Relocation",
      details:"Our Packers & Movers Service ensures a smooth, safe, and stress-free relocation experience for both residential and commercial moves. From packing your belongings with high-quality materials to carefully loading, transporting, and unpacking them at your new location, we handle every step with precision and care. Our trained team is skilled in moving everything from fragile items to heavy furniture, ensuring nothing is damaged in transit. We offer both local and long-distance relocation services, with customizable packages to fit your needs and budget. With GPS tracking, transparent pricing, and a commitment to punctuality, we make sure your move is efficient and worry-free. Whether you’re shifting your home, office, or warehouse, we provide end-to-end solutions that turn relocation into a seamless experience.",
      image:"../img/ismael-paramo-tnVdQGmWtb0-unsplash.jpg",
    },
    {
      heading:"Intercity Courier – Fast & Reliable Across Cities",
      details:"Our Intercity Courier Service is designed to deliver your parcels quickly, safely, and reliably between cities. Whether it’s urgent documents, valuable items, or time-sensitive packages, we ensure they reach their destination on schedule. With a strong logistics network, trained delivery partners, and multiple transportation modes, we provide both same-day and next-day delivery options. Every shipment is carefully handled, securely packed, and tracked in real time through our GPS-enabled system, giving you complete visibility and peace of mind. We cater to businesses, e-commerce platforms, and individuals who require dependable intercity delivery at competitive rates. By combining speed, safety, and professionalism, we make sure your packages arrive in perfect condition—no matter the distance.",
      image:"../img/joel-moysuh-ObweQkF5w30-unsplash.jpg",
    }
    

   ])
  
    
  return (
    <allcards.Provider value={{servicecard, setservicecard,Testimonials,setTestimonials,ourservice, setourservice,details,setdetails}}>
        {children}
    </allcards.Provider>
  )
}

export default LogistixCard
