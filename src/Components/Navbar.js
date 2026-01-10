import { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline'

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
  const [darkMode, setDarkMode] = useState(false)

  /* 🔥 APPLY DARK MODE TO <html> */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
        <Disclosure as="nav" className="sticky top-0 z-50">

      {/* CENTER NAVBAR */}
      <div className="flex justify-center">

        {/* 🌟 GLASS PILL NAVBAR */}
        <div
          className="
            relative flex h-16 w-full max-w-5xl items-center justify-between
            rounded-full px-6
            bg-white/70 backdrop-blur-xl shadow-lg
            dark:bg-black/60
            border border-indigo-500/20
          "
        >
          {/* LEFT: Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              className="h-8 w-8"
            />
          </div>

          {/* CENTER: Company name (Mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:hidden">
            <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              Avenzo
            </span>
          </div>

          {/* CENTER: Menu (Desktop) */}
          <div className="hidden sm:flex items-center gap-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-600 text-white'
                    : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20',
                  'rounded-full px-4 py-2 text-sm font-medium transition'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-1">
            {/* 🌙 TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full p-1 text-indigo-600 hover:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            {/* ☰ MOBILE MENU */}
            <DisclosureButton className="sm:hidden rounded-full p-1 text-indigo-600 hover:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20">
              <Bars3Icon className="h-6 w-6 data-[open]:hidden" />
              <XMarkIcon className="h-6 w-6 hidden data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE MENU PANEL */}
      <DisclosurePanel className="sm:hidden mt-4 flex justify-center px-4">
        <div
          className="
            w-full max-w-5xl rounded-2xl p-4
            bg-white/70 backdrop-blur-xl shadow-lg
            dark:bg-black/60
            border border-indigo-500/20
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
                    : 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20',
                  'rounded-full px-4 py-2 text-sm font-medium text-center'
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
