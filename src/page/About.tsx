import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import MyImage from "../assets/images/me-2.jpeg";
import { Award, Globe, Code } from 'lucide-react';

const AboutPage = () => {
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
            className="rounded-2xl shadow-2xl overflow-hidden"
          >
            <img
              src={MyImage}
              alt="About Sai"
              className="w-full h-auto object-cover rounded-2xl"
            />
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
    </MotionContainer>
  )
}

export default AboutPage;