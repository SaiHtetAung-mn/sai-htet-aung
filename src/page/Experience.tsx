import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import experienceInfo from "../config/experience.json";

const ExperiencePage = () => {

  return (
    <MotionContainer id="experience">
      <div className="max-w-4xl w-full pb-12">
        <MotionItem
          as="h2"
          variant
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Experience
        </MotionItem>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceInfo.map((exp, index) => (
              <MotionItem
                key={exp.position}
                variant
                className="relative pl-20"
                whileHover={{ x: 10 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 shadow-lg">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
                </div>
                
                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-xl">
                  {/* Period Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
                    <span className="text-sm font-medium text-purple-300">
                      {exp.from_date} - {exp.to_date}
                    </span>
                  </div>
                  
                  {/* Title and Company */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-white">{exp.position}</h3>
                    <p className="text-lg text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
                </div>
              </MotionItem>
            ))}
          </div>
          
          {/* Timeline End Indicator */}
          <div className="absolute left-6 bottom-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 transform translate-y-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-40"></div>
          </div>
        </div>
      </div>
    </MotionContainer>
  )
}

export default ExperiencePage;