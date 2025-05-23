import Header from '@/components/Header';
import CoreValue from '@/components/CoreValue';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section className="snap-start h-screen flex items-center">
          <div className="container mx-auto px-4">
            <Header />
          </div>
        </section>
        <section className="snap-start h-screen flex items-center">
          <div className="container mx-auto px-4">
            <CoreValue />
          </div>
        </section>
        <section className="snap-start h-screen flex items-center">
          <div className="container mx-auto px-4">
            <Skills />
          </div>
        </section>
        <section className="snap-start h-screen flex items-center">
          <div className="container mx-auto px-4">
            <Experience />
          </div>
        </section>
        <section className="snap-start h-screen flex items-center">
          <div className="container mx-auto px-4">
            <Projects />
          </div>
        </section>
      </div>
    </div>
  );
}
