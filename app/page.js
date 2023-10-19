import Image from 'next/image'
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar/Navbar';
import AboutSection from './components/section/AboutSection';
import ProjectSection from './components/Projects/ProjectSection';
import EmailSection from './components/Email/EmailSection';
import Footer from './components/Footer/Footer';
import Achivment from './components/Achive/Achivment';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#93776B] ">
            <Navbar/>
      <div className="container mx-auto mt-24 py-4 px-12">
        <HeroSection />
        <Achivment/>
        <AboutSection />
        <ProjectSection />
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
