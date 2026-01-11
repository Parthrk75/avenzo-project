'use client'

import { useState } from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Service() {
  const [openFeature, setOpenFeature] = useState(null) // currently opened feature

  return (
    <div className="bg-gray-900 py-20 sm:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
          
          {/* Left column */}
          <div className="lg:pr-4">
            <h2 className="text-base font-semibold text-indigo-400">Our Services</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white lg:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>

          {/* Right column: features 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {features.map((feature, idx) => (
              <div key={idx} className="relative pl-12 flex flex-col">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute top-0 left-0 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="h-5 w-5 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-sm text-gray-400">{feature.description}</dd>

                {/* Learn More Button */}
                <button
                  onClick={() => setOpenFeature(feature)}
                  className="mt-3 inline-block w-max rounded-md bg-indigo-500 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-600 transition"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Modal */}
      {openFeature && (
        <Dialog open={!!openFeature} onClose={() => setOpenFeature(null)} className="relative z-10">
          <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-gray-800 p-6 text-left shadow-2xl transition-all lg:flex lg:gap-x-20">
                <button
                  type="button"
                  onClick={() => setOpenFeature(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Left: text */}
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">{openFeature.name}</h2>
                  <p className="mt-6 text-lg text-gray-300">{openFeature.description}</p>
                  <div className="mt-8 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 transition"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold text-white hover:text-gray-300">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

               {/* Right: image */}
<div className="mt-8 lg:mt-0 lg:flex-1 flex justify-center items-center">
  <img
    alt={openFeature.name}
    src={openFeature.imageSrc}
    className="w-full max-w-md rounded-xl bg-white/5 ring-1 ring-white/10 object-cover"
    style={{ height: '400px' }} // fixed reasonable height
  />
</div>

              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  )
}
