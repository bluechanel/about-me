"use client"

import { Menu, Code } from "lucide-react"
import { useCallback } from "react"

export default function Header() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" onClick={() => scrollToSection("hero")} className="text-xl font-bold flex items-center">
          <Code className="mr-2" />
          <span>My Portfolio</span>
        </a>
        <div className="hidden md:flex space-x-6">
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("experience")
            }}
            className="hover:text-blue-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("skills")
            }}
            className="hover:text-blue-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("projects")
            }}
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
    </header>
  )
}

