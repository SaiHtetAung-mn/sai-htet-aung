import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import { 
  SiTypescript, 
  SiNodedotjs, 
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiReact,
  SiMui,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices
} from "react-icons/si";

const skills = [
  { name: 'TypeScript', level: 90, category: '', icon: SiTypescript },
  { name: 'NodeJs', level: 88, category: 'Backend', icon: SiNodedotjs },
  { name: 'NestJs', level: 88, category: 'Backend', icon: SiNestjs },
  { name: 'ExpressJs', level: 88, category: 'Backend', icon: SiExpress },
  { name: 'Laravel', level: 88, category: 'Backend', icon: SiLaravel },
  { name: 'ReactJs', level: 88, category: 'Frontend', icon: SiReact },
  { name: 'Material UI', level: 88, category: 'Frontend', icon: SiMui },
  { name: 'Tailwind CSS', level: 88, category: 'Frontend', icon: SiTailwindcss },
  { name: 'MongoDB', level: 88, category: 'Database', icon: SiMongodb },
  { name: 'PostgreSql', level: 88, category: 'Database', icon: SiPostgresql },
  { name: 'Docker', level: 88, category: 'Devops', icon: SiDocker },
  { name: 'AWS', level: 88, category: 'Devops', icon: SiAmazonwebservices },
];

const SkillPage = () => {
  return (
    <MotionContainer id="skill">
      <div className="max-w-6xl w-full pb-12">
        <MotionItem
          as="h2"
          variant
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </MotionItem>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <MotionItem
              variant
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {<skill.icon/>}
                  </span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <span className="text-sm text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>

              <div className="w-full bg-gray-700/50 rounded-full h-3 mb-2 overflow-hidden">
                <MotionItem
                  variant
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                </MotionItem>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Proficiency</span>
                <span className="text-sm font-semibold text-purple-300">{skill.level}%</span>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionContainer>
  )
}

export default SkillPage;