import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    name: "AI驱动的网络监控系统",
    description: "开发了一个基于机器学习的网络监控系统，可以预测和防止网络故障。",
    technologies: ["Python", "TensorFlow", "Elasticsearch"],
    github: "https://github.com/yourusername/ai-network-monitor",
    live: "https://ai-network-monitor.example.com",
  },
  {
    name: "安全云数据管理器",
    description: "创建了一个安全、可扩展的基于云的数据管理解决方案，具有端到端加密功能。",
    technologies: ["Java", "AWS", "React"],
    github: "https://github.com/yourusername/secure-cloud-manager",
    live: "https://secure-cloud-manager.example.com",
  },
  {
    name: "物联网设备管理平台",
    description: "构建了一个综合的物联网设备管理平台，支持数千个连接设备。",
    technologies: ["Node.js", "MQTT", "MongoDB"],
    github: "https://github.com/yourusername/iot-management-platform",
    live: "https://iot-platform.example.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">精选项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-400">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-gray-400">使用的技术：</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400"
                >
                  <Github className="h-5 w-5 mr-1" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400"
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  在线演示
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

