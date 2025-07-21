'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { 
  CodeBracketIcon,
  MusicalNoteIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const skills = [
    { name: "C/C++ Programming", level: 90 },
    { name: "Embedded Systems", level: 85 },
    { name: "Python", level: 80 },
    { name: "Quantum Computing", level: 75 },
    { name: "Assembly Language", level: 70 },
    { name: "Systems Programming", level: 85 },
    { name: "Web Development", level: 80 },
    { name: "Music Production", level: 75 }
  ];

  const experience = [
    {
      title: "Virtual Reality Specialist",
      company: "Insight Global",
      period: "2025 - Present",
      description: "Specializing in VR development and immersive technology solutions for enterprise applications."
    },
    {
      title: "WordPress Consultant",
      company: "The Energy Council",
      period: "2024 - 2025",
      description: "Provided WordPress development and consulting services for energy industry clients."
    },
    {
      title: "Consultant and Programmer",
      company: "Bat City Archery",
      period: "2024 - 2025",
      description: "Developed custom software solutions and provided technical consulting for archery business operations."
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Southern Methodist University",
      year: "2025",
      description: "Advanced studies in computer science with focus on modern software development and systems programming."
    },
    {
      degree: "Bachelor of Arts in English Literature",
      school: "Texas State University",
      year: "2019",
      description: "Studied literature, critical thinking, and communication skills that enhance technical writing and problem-solving."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-purple-400">Me</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A programming generalist and music producer exploring diverse technologies 
              from embedded systems to quantum computing, low-level programming to web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <div className="space-y-6 text-gray-300">
                             <p>
                 I&apos;m a programming generalist and music producer who believes in the power of diverse 
                 technologies to solve complex problems. My journey began with a fascination for how 
                 computers work at every level, from the quantum realm to embedded systems.
               </p>
               <p>
                 As a programming generalist, I work across multiple domains including embedded systems, 
                 quantum computing, low-level programming, and web development. I&apos;m passionate about 
                 understanding systems from the ground up, whether that&apos;s writing assembly code for 
                 microcontrollers or implementing quantum algorithms.
               </p>
               <p>
                 In embedded systems, I focus on real-time programming, resource-constrained environments, 
                 and IoT applications. I love working with microcontrollers, understanding hardware-software 
                 interfaces, and optimizing code for performance and reliability.
               </p>
               <p>
                 My goal is to bridge the gap between different programming paradigms, whether that&apos;s 
                 implementing quantum error correction codes, designing memory allocators, or building 
                 distributed sensor networks. I believe that understanding diverse technologies makes me 
                 a more versatile and effective programmer.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
                         <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
             <p className="text-gray-300">Diverse programming skills across multiple domains</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
                             <div className="flex items-center gap-3 mb-6">
                 <CodeBracketIcon className="h-8 w-8 text-purple-400" />
                 <h3 className="text-2xl font-semibold text-white">Systems & Embedded</h3>
               </div>
              <div className="space-y-4">
                {skills.slice(0, 4).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Music Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
                             <div className="flex items-center gap-3 mb-6">
                 <MusicalNoteIcon className="h-8 w-8 text-purple-400" />
                 <h3 className="text-2xl font-semibold text-white">Quantum & Web</h3>
               </div>
              <div className="space-y-4">
                {skills.slice(4).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-12"
          >
                         <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
             <p className="text-gray-300">My professional journey across diverse programming domains</p>
          </motion.div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="h-6 w-6 text-purple-400 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
            <p className="text-gray-300">Academic background and continuous learning</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <AcademicCapIcon className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mb-12"
          >
                           <h2 className="text-3xl font-bold text-white mb-4">Interests & Passions</h2>
               <p className="text-gray-300">What drives my exploration across programming domains</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center"
            >
                             <LightBulbIcon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
               <h3 className="text-xl font-semibold text-white mb-2">Systems Thinking</h3>
               <p className="text-gray-300 text-sm">
                 Understanding how different technologies work together and solving complex systems problems.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center"
            >
                             <HeartIcon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
               <h3 className="text-xl font-semibold text-white mb-2">Quantum Computing</h3>
               <p className="text-gray-300 text-sm">
                 Exploring quantum algorithms and the future of computing at the quantum level.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center"
            >
                             <CodeBracketIcon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
               <h3 className="text-xl font-semibold text-white mb-2">Embedded Systems</h3>
               <p className="text-gray-300 text-sm">
                 Working with microcontrollers and real-time systems for IoT applications.
               </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 