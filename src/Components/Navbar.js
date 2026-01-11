import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50">
      {/* FULL WIDTH BAR (NO WHITE GAP) */}
      <div className="flex justify-center">
        {/* 🌙 DARK GLASS PILL */}
        <div
          className="
            relative flex h-16 w-full max-w-5xl items-center justify-between
            rounded-full px-6
            bg-gray-900/70 backdrop-blur-xl
            border border-white/10
            shadow-lg shadow-black/20
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=400"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="hidden sm:block text-lg font-semibold text-white">
              Avenzo
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden sm:flex items-center gap-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white',
                  'rounded-full px-4 py-2 text-sm font-medium transition'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <DisclosureButton className="sm:hidden rounded-full p-1 text-gray-300 hover:bg-white/10">
            <Bars3Icon className="h-6 w-6 data-[open]:hidden" />
            <XMarkIcon className="h-6 w-6 hidden data-[open]:block" />
          </DisclosureButton>
        </div>
      </div>

      {/* MOBILE MENU */}
      <DisclosurePanel className="sm:hidden mt-4 flex justify-center px-4">
        <div
          className="
            w-full max-w-5xl rounded-2xl p-4
            bg-gray-900/80 backdrop-blur-xl
            border border-white/10
          "
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white',
                  'rounded-full px-4 py-2 text-sm font-medium text-center transition'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}




