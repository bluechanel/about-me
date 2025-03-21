"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            关于我
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            热爱技术，追求创新的全栈开发者
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-1/5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square bg-gray-800 rounded-xl overflow-hidden p-8 flex items-center justify-center">
                <Image
                  src="/images/panda-icon.svg"
                  alt="Animated Character"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <p className="text-gray-300 leading-relaxed">
                我是一名充满热情的全栈开发者，专注于构建高质量的Web应用和数据系统。在技术领域有着广泛的兴趣和实践经验，尤其擅长Python、TypeScript和Rust等编程语言。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <p className="text-gray-300 leading-relaxed">
                我热衷于探索和实践新技术，特别是在AI和大数据领域。通过持续学习和创新，我致力于开发出既实用又富有创意的解决方案，为用户带来更好的体验。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <p className="text-gray-300 leading-relaxed">
                在工作中，我注重代码质量和用户体验，善于团队协作，乐于分享技术知识。我相信技术不仅是工具，更是实现创意和解决问题的媒介。
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}