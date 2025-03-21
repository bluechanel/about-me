"use client"

import { Code, Database, Server, Globe, Cloud, Brain, Workflow } from "lucide-react"
import { motion } from "framer-motion"

const skills = [
  {
    name: "编程语言",
    icon: Code,
    items: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Rust", level: 75 },
      { name: "Java", level: 80 },
    ],
  },
  {
    name: "数据库",
    icon: Database,
    items: [
      { name: "MySQL", level: 85 },
      { name: "ClickHouse", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 85 },
    ],
  },
  {
    name: "DevOps",
    icon: Server,
    items: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
    ],
  },
  {
    name: "Web技术",
    icon: Globe,
    items: [
      { name: "Vue", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TailwindCSS", level: 85 },
    ],
  },
  {
    name: "云平台",
    icon: Cloud,
    items: [
      { name: "阿里云", level: 80 },
      { name: "AWS", level: 75 },
    ],
  },
  {
    name: "数据工程",
    icon: Workflow,
    items: [
      { name: "Airflow", level: 85 },
      { name: "DBT", level: 80 },
      { name: "Spark", level: 75 },
    ],
  },
  {
    name: "AI技术",
    icon: Brain,
    items: [
      { name: "RAG", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Agent", level: 85 },
      { name: "LangGraph", level: 80 },
    ],
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            技术技能
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            持续学习和实践中积累的专业技能
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-blue-500/10 mr-4">
                  <skill.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-gray-400">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

