"use client";
import About from "@/components/About";
import Education from "@/components/Edccation";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import SocialIcons from "@/components/SocialIcons";
import SectionUi from "@/UI/SectionUi";
import { Ribbon, Download } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const servicess = [
    "WepDesign",
    "WebDevelopment",
    "SEO",
    "Branding",
    "E-commerceSolutions",
    "CloudServices",
  ];

  return (
    <main className="mt-24 flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
      {/* Header Section */}
      <h1 id="home" className="flex w-32 items-center justify-between">
        <span className="w-6 items-center bg-orange-600 inline-block h-0.5 px-2"></span>
        <span className="font-bold">Hello There ! </span>
      </h1>
      <p className="text-4xl font-semibold text-center">
        I&apos;m <span className="text-orange-600 font-sans italic">Mahmud Nagi</span>
      </p>
      <h6 className="text-gray-400 font-semibold text-sm text-center">
        Frontend Developer & MERN Stack Developer based in Egypt
      </h6>

      {/* Hero Section */}
      <section className="mt-8 flex flex-col md:flex-row justify-between items-center w-full max-w-[90%] p-4 md:p-6 gap-6 dark:bg-gray-800">
        {/* Left content */}
        <div className="flex flex-col items-start w-full md:w-1/4 h-auto md:h-[300px]">
          <h2 className="text-4xl font-bold mb-4 text-orange-600 flex">
            <Ribbon />
            <Ribbon />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Here you can find my projects, skills, and more about me. Let&apos;s connect!
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 px-4 md:px-6 h-[200px] md:h-[300px]">
          {/* replace with <Image src="" /> if available */}
          <p className="bg-orange-600 h-full rounded-t-full text-center text-white flex items-center justify-center">
            image
          </p>
        </div>

        {/* Right content */}
        <div className="flex flex-col w-full md:w-1/4 h-auto md:h-[300px]">
          <div className="flex flex-wrap items-center">
            {servicess.map((service, index) => (
              <span
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-orange-500 text-white"
                    : "bg-black text-white"
                } h-8 px-3 py-1 m-1 rounded-2xl text-sm`}
              >
                {service}
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
            Explore my services and see how I can help your business.
          </p>
          <SocialIcons />
        </div>
      </section>

  

      {/* Sections */}
      <SectionUi className="About w-full">
          <h2  id="about" className='before:h-1 before:absolute relative before:bg-orange-800 before:w-14 before:bottom-3 before:rounded-3xl text-center py-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900/90 italic'>
        About
      </h2>
        <About />
      </SectionUi>

      <SectionUi className="Education w-full">
        <Education />
      </SectionUi>

      <SectionUi className="Services w-full">
        <h2
          id="services"
          className="before:h-1 before:absolute relative before:bg-orange-800 before:w-14 before:bottom-3 before:rounded-3xl text-center py-4 text-5xl font-bold tracking-tight text-gray-900/90 italic"
        >
          Services
        </h2>
        <Services />
      </SectionUi>

      <SectionUi className="Skills w-full">
        <h2  id="skills" className="before:h-1 before:absolute relative before:bg-orange-800 before:w-14 before:bottom-3 before:rounded-3xl text-center py-4 text-5xl font-bold tracking-tight text-gray-900/90 italic">
          Skills
        </h2>
        <Skills />
      </SectionUi>

      <SectionUi className="Projects w-full">
        <h2  id="projects" className="before:h-1 before:absolute relative before:bg-orange-800 before:w-14 before:bottom-3 before:rounded-3xl text-center py-4 text-5xl font-bold tracking-tight text-gray-900/90 italic">
          Projects
        </h2>
        <Projects />
      </SectionUi>
    </main>
  );
}
