'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  year: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  responsibilities: string;
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayEnabled] = useState(true);

  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const timer = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, autoplayEnabled]);

  const projects: Project[] = [
    {
      title: '孪生大脑',
      year: '2024年',
      shortDesc: '基于LLM的自然语言交互数字人系统，融合数字孪生。',
      description: '使用语音+LLM技术，提供数字人系统，支持语音操作孪生系统、自然语言生成报表、知识库问答、业务推理与智能分析。',
      techStack: ['ASR', 'LLM', 'TTS', 'LangChain', 'LangGraph', 'Vanna', '数仓'],
      responsibilities: 'STT/TTS技术体系搭建与实现, 基于LangGraph搭建Agent系统, 分层架构Agent, 子Agent搭建 (数据分析可视化, RAG问答, 自然语言操控)。'
    },
    {
      title: '仿真智能辅助平台',
      year: '2024年',
      shortDesc: '基于LLM的RAG技术，为仿真从业者提供智能辅助。',
      description: '帮助文档快速定位，案例查找。根据已有案例，LLM学习并生成新案例。',
      techStack: ['Qwen', 'NextJS', 'LangGraph', 'LLM', 'MySQL', 'Milvus'],
      responsibilities: 'NextJS全栈开发 (用户系统, 问答, AI对接, 云部署), LLM文档翻译, 知识抓取, RAG问答开发。'
    },
    {
      title: '智能投顾',
      year: '2023年',
      shortDesc: '基于LLM的投资顾问平台，提供信息搜索、抽取总结、关系挖掘能力。',
      description: '提供企业/政策/行业信息搜索与总结，利用图数据库挖掘投资机会/风险，生成大数据+LLM的投资尽调报告。',
      techStack: ['Qwen', 'LangChain', 'LLM', 'ES', 'FastApi', 'Minio', 'Nebula', 'Airflow'],
      responsibilities: '搭建投研AI辅助平台, 改进RAG能力, 建设企业关系图空间。'
    },
    {
      title: '数据仓库',
      year: '2022年',
      shortDesc: '建立统一数据标准、模型并入库，方便数据使用和看板建立。',
      description: '采集各业务系统数据，清洗并建立统一数据标准和模型入库，约120张数据表。',
      techStack: ['Python', 'ClickHouse', 'DBT', 'Airflow'],
      responsibilities: '开发数据采集脚本, 搭建Airflow编排数据流水线。'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="mb-16 md:mb-24">
      <h2 className="text-6xl font-serif-sc text-center mb-12 text-cyan-400 text-cyan-glow">项目实践</h2>
      <div className="relative max-w-4xl mx-auto px-4">
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-emerald-400 hover:text-emerald-300 transition-colors z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-emerald-400/20 transition-all duration-300 shadow-lg"
              >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-semibold text-emerald-400">{project.title} ({project.year})</h3>
                    </div>
                    <p className="text-gray-400">{project.shortDesc}</p>
                    <div className="space-y-3">
                      <p><strong>描述:</strong> {project.description}</p>
                      <div>
                        <strong>技术栈:</strong>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-green-900 px-3 py-1 rounded-full text-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-green-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p><strong>责任:</strong> {project.responsibilities}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-emerald-400 hover:text-emerald-300 transition-colors z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>



        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-emerald-400' : 'bg-emerald-400/30'}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
    </section>
  );
}