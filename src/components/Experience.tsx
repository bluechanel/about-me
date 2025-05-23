'use client';
interface ExperienceItem {
  company: string;
  period: string;
  department: string;
  position: string;
  description?: string;
  achievements: string[];
}

import { useState } from 'react';

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setActiveExperience(activeExperience === index ? null : index);
  };
  const experiences: ExperienceItem[] = [
    {
      company: '某创业公司',
      period: '2023年7月 - 至今',
      department: '研发部',
      position: '大模型应用开发组长',
      description: '负责LLM领域相关应用的开发与迭代，追踪LLM前沿技术，带领团队将LLM技术融入现有孪生系统。',
      achievements: [
        '组建大模型团队，负责招聘、考核等管理工作。',
        '负责DeepSeek, Qwen等模型的更新迭代维护。',
        '探索生成式AI在工业数字孪生中的应用。'
      ]
    },
    {
      company: '某世界级音视频合资企业',
      period: '2022年4月 - 2023年7月',
      department: '总工办',
      position: '开发工程师',
      description: '负责公司数字化转型，搭建数字化平台，推动数据治理与研发效能提升。',
      achievements: [
        '推动建设需求、任务、研发规范，构建数据关联。',
        '利用DevOps思想，推动建设研发流水线。',
        '采集数据，制定指标，搭建数据仓库，开发数据看板和服务。'
      ]
    },
    {
      company: '某央企公司',
      period: '2021年4月 - 2022年4月',
      department: '云计算',
      position: 'Python开发工程师',
      achievements: [
        '某省电力公司运维自动化SaaS业务系统开发。',
        '某省电力公司云业务运营运维方案设计编写。',
        '内购平台销售数据分析，物联网卡数据分析。'
      ]
    },
    {
      company: '某法律行业Top1互联网公司',
      period: '2019年7月 - 2021年4月',
      department: '数据与智能团队',
      position: 'Python/Java开发',
      achievements: [
        '配合运营进行SEO优化，数据清洗。',
        '参与数据智能项目，开发推荐服务策略端接口。',
        '参与设计的"免费转轻法"项目获公司2020年最佳创新项目二等奖。'
      ]
    }
  ];

  return (
    <section id="experience" className="mb-16 md:mb-24">
      <h2 className="text-6xl font-serif-sc text-center mb-12 text-cyan-400 text-cyan-glow">职业历程</h2>
      <div className="relative">
        <div className="timeline-line hidden md:block"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item md:pl-10 mb-10 relative card p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 shadow-lg hover:shadow-emerald-400/10">
            <button
              className="accordion-button w-full text-left focus:outline-none"
              onClick={() => toggleExperience(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-emerald-400">{exp.company}</h3>
                <i className={`fas fa-chevron-down accordion-icon text-emerald-400 transform transition-transform ${activeExperience === index ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-sm text-gray-400 mb-1">
                {exp.period} | {exp.department} | {exp.position}
              </p>
              {exp.description && <p className="text-sm mb-2">{exp.description}</p>}
            </button>
            <div
              className={`accordion-content overflow-hidden bg-gray-800 bg-opacity-30 transition-all duration-300 ease-in-out ${
                activeExperience === index ? 'max-h-[500px] opacity-100 py-4 px-4' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <ul className="list-disc list-inside text-sm space-y-1 pl-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className={achievement.includes('获') ? 'text-yellow-400' : ''}>
                    {achievement.includes('获') && <i className="fas fa-award mr-1"></i>}
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}