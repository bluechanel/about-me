"use client"

import Image from "next/image"
import { Terminal } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const fullText = 'console.log("Hello World!");'

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (text.length < fullText.length) {
        // Typing effect
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 100)
      } else {
        // Pause at the end of typing
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (text.length > 0) {
        // Deleting effect
        timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, 50)
      } else {
        // Start typing again after a pause
        timeout = setTimeout(() => {
          setIsTyping(true)
        }, 1000)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isTyping])

  return (
    <div
      id="hero"
      className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">WileyZhang</h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-blue-100">IT工程师 & 问题解决者</h2>
            <p className="text-lg mb-8 text-blue-50">用代码构建未来，用创新解决挑战</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
              <Image
                src="https://cdn.img2ipfs.com/ipfs/Qmd9oiFKVGAsmVe8RT6CMNsQBr7vavHnJe5ij6iDTWzJH9?filename=about.webp"
                alt="个人照片"
                width={300}
                height={300}
                className="rounded-full border-4 border-white shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center">
        <Terminal className="inline-block mb-2 text-white" size={32} />
        <div className="font-mono text-sm text-blue-100 h-6">
          {text}
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  )
}

