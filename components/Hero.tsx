import Image from "next/image"
import { Terminal } from "lucide-react"

export default function Hero() {
  return (
    <div id="hero" className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Name</h1>
            <h2 className="text-2xl md:text-3xl mb-6">IT Engineer & Problem Solver</h2>
            <p className="text-lg mb-8">Turning complex problems into elegant solutions</p>
            <button className="bg-white text-blue-800 font-bold py-2 px-4 rounded hover:bg-blue-100 transition-colors">
              View My Work
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full border-4 border-white shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <Terminal className="inline-block mb-2" size={32} />
        <p className="font-mono text-sm">console.log("Welcome to my portfolio!");</p>
      </div>
    </div>
  )
}

