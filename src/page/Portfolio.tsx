import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import { Github, ExternalLink } from 'lucide-react';
import projectInfo from "../config/portfolio.json";

const PortfolioPage = () => {

  return (
    <MotionContainer id="portfolio">
      <div className="max-w-6xl w-full">
        <MotionItem
          as="h2"
          variant
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </MotionItem>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectInfo.map((project) => (
            <MotionItem
              key={project.title}
              variant
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 flex flex-col justify-between"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-500/20 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <MotionItem
                    as="a"
                    href={project.code_url}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    Code
                  </MotionItem>
                  {
                    project.demo_url &&
                    <MotionItem
                      as="a"
                      target="_blank"
                      href={project.demo_url}
                      className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={16} />
                      Live
                    </MotionItem>
                  }
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionContainer>
  )
}

export default PortfolioPage;