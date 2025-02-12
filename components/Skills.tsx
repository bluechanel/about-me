import { Code, Database, Server, Globe, Lock, Cloud } from "lucide-react"

const skills = [
  { name: "Programming Languages", icon: Code, items: ["Python", "JavaScript", "Java", "C++"] },
  { name: "Databases", icon: Database, items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { name: "DevOps", icon: Server, items: ["Docker", "Kubernetes", "Jenkins"] },
  { name: "Web Technologies", icon: Globe, items: ["React", "Node.js", "HTML/CSS"] },
  { name: "Security", icon: Lock, items: ["Network Security", "Encryption", "Penetration Testing"] },
  { name: "Cloud Platforms", icon: Cloud, items: ["AWS", "Azure", "Google Cloud"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <skill.icon className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

