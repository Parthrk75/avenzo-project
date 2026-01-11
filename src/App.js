import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Service from './Components/Service'
import Newsletter from './Components/Newsletter'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div>
    <div className="relative">
      {/* HERO BACKGROUND IMAGE */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
      />

      {/* CONTENT */}
      <Navbar />
      <Header />
    </div>
    <Service/>
    <Projects/>
    <Newsletter/>
    </div>
  )
}

export default App




