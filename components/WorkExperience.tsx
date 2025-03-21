"use client"

import { Briefcase, Calendar, Building2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "LLM应用开发",
    company: "某小型创业公司",
    period: "2023 - 至今",
    description: "领导LLM项目并实施前沿技术。",
    highlights: [
      "设计和实现基于大语言模型的应用系统",
      "优化Prompt工程，提升模型表现",
      "构建RAG系统，提升知识检索准确性"
    ]
  },
  {
    title: "Python工程师",
    company: "某央企",
    period: "2021 - 2023",
    description: "参与自动化运维相关工作。",
    highlights: [
      "设计和实现自动化运维平台",
      "构建监控告警系统",
      "优化部署流程，提升效率"
    ]
  },
  {
    title: "Python&Java工程师",
    company: "法律行业某top1公司",
    period: "2019 - 2021",
    description: "参与推荐算法相关工作。",
    highlights: [
      "开发和优化推荐算法系统",
      "构建数据处理管道",
      "提升推荐准确率"
    ]
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          工作经历
        </motion.h2>
        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-16 flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-1/2"></div>
              <motion.div
                className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
              >
                <Briefcase className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <motion.div
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

