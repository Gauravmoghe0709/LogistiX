import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Usertracking = () => {
  const mapContainerStyle = {
    height: "300px",
    width: "100%",
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
    
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Track Your Shipment
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Enter your tracking ID to check your shipment status.
      </p>
  
        <div className="max-w-3xl mx-auto mt-8 space-y-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Shipment Summary</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <p><strong>Shipment ID:</strong> {""}</p>
              <p><strong>Package Type:</strong> Document</p>
              <p><strong>Sender:</strong> John Doe</p>
              <p><strong>Receiver:</strong> Jane Smith</p>
              <p><strong>Pickup Date:</strong> Aug 12, 2025</p>
              <p><strong>Estimated Delivery:</strong> Aug 15, 2025</p>
            </div>
          </div>

            <div className="mt-4">
              <LoadScript googleMapsApiKey="AIzaSyDjmQscnQ0895RrhrGlChVq3y9dTiUMOt8">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={location}
                  zoom={12}
                >
                  <Marker position={location} />
                </GoogleMap>
              </LoadScript>
            </div>
          
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Tracking Timeline</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Order Received</li>
              <li>✅ Package Picked Up</li>
              <li>🟢 In Transit</li>
              <li>⚪ Out for Delivery</li>
              <li>⚪ Delivered</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
            <p>Contact our support team for assistance.</p>
            <p className="mt-1 text-blue-600">📞 +91 98765 43210</p>
            <p className="text-blue-600">✉ support@logistics.com</p>
          </div>
        </div>
      
    </div>
  );
}

export default Usertracking
