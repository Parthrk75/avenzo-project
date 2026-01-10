export default function Header() {
  return (
    <div className="relative overflow-hidden">

      {/* CONTENT */}
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* TEXT SECTION */}
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Building Smart Digital Solutions
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We design and develop modern web apps, mobile solutions, AI-powered systems,
              and secure smart technologies to power your business.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                <div className="flex items-center space-x-6 lg:space-x-8">

                  {/* COLUMN 1 */}
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="Web Development"
                        src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="App Development"
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>

                  {/* COLUMN 2 */}
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="AI Technology"
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="Cloud Computing"
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="System Architecture"
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>

                  {/* COLUMN 3 */}
                  <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="Cyber Security"
                        src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-xl shadow-lg">
                      <img
                        alt="Smart Systems"
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        className="size-full object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* CTA BUTTON */}
            <a
              href="#"
              className="inline-block rounded-md bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 transition"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
