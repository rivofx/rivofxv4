'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: 'Project RivoFX',
      description: 'A futuristic web application with real-time data visualization and interactive UI components.',
      tags: ['TypeScript 87.5%', 'HTML 11.3%', 'Other 1.2%'],
      codeLink: 'https://github.com/rivofx/rivofx',
      liveLink: 'https://www.rivofx.com/',
    },
    {
      title: 'Project DNXEdits',
      description: 'AI-powered analytics dashboard with predictive insights and automated reporting.',
      tags: ['TypeScript 87.5%', 'HTML 11.3%', 'Other 1.2%'],
      codeLink: 'https://github.com/rivofx/dnx',
      liveLink: 'https://www.dnxedits.eu/',
    },
  ];

  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Database Design', level: 82 },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold">
            <span className="text-white">bogdicn</span>
            <span className="text-[#ff0000]">.com</span>
          </div>
          <div className="flex gap-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#aaaaaa] hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 600"
          style={{ animation: mounted ? 'drawPath 3s ease-in-out infinite' : 'none' }}
        >
          <path
            d="M 50 300 Q 200 100, 400 300 T 750 300"
            stroke="#ff0000"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            style={{ animation: mounted ? 'dash 3s ease-in-out infinite' : 'none' }}
          />
        </svg>

        <div className="text-center z-10 px-6">
          <div className="mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              bogdicn
            </h1>
            <div className="text-xl md:text-2xl text-[#aaaaaa] mb-2">
              Website Builder & Developer
            </div>
            <div className="text-sm md:text-base text-[#666666] max-w-2xl mx-auto">
              Building futuristic digital websites with modern technologies
            </div>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="mt-8 px-8 py-4 bg-[#ff0000] hover:bg-[#cc0000] text-white font-medium rounded-lg transition-all duration-300 glow-red hover:glow-red-sm opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            View Projects
          </button>
        </div>

        <style jsx>{`
          @keyframes dash {
            0% {
              stroke-dashoffset: 1000;
            }
            50% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -1000;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out;
          }
        `}</style>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            About <span className="text-[#ff0000]">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] hover:border-[#ff0000]/30 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-[#ff0000]/20 to-transparent rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <div>
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] mb-8">
                <p className="text-[#aaaaaa] leading-relaxed mb-6">
                  Passionate builder & developer specializing in creating cutting-edge web applications and websites with modern frameworks. I love turning complex problems into elegant solutions.
                </p>
                <p className="text-[#aaaaaa] leading-relaxed">
                  With expertise in website creation, I focus on building scalable, performant applications that deliver exceptional user experiences.
                </p>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]">
                <h3 className="text-xl font-semibold mb-6">Skills & Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-[#aaaaaa]">{skill.name}</span>
                        <span className="text-sm text-[#ff0000]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#2a2a2a] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#ff0000] to-[#ff0000]/60 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured <span className="text-[#ff0000]">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#ff0000]/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#ff0000] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#aaaaaa] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#2a2a2a] text-[#aaaaaa] text-xs rounded-full border border-[#333333]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2a2a2a] hover:bg-[#333333] text-white text-sm font-medium rounded-lg transition-all duration-300 border border-[#333333] hover:border-[#ff0000]/50"
                  >
                    <Code2 size={16} />
                    View Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#ff0000] hover:bg-[#cc0000] text-white text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Get In <span className="text-[#ff0000]">Touch</span>
          </h2>

          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#aaaaaa] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-[#ff0000] transition-colors text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#aaaaaa] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-[#ff0000] transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#aaaaaa] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-[#ff0000] transition-colors text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#ff0000] hover:bg-[#cc0000] text-white font-medium rounded-lg transition-all duration-300 glow-red hover:glow-red-sm"
              >
                Send Message
              </button>
            </form>

            <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-[#2a2a2a]">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-[#ff0000] rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-[#ff0000] rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your@email.com"
                className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-[#ff0000] rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1a1a1a] py-8 text-center text-[#666666] text-sm">
        <p>&copy; {new Date().getFullYear()} bogdicn.dev. All rights reserved.</p>
      </footer>
    </div>
  );
}
