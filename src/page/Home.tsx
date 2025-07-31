import { useEffect, useState } from "react";
import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import personalInfo from "../config/personal-info.json";
import MyImage from "../assets/images/me-1.jpeg";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const fullName = "Sai Htet Aung";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Sequential animation triggers
    const socialTimer = setTimeout(() => setShowSocial(true), 4600);
    const scrollTimer = setTimeout(() => setShowScroll(true), 5300);

    return () => {
      clearTimeout(timer);
      clearTimeout(socialTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <MotionContainer id="home">
      <div className="text-center max-w-4xl">
        <MotionItem className="mb-8" variant>
          <div className="relative inline-block">
            <img
              src={MyImage}
              alt="Sai Htet Aung"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-purple-400 shadow-2xl"
            />
            <MotionItem
              className="absolute inset-0 rounded-full border-4 border-purple-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </MotionItem>

        <MotionItem 
          className="mb-8 text-4xl md:text-6xl font-light text-purple-300"
          initial={{ opacity: 0, y: 60, rotateX: 45 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 60,
            rotateX: isVisible ? 0 : 45
          }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <div className="relative perspective-1000">
            Hi, I'm{" "}
            <MotionItem
              as="span"
              className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30, rotateY: -20 }}
              animate={{ 
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -30,
                rotateY: isVisible ? 0 : -20
              }}
              transition={{ 
                duration: 0.7, 
                delay: 0.6,
                type: "spring",
                stiffness: 120
              }}
            >
              {fullName}
            </MotionItem>
            
            {/* Dynamic background glow */}
            <MotionItem
              className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl rounded-full"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: isVisible ? 1 : 0,
                rotate: isVisible ? 0 : -180
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.8,
                type: "spring",
                stiffness: 80
              }}
            />
          </div>
        </MotionItem>

        <MotionItem 
          className="text-2xl md:text-4xl text-gray-300 mb-8 max-w-2xl mx-auto bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 30,
            filter: isVisible ? "blur(0px)" : "blur(10px)"
          }}
          transition={{ 
            duration: 0.8, 
            delay: 1.5,
            type: "spring",
            stiffness: 100
          }}
        >
          Fullstack Engineer
        </MotionItem>

        <MotionItem 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 30,
            filter: isVisible ? "blur(0px)" : "blur(10px)"
          }}
          transition={{ 
            duration: 0.8, 
            delay: 2.2,
            type: "spring",
            stiffness: 100
          }}
        >
          Crafting beautiful, scalable web applications with modern technologies
        </MotionItem>

        {/* Enhanced Social Links Section */}
        <MotionItem
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: showSocial ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {[
            { 
              icon: Github, 
              label: 'GitHub', 
              href: personalInfo.github,
              color: 'from-gray-600 to-gray-800',
              hoverColor: 'hover:from-gray-500 hover:to-gray-700'
            },
            { 
              icon: Linkedin, 
              label: 'LinkedIn', 
              href: personalInfo.linkedin,
              color: 'from-blue-600 to-blue-800',
              hoverColor: 'hover:from-blue-500 hover:to-blue-700'
            },
            { 
              icon: Mail, 
              label: 'Email', 
              href: `mailto:${personalInfo.email}`,
              color: 'from-red-600 to-red-800',
              hoverColor: 'hover:from-red-500 hover:to-red-700'
            }
          ].map((social, index) => (
            <MotionItem
              as="a"
              key={index}
              href={social.href}
              target="_blank"
              className={`group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${social.color} ${social.hoverColor} backdrop-blur-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ 
                opacity: showSocial ? 1 : 0,
                y: showSocial ? 0 : 30,
                scale: showSocial ? 1 : 0.8
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative z-10 flex items-center gap-3">
                <social.icon size={20} className="text-white" />
                <span className="text-white font-medium">{social.label}</span>
              </div>
            </MotionItem>
          ))}
        </MotionItem>

        {/* Resume Download Button */}
        {/* <MotionItem
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: showResume ? 1 : 0,
            scale: showResume ? 1 : 0.8,
            y: showResume ? 0 : 20
          }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 150
          }}
        >
          <MotionItem
            as="a"
            href="/resume.pdf" // Update with your actual resume path
            download
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg transition-colors duration-300 text-white font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            <span>Download Resume</span>
          </MotionItem>
        </MotionItem> */}

        <MotionItem
          className="animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showScroll ? 1 : 0,
            y: showScroll ? 0 : 20
          }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 150
          }}
        >
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </MotionItem>
      </div>
    </MotionContainer>
  )
}

export default HomePage;