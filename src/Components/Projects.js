'use client'

import { useState } from 'react'
import { FolderIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, CubeIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    name: 'E-commerce Platform',
    description:
      'A fully-featured online store with payment integration, user management, and responsive design.',
    icon: FolderIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
  {
    name: 'Mobile Banking App',
    description:
      'A secure mobile app for managing accounts, transferring funds, and tracking transactions in real-time.',
    icon: DevicePhoneMobileIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
  {
    name: 'Admin Dashboard',
    description:
      'A web-based dashboard for analytics, reporting, and managing business operations efficiently.',
    icon: ComputerDesktopIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
  {
    name: '3D Modeling Tool',
    description:
      'An interactive 3D modeling platform for designers and architects with real-time rendering.',
    icon: CubeIcon,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png',
  },
]

export default function Projects() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <div className="bg-gray-900 py-20 sm:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
          
          {/* Left column: header */}
          <div className="lg:pr-4">
            <h2 className="text-base font-semibold text-indigo-400">Our Projects</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white lg:text-4xl">
              Explore what we have built
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              From web apps to mobile solutions, we deliver projects that are modern, scalable, and user-friendly.
            </p>
          </div>

          {/* Right column: 2x2 project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="relative pl-12 flex flex-col">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute top-0 left-0 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500">
                    <project.icon aria-hidden="true" className="h-5 w-5 text-white" />
                  </div>
                  {project.name}
                </dt>
                <dd className="mt-1 text-sm text-gray-400">{project.description}</dd>

                {/* Learn More Button */}
                <button
                  onClick={() => setOpenProject(project)}
                  className="mt-3 inline-block w-max rounded-md bg-indigo-500 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-600 transition"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {openProject && (
        <Dialog open={!!openProject} onClose={() => setOpenProject(null)} className="relative z-10">
          <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-gray-800 p-6 text-left shadow-2xl transition-all lg:flex lg:gap-x-20">
                
                {/* Close button */}
                <button
                  type="button"
                  onClick={() => setOpenProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Left: text */}
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">{openProject.name}</h2>
                  <p className="mt-6 text-lg text-gray-300">{openProject.description}</p>
                  <div className="mt-8 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 transition"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Right: image */}
                <div className="mt-8 lg:mt-0 lg:flex-1 flex justify-center items-center">
                  <img
                    alt={openProject.name}
                    src={openProject.imageSrc}
                    className="w-full max-w-md rounded-xl bg-white/5 ring-1 ring-white/10 object-cover"
                    style={{ height: '400px' }}
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




