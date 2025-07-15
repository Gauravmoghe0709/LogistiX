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
    
  return (
    <allcards.Provider value={{servicecard, setservicecard,Testimonials,setTestimonials,ourservice, setourservice}}>
        {children}
    </allcards.Provider>
  )
}

export default LogistixCard
