import { useState } from "react";
import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import MyImage from "../assets/images/me-2.jpeg";
import { Award, Globe, Code } from 'lucide-react';

const AboutPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <MotionContainer id="about">
      <div className="max-w-4xl">
        <MotionItem
          as="h2"
          variant
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </MotionItem>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <MotionItem
            variant
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="rounded-2xl shadow-2xl overflow-hidden relative"
          >
            {/* Show skeleton while image is loading */}
            {!imageLoaded && <ImageSkeleton />}
            
            {/* Actual image */}
            <img
              src={MyImage}
              alt="About Sai"
              className={`w-full h-auto object-cover rounded-2xl transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
            
            {/* Error state */}
            {imageError && imageLoaded && (
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 bg-gray-600 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm">Image unavailable</p>
                </div>
              </div>
            )}
          </MotionItem>

          <MotionItem variant className="space-y-6">
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

            {/* <div className="flex flex-wrap gap-4 mt-8">
              {['NodeJs', 'NestJs', 'ExpressJs', 'ReactJs', 'Typescript', 'Laravel', 'Mongo', 'PostgreSql'].map((tech) => (
                <MotionItem
                  key={tech}
                  className="px-4 py-2 bg-purple-500/20 rounded-full text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </MotionItem>
              ))}
            </div> */}
          </MotionItem>
        </div>

        {/* Enhanced Stats Section */}
        <MotionItem
          variant
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-4 mt-12"
        >
          {[
            {
              icon: Award,
              title: 'Experience',
              value: '3+ Years',
              description: 'Professional Development'
            },
            {
              icon: Globe,
              title: 'Projects',
              value: '10+',
              description: 'Successfully Delivered'
            },
            {
              icon: Code,
              title: 'Specialization',
              value: 'MERN Stack',
              description: 'Full Stack Development'
            },
          ].map((item, index) => (
            <MotionItem
              key={index}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: (index) * 0.6 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="relative p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-center">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                      <item.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {item.value}
                  </div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionItem>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </MotionContainer>
  )
}

const ImageSkeleton = () => (
  <div className="w-full aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl animate-pulse relative overflow-hidden">
    {/* Shimmer effect */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    
    {/* Profile placeholder */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 bg-gray-600 rounded-full animate-pulse"></div>
    </div>
    
    {/* Additional skeleton elements */}
    <div className="absolute bottom-6 left-6 right-6 space-y-3">
      <div className="h-4 bg-gray-600 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-600 rounded w-3/4 animate-pulse"></div>
    </div>
  </div>
);

export default AboutPage;