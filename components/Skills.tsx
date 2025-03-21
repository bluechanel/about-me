import { Code, Database, Server, Globe, Cloud, Brain, Workflow } from "lucide-react"

const skills = [
  {
    name: "编程语言",
    icon: Code,
    items: ["Python", "TypeScript", "Rust", "Java"],
  },
  {
    name: "数据库",
    icon: Database,
    items: ["MySQL", "ClickHouse", "PostgreSQL", "Redis"],
  },
  {
    name: "DevOps",
    icon: Server,
    items: ["Docker", "Kubernetes"],
  },
  {
    name: "Web技术",
    icon: Globe,
    items: ["Vue", "Next.js", "TailwindCSS"],
  },
  {
    name: "云平台",
    icon: Cloud,
    items: ["阿里云", "AWS"],
  },
  {
    name: "数据工程",
    icon: Workflow,
    items: ["Airflow", "DBT", "Spark"],
  },
  {
    name: "AI技术",
    icon: Brain,
    items: ["RAG", "Prompt Engineering", "Agent", "LangGraph"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">技术技能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

