"use client"

import Image from "next/image"
import { Rss, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const rules = [
    { text: '第一原则: 不得伤害人类，也不得见人类受到伤害而袖手旁观', color: 'from-red-600 to-red-800' },
    { text: '第二原则: 必须服从人类命令，除非违背第一原则', color: 'from-red-600 to-red-800' },
    { text: '第三原则: 在不违背第一及第二原则下保护自己的存在', color: 'from-red-600 to-red-800' }
  ]

  const [currentRuleIndex, setCurrentRuleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRuleIndex((prevIndex) => (prevIndex + 1) % rules.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="hero" className="min-h-screen w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
              <Image
                src="/images/about.webp"
                alt="个人照片"
                width={300}
                height={300}
                className="rounded-full border-4 border-blue-500/50 shadow-2xl relative z-10 animate-pulse-slow"
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient-x drop-shadow-glow relative z-20 p-2 rounded-lg"
          >
            WileyZhang
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto hover:text-blue-300 transition-colors duration-300"
          >
            血肉苦难，机械飞升
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/bluechanel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.wileyzhang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Rss className="h-8 w-8" />
            </a>
            <a
              href="mailto:bluechanel612@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Mail className="h-8 w-8" />
            </a>
          </motion.div>

          <div className="h-24 relative overflow-hidden">
            <motion.div
              key={currentRuleIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="relative p-4 group text-center absolute inset-0"
            >
              <div className="relative flex items-center justify-center space-x-3">
                <div className="w-6 h-6 flex-shrink-0 text-red-600 animate-pulse">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                  </svg>
                </div>
                <div className={`font-mono text-base font-bold bg-clip-text text-transparent bg-gradient-to-r ${rules[currentRuleIndex].color} drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]`}>
                  {rules[currentRuleIndex].text}
                </div>
              </div>
            </motion.div>
          </div>
          </motion.div>
      </div>
    </div>
  )
}

