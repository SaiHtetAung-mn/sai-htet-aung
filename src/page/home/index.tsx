import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Menu, X, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayedName, setDisplayedName] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullName = "Sai Htet Aung";
  const fullTitle = "Full Stack Engineer";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (activeSection === 'home') {
      // Reset states
      setDisplayedName('');
      setDisplayedTitle('');
      setShowCursor(true);

      // Type name first
      const nameTimeout = setTimeout(() => {
        let nameIndex = 0;
        const nameInterval = setInterval(() => {
          if (nameIndex < fullName.length) {
            setDisplayedName(fullName.slice(0, nameIndex + 1));
            nameIndex++;
          } else {
            clearInterval(nameInterval);
            
            // Start typing title after name is complete
            setTimeout(() => {
              let titleIndex = 0;
              const titleInterval = setInterval(() => {
                if (titleIndex < fullTitle.length) {
                  setDisplayedTitle(fullTitle.slice(0, titleIndex + 1));
                  titleIndex++;
                } else {
                  clearInterval(titleInterval);
                  // Stop cursor blinking after everything is typed
                  setTimeout(() => setShowCursor(false), 1000);
                }
              }, 100);
            }, 500);
          }
        }, 150);
      }, 1000);

      return () => clearTimeout(nameTimeout);
    }
  }, [activeSection]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 90, category: 'Frontend', icon: '🔷' },
    { name: 'Node.js', level: 88, category: 'Backend', icon: '🟢' },
    { name: 'Python', level: 85, category: 'Backend', icon: '🐍' },
    { name: 'PostgreSQL', level: 80, category: 'Database', icon: '🐘' },
    { name: 'MongoDB', level: 82, category: 'Database', icon: '🍃' },
    { name: 'AWS', level: 75, category: 'Cloud', icon: '☁️' },
    { name: 'Docker', level: 78, category: 'DevOps', icon: '🐳' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI integration and modern UI',
      tech: ['Next.js', 'OpenAI API', 'Prisma', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Co.',
      period: '2023 - Present',
      description: 'Lead developer for multiple client projects, mentoring junior developers'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description: 'Developed and maintained web applications using React and Node.js'
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      period: '2020 - 2021',
      description: 'Created responsive user interfaces and collaborated with design teams'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-lg border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3 py-2 transition-colors ${
                    activeSection === item.id ? 'text-purple-400' : 'text-white/80 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/90 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <div className="relative">
              {/* Animated background circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex flex-col items-center space-y-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`relative text-xl font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
                          layoutId="mobileBg"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.section
              key="home"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div className="text-center max-w-4xl">
                <motion.div
                  variants={itemVariants}
                  className="mb-8"
                >
                  <div className="relative inline-block">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                      alt="Sai Htet Aung"
                      className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-purple-400 shadow-2xl"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-purple-400"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="mb-8 text-3xl md:text-4xl font-light text-purple-300 min-h-[3rem] flex items-center justify-center"
                >
                  Hi, I'm {displayedName}
                  <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                </motion.div>
                
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent min-h-[5rem] flex items-center justify-center"
                >
                  {displayedTitle}
                  {displayedTitle && displayedTitle.length < fullTitle.length && (
                    <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                  )}
                </motion.h1>
                
                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                  Crafting beautiful, scalable web applications with modern technologies
                </motion.p>
                
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 mb-12"
                >
                  {[
                    { icon: Github, label: 'GitHub', href: '#' },
                    { icon: Linkedin, label: 'LinkedIn', href: '#' },
                    { icon: Mail, label: 'Email', href: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                      {social.label}
                    </motion.a>
                  ))}
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  className="animate-bounce"
                >
                  <ChevronDown size={32} className="mx-auto text-purple-400" />
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === 'about' && (
            <motion.section
              key="about"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div className="max-w-4xl">
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  About Me
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div variants={itemVariants}>
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop"
                      alt="About Sai"
                      className="rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      I'm a passionate full-stack engineer with over 4 years of experience building 
                      scalable web applications. I love turning complex problems into simple, 
                      beautiful solutions.
                    </p>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      My journey in tech started with a curiosity about how things work, and has 
                      evolved into a deep passion for creating digital experiences that make a 
                      difference in people's lives.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS'].map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 bg-purple-500/20 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section
              key="skills"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div className="max-w-6xl w-full">
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Skills & Expertise
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>
                        <span className="text-sm text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full">
                          {skill.category}
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700/50 rounded-full h-3 mb-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                        </motion.div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Proficiency</span>
                        <span className="text-sm font-semibold text-purple-300">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'portfolio' && (
            <motion.section
              key="portfolio"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div className="max-w-6xl w-full">
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Featured Projects
                </motion.h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      variants={itemVariants}
                      className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-purple-500/20 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          <motion.a
                            href={project.github}
                            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Github size={16} />
                            Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <ExternalLink size={16} />
                            Live
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'experience' && (
            <motion.section
              key="experience"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div className="max-w-4xl w-full">
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Experience Timeline
                </motion.h2>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"></div>
                  
                  <div className="space-y-12">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={exp.title}
                        variants={itemVariants}
                        className={`relative flex items-center ${
                          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                        } flex-col md:gap-8`}
                      >
                        {/* Timeline dot */}
                        <motion.div
                          className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900 z-10"
                          whileHover={{ scale: 1.5 }}
                          animate={{ 
                            boxShadow: [
                              "0 0 0 0 rgba(168, 85, 247, 0.4)",
                              "0 0 0 10px rgba(168, 85, 247, 0)",
                              "0 0 0 0 rgba(168, 85, 247, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Content card */}
                        <motion.div
                          className={`w-full md:w-5/12 ${
                            index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                          } ml-16 md:ml-0`}
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                            {/* Period badge */}
                            <motion.div
                              className="inline-block mb-4"
                              whileHover={{ scale: 1.1 }}
                            >
                              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                {exp.period}
                              </span>
                            </motion.div>
                            
                            <h3 className="text-2xl font-bold mb-2 text-white">
                              {exp.title}
                            </h3>
                            
                            <h4 className="text-lg text-purple-400 mb-4 font-medium">
                              {exp.company}
                            </h4>
                            
                            <p className="text-gray-300 leading-relaxed">
                              {exp.description}
                            </p>
                            
                            {/* Step indicator */}
                            <div className={`mt-4 flex items-center gap-2 ${
                              index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                            }`}>
                              <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                <span className="text-sm text-purple-400">Step {experiences.length - index}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Spacer for desktop */}
                        <div className="hidden md:block w-5/12"></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Timeline end indicator */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 bottom-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section
              key="contact"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div className="max-w-4xl w-full">
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Get In Touch
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
                    <p className="text-gray-300 text-lg">
                      I'm always open to discussing new opportunities and interesting projects. 
                      Feel free to reach out if you'd like to connect!
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        { icon: Mail, label: 'saihtetaung@email.com', href: 'mailto:saihtetaung@email.com' },
                        { icon: Phone, label: '+95 9 123 456 789', href: 'tel:+959123456789' },
                        { icon: MapPin, label: 'Yangon, Myanmar', href: '#' }
                      ].map((contact, index) => (
                        <motion.a
                          key={index}
                          href={contact.href}
                          className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                          whileHover={{ scale: 1.05, x: 10 }}
                        >
                          <contact.icon size={20} />
                          {contact.label}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <div className="space-y-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-purple-400 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-purple-400 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your Message"
                          rows={4}
                          className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                        />
                      </div>
                      <motion.button
                        className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => alert('Message sent! (Demo only)')}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Portfolio;