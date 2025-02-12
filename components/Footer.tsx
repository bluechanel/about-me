import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

