import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import {
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiReact,
  SiVite,
  SiMui,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiMysql,
  SiRedis,
  SiLinux
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: IconType;
}

interface GroupedSkills {
  [category: string]: Skill[];
}

const skills: Skill[] = [
  { name: 'TypeScript', level: 90, category: 'Languages', icon: SiTypescript },
  { name: 'Python', level: 50, category: 'Languages', icon: SiPython },
  { name: 'Java', level: 50, category: 'Languages', icon: DiJava },
  { name: 'NodeJs', level: 90, category: 'Backend', icon: SiNodedotjs },
  { name: 'ExpressJs', level: 95, category: 'Backend', icon: SiExpress },
  { name: 'NestJs', level: 70, category: 'Backend', icon: SiNestjs },
  { name: 'Laravel', level: 70, category: 'Backend', icon: SiLaravel },
  { name: 'ReactJs', level: 90, category: 'Frontend', icon: SiReact },
  { name: 'Vite', level: 90, category: 'Frontend', icon: SiVite },
  { name: 'Material UI', level: 90, category: 'Frontend', icon: SiMui },
  { name: 'Tailwind CSS', level: 80, category: 'Frontend', icon: SiTailwindcss },
  { name: 'MongoDB', level: 90, category: 'Database', icon: SiMongodb },
  { name: 'MySql', level: 80, category: 'Database', icon: SiMysql },
  { name: 'PostgreSql', level: 80, category: 'Database', icon: SiPostgresql },
  { name: 'Redis', level: 80, category: 'Database', icon: SiRedis },
  { name: 'Linux', level: 70, category: 'DevOps', icon: SiLinux },
  { name: 'Docker', level: 60, category: 'DevOps', icon: SiDocker },
  { name: 'AWS', level: 60, category: 'DevOps', icon: SiAmazonwebservices },
];

const SkillPage: React.FC = () => {
  // Group skills by category
  const groupedSkills: GroupedSkills = skills.reduce((acc: GroupedSkills, skill: Skill) => {
    const category: string = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <MotionContainer id="skill">
      <div className="max-w-4xl w-full pb-12">
        <MotionItem
          as="h2"
          variant
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </MotionItem>

        <div className="space-y-16">
          {Object.entries(groupedSkills).map(([category, categorySkills]: [string, Skill[]], categoryIndex: number) => (
            <MotionItem
              key={category}
              variant
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-gray-300 mb-8 uppercase tracking-wider">
                {category}
              </h3>

              {/* Skills List */}
              <div className="space-y-6">
                {categorySkills.map((skill: Skill, skillIndex: number) => (
                  <MotionItem
                    key={skill.name}
                    variant
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <skill.icon className="text-2xl text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                        <span className="text-lg font-medium text-white group-hover:text-gray-100 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-1">
                      <MotionItem
                        variant
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </MotionItem>
                ))}
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </MotionContainer>
  )
}

export default SkillPage;