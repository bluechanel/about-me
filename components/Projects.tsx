"use client"

import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    name: "AI驱动的网络监控系统",
    description: "开发了一个基于机器学习的网络监控系统，可以预测和防止网络故障。",
    technologies: ["Python", "TensorFlow", "Elasticsearch"],
    highlights: [
      "实现了99.9%的故障预测准确率",
      "减少了60%的人工监控时间",
      "支持多种网络协议和设备类型"
    ],
    github: "https://github.com/yourusername/ai-network-monitor",
    live: "https://ai-network-monitor.example.com",
    image: "/images/project1.svg"
  },
  {
    name: "安全云数据管理器",
    description: "创建了一个安全、可扩展的基于云的数据管理解决方案，具有端到端加密功能。",
    technologies: ["Java", "AWS", "React"],
    highlights: [
      "实现了端到端的数据加密",
      "支持多云架构部署",
      "具备完整的审计日志功能"
    ],
    github: "https://github.com/yourusername/secure-cloud-manager",
    live: "https://secure-cloud-manager.example.com",
    image: "/images/project2.svg"
  },
  {
    name: "物联网设备管理平台",
    description: "构建了一个综合的物联网设备管理平台，支持数千个连接设备。",
    technologies: ["Node.js", "MQTT", "MongoDB"],
    highlights: [
      "支持超过10,000个并发设备连接",
      "实现了设备自动发现和配置",
      "提供实时数据分析和可视化"
    ],
    github: "https://github.com/yourusername/iot-management-platform",
    live: "https://iot-platform.example.com",
    image: "/images/project3.svg"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
          >
            精选项目
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            展示我参与开发的一些重要项目
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative bg-gray-800 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm text-blue-400 bg-blue-400/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        在线演示
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

