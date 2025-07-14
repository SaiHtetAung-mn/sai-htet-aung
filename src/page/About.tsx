import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import MyImage from "../assets/images/me-2.jpeg";

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionItem variant>
            <img
              src={MyImage}
              alt="About Sai"
              className="rounded-2xl shadow-2xl"
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

            <div className="flex flex-wrap gap-4 mt-8">
              {['NodeJs', 'NestJs', 'ExpressJs', 'ReactJs', 'Typescript', 'Laravel', 'Mongo', 'PostgreSql'].map((tech) => (
                <MotionItem
                  key={tech}
                  className="px-4 py-2 bg-purple-500/20 rounded-full text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </MotionItem>
              ))}
            </div>
          </MotionItem>
        </div>
      </div>
    </MotionContainer>
  )
}

export default AboutPage;