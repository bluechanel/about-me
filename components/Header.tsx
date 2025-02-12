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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-4">
          <a href="#" onClick={() => scrollToSection("hero")} className="text-xl font-bold flex items-center">
            <Code className="mr-2" />
            <span>关于我</span>
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
              工作经历
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("skills")
              }}
              className="hover:text-blue-400 transition-colors"
            >
              技能
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("projects")
              }}
              className="hover:text-blue-400 transition-colors"
            >
              项目
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
              className="hover:text-blue-400 transition-colors"
            >
              联系方式
            </a>
          </div>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>
    </header>
  )
}

