import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import WorkExperience from "@/components/WorkExperience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Hero />
        <WorkExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

