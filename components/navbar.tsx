"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  const isHomeActive = pathname.startsWith("/home")
  const isMenuActive = pathname.startsWith("/menu")
  const isEventActive = pathname.startsWith("/event")
  const isContactActive = pathname.startsWith("/contact")

  return (
    <nav className="bg-light-orange border-b border-transparent px-6 py-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 lg:gap-12 relative">
        {/* Center: Menu and Event */}
        <div className="flex items-center gap-4 lg:gap-12">
          <Link
            href="/home"
            className={`text-xs lg:text-base text-gray-orange transition-colors uppercase ${
              isHomeActive ? "font-semibold" : "font-medium"
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`text-xs lg:text-base text-gray-orange transition-colors uppercase ${
              isMenuActive ? "font-semibold" : "font-medium"
            }`}
          >
            Menu
          </Link>
          <Link
            href="/event"
            className={`text-xs lg:text-base text-gray-orange transition-colors uppercase ${
              isEventActive ? "font-semibold" : "font-medium"
            }`}
          >
            Event
          </Link>
          <Link
            href="/contact"
            className={`text-xs lg:text-base text-gray-orange transition-colors uppercase ${
              isContactActive ? "font-semibold" : "font-medium"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
