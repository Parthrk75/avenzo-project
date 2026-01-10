import Navbar from './Components/Navbar'
import Header from './Components/Header'

export default function App() {
  return (
    <div>
    <div className="relative min-h-screen">
      {/* Background Image only for Navbar + Header */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" // online image URL
          alt="background"
          className="h-full w-full object-cover"
        />
        {/* Optional: slight overlay for readability */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
      </div>

      {/* Page Content */}
      <Navbar />
      <Header />

      {/* Any other sections below will appear without background image */}
      <div className="relative z-0">
        {/* Other page content here */}


      </div>
      

    </div>
      <Header />

    </div>
  )
}
