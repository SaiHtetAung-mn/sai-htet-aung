import { AnimatePresence } from "framer-motion";
import { useState, useEffect, type FC } from "react";
import { Menu, X } from 'lucide-react';
import MotionItem from "../components/MotionItem";

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skill', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' }
];

const Navigation: FC<{ activeSection: string }> = ({ activeSection: propActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(propActiveSection || 'home');

  // Update local state when prop changes
  useEffect(() => {
    if (propActiveSection) {
      setActiveSection(propActiveSection);
    }
  }, [propActiveSection]);

  return (
    <>
      <MotionItem
        as="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-lg border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <MotionItem
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              { "</>" }
            </MotionItem>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <MotionItem
                  as="a"
                  href={`#${item.id}`}
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3 py-2 transition-colors ${activeSection === item.id ? 'text-purple-400' : 'text-white/80 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <MotionItem
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                    />
                  )}
                </MotionItem>
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
      </MotionItem>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MotionItem
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/90 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <div className="relative">
              {/* Animated background circle */}
              <MotionItem
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
                    <MotionItem
                      as="a"
                      href={`#${item.id}`}
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`relative text-xl font-medium px-6 py-3 rounded-full transition-all duration-300 ${activeSection === item.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <MotionItem
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
                          layoutId="mobileBg"
                        />
                      )}
                    </MotionItem>
                  ))}
                </div>
              </div>
            </div>
          </MotionItem>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation;