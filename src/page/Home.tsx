import { useEffect, useState } from "react";
import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import personalInfo from "../config/personal-info.json";
import MyImage from "../assets/images/me-1.jpeg";

const HomePage = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [displayedName, setDisplayedName] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');

  const fullName = "Sai Htet Aung";
  const fullTitle = "Full Stack Engineer";

  useEffect(() => {
    setDisplayedName('');
    setDisplayedTitle('');
    setShowCursor(true);
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

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(nameTimeout);
      clearInterval(cursorInterval);
    }
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

        <MotionItem variant className="mb-8 text-3xl md:text-4xl font-light text-purple-300 min-h-[3rem] flex items-center justify-center">
          Hi, I'm {displayedName}
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
        </MotionItem>

        <MotionItem
          as="h3"
          variant
          className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent min-h-[2rem] flex items-center justify-center"
        >
          {displayedTitle}
          {displayedTitle && displayedTitle.length < fullTitle.length && (
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          )}
        </MotionItem>

        <MotionItem variant className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting beautiful, scalable web applications with modern technologies
        </MotionItem>

        <MotionItem
          variant
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Github, label: 'GitHub', href: personalInfo.github },
            { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
            { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}` }
          ].map((social, index) => (
            <MotionItem
              as="a"
              key={index}
              href={social.href}
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} />
              {social.label}
            </MotionItem>
          ))}
        </MotionItem>

        <MotionItem
          variant
          className="animate-bounce"
        >
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </MotionItem>
      </div>
    </MotionContainer>
  )
}

export default HomePage;