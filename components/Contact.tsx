"use client"

import { Mail, MapPin, Github, Send, QrCode } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    label: "邮箱",
    value: "bluechanel612@gmail.com",
    link: "mailto:bluechanel612@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bluechanel",
    link: "https://github.com/bluechanel",
  },
  {
    icon: QrCode,
    label: "微信公众号",
    value: "扫码关注",
    link: null,
    qrCode: "/images/wechat.png"
  },
  {
    icon: MapPin,
    label: "位置",
    value: "中国西安",
    link: null,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            联系方式
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            随时欢迎与我交流和探讨
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-gray-800 rounded-xl p-6 flex items-center space-x-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <info.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
                  {info.qrCode ? (
                    <div className="relative group cursor-pointer">
                      <p className="text-gray-400">{info.value}</p>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white shadow-lg w-48 h-48">
                          <img src={info.qrCode} alt="微信公众号二维码" className="w-48 h-48" />
                        </div>
                      </div>
                    </div>
                  ) : info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      {info.value}
                      <Send className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

