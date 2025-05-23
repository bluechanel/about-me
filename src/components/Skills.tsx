import { BrainIcon, Cog, Layers, CircleCheckIcon } from "lucide-react"

interface SkillCard {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCards: SkillCard[] = [
    {
      title: 'LLM & AI',
      icon: <BrainIcon className="mr-3" />,
      skills: [
        'LLM生态 (部署, 微调, RAG, Prompt工程)',
        'LangGraph, Agent, MCP 技术',
        'DeepSeek, Qwen 等模型应用',
        '生成式AI的应用探索'
      ]
    },
    {
      title: '后端 & 数据工程',
      icon: <Cog className="mr-3" />,
      skills: [
        'Python (FastAPI), 常用数据结构与算法',
        'ETL, Spark, Airflow, DBT 数据流水线',
        'Milvus, PostgreSQL, ClickHouse, Redis',
        '数据治理与研发效能度量'
      ]
    },
    {
      title: '全栈 & DevOps',
      icon: <Layers className="mr-3" />,
      skills: [
        'NextJS, VUE 全栈开发',
        'Linux, Shell脚本, Docker, Kubernetes',
        'DevOps理念与研发流水线建设',
        '为MetaGPT, CamelAI, PyMilvus贡献PR'
      ]
    }
  ];

  return (
    <section id="skills" className="mb-16 md:mb-24">
      <h2 className="text-6xl font-serif-sc text-center mb-12 text-cyan-400 text-cyan-glow">技术矩阵</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-stretch">
        {skillCards.map((card, index) => (
          <div 
            key={index} 
            className="flex-1 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 shadow-lg hover:shadow-emerald-400/10"
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-400 flex items-center">
              {card.icon}
              {card.title}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {card.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-start">
                  <CircleCheckIcon className="text-emerald-500 mr-2 mt-1 w-4 h-4" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}