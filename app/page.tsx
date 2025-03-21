import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import WorkExperience from "@/components/WorkExperience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import AboutMe from "@/components/AboutMe"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow w-full">
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

