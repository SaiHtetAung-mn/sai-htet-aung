import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import CursorFollower from "../components/CursorFollower";
import Navigation from "../layouts/Navigation";
import HomePage from "./Home";
import AboutPage from "./About";
import SkillPage from "./Skill";
import PortfolioPage from "./Portfolio";
import ExperiencePage from "./Experience";
import ContactPage from "./Contact";
import MotionItem from "../components/MotionItem";

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const pageContainerRef = useRef(null);

  const pages = [
    { component: HomePage, key: 'home', id: 'home' },
    { component: AboutPage, key: 'about', id: 'about' },
    { component: SkillPage, key: 'skills', id: 'skill' },
    { component: PortfolioPage, key: 'portfolio', id: 'portfolio' },
    { component: ExperiencePage, key: 'experience', id: 'experience' },
    { component: ContactPage, key: 'contact', id: 'contact' }
  ];

  // Sync activeSection with currentPage
  useEffect(() => {
    setActiveSection(pages[currentPage].id);
  }, [currentPage]);

  // Handle navigation clicks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const pageIndex = pages.findIndex(page => page.id === hash);
      if (pageIndex !== -1) {
        setCurrentPage(pageIndex);
      }
    };

    // Listen for hash changes (navigation clicks)
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);



  // Enhanced scroll and keyboard navigation
  useEffect(() => {
    let touchStartY = 0;
  let touchEndY = 0;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const distance = touchStartY - touchEndY;

    if (Math.abs(distance) < 50 || isScrolling) return;

    setIsScrolling(true);

    if (distance > 0 && currentPage < pages.length - 1) {
      // swipe up
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      window.history.pushState(null, '', `#${pages[newPage].id}`);
    } else if (distance < 0 && currentPage > 0) {
      // swipe down
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      window.history.pushState(null, '', `#${pages[newPage].id}`);
    }

    setTimeout(() => setIsScrolling(false), 600);
  };

  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);

    const handleWheel = (e: any) => {
      if (isScrolling) return;
      
      const container = pageContainerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
      const hasScrollableContent = scrollHeight > clientHeight;

      // If content is scrollable and user is not at boundary, allow normal scroll
      if (hasScrollableContent && !isAtTop && !isAtBottom) {
        return; // Let the normal scroll happen
      }

      // Only navigate between pages if:
      // 1. Content is not scrollable, OR
      // 2. Content is scrollable but user is at top/bottom boundary
      if (!hasScrollableContent || 
          (hasScrollableContent && ((e.deltaY > 0 && isAtBottom) || (e.deltaY < 0 && isAtTop)))) {
        
        e.preventDefault();
        setIsScrolling(true);
        
        if (e.deltaY > 0 && currentPage < pages.length - 1) {
          const newPage = currentPage + 1;
          setCurrentPage(newPage);
          window.history.pushState(null, '', `#${pages[newPage].id}`);
        } else if (e.deltaY < 0 && currentPage > 0) {
          const newPage = currentPage - 1;
          setCurrentPage(newPage);
          window.history.pushState(null, '', `#${pages[newPage].id}`);
        }
        
        setTimeout(() => setIsScrolling(false), 500);
      }
    };

    const handleKeyDown = (e: any) => {
      if (isScrolling) return;
      
      // Only handle page navigation keys if we're at content boundaries
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const container = pageContainerRef.current;
        if (container) {
          const { scrollTop, scrollHeight, clientHeight } = container;
          const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
          const hasScrollableContent = scrollHeight > clientHeight;
          
          if (!hasScrollableContent || isAtBottom) {
            if (currentPage < pages.length - 1) {
              e.preventDefault();
              setIsScrolling(true);
              const newPage = currentPage + 1;
              setCurrentPage(newPage);
              window.history.pushState(null, '', `#${pages[newPage].id}`);
              setTimeout(() => setIsScrolling(false), 500);
            }
          }
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const container = pageContainerRef.current;
        if (container) {
          const { scrollTop, scrollHeight, clientHeight } = container;
          const isAtTop = scrollTop === 0;
          const hasScrollableContent = scrollHeight > clientHeight;
          
          if (!hasScrollableContent || isAtTop) {
            if (currentPage > 0) {
              e.preventDefault();
              setIsScrolling(true);
              const newPage = currentPage - 1;
              setCurrentPage(newPage);
              window.history.pushState(null, '', `#${pages[newPage].id}`);
              setTimeout(() => setIsScrolling(false), 500);
            }
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);

      window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentPage, isScrolling, pages.length]);

  // Reset scroll position when page changes
  useEffect(() => {
    if (pageContainerRef.current) {
      //@ts-ignore
      pageContainerRef.current.scrollTop = 0;
    }
  }, [currentPage]);

  const pageVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
      scale: 0.98,
    }),
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? -50 : 50,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    })
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Scroll Progress Bar */}
      <MotionItem
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform-origin-0 z-50"
        animate={{ scaleX: (currentPage + 1) / pages.length }}
        transition={{ duration: 0.5 }}
      />
      
      <CursorFollower />
      <Navigation activeSection={activeSection} />
      
      {/* Page Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {pages.map((_, index) => (
          <MotionItem
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentPage === index
                ? 'bg-purple-500 scale-125'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            onClick={() => {
              setCurrentPage(index);
              window.history.pushState(null, '', `#${pages[index].id}`);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <main className="h-screen pt-20">
        <AnimatePresence mode="wait" custom={1}>
          <MotionItem
            key={pages[currentPage].key}
            custom={1}
            variants={pageVariants as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-full"
          >
            <div 
              ref={pageContainerRef}
              className="h-full overflow-y-auto scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <CurrentPageComponent />
            </div>
          </MotionItem>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default LandingPage;