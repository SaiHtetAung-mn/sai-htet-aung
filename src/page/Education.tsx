import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import { GraduationCap, BadgeCheck } from "lucide-react";
import certifications from "../config/certifications.json";
import { ExternalLink } from "lucide-react";

const EducationPage = () => {

  return (
    <MotionContainer id="education">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <MotionItem
          as="h2"
          variant
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Education
        </MotionItem>

        {/* STACKED SECTIONS */}
        <div className="space-y-12">

          {/* 🎓 University Section */}
          <MotionItem
            variant
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">University</h3>
            </div>
            <div className="text-white text-lg font-medium mb-1">
              Bachelor of Computer Science - Software Engineering
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-gray-300 text-sm">
                University of Information Technology, Yangon
              </p>
              <a href="https://www.uit.edu.mm/" target="_blank"><ExternalLink className="text-gray-400" size={16}/></a>
            </div>
            <div className="text-purple-300 text-sm mt-2">2016 – 2023</div>
          </MotionItem>

          {/* 📜 Certifications Section */}
          <MotionItem
            variant
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <BadgeCheck className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
            </div>

            <ul className="space-y-6">
              {certifications.map((cert, index) => (
                <MotionItem
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="border-l-4 border-purple-500 pl-4 text-gray-300"
                >
                  <div className="text-white font-medium">{cert.title}</div>
                  <div className="text-gray-400 text-sm">{cert.issuer}</div>
                  <div className="text-purple-400 text-xs">{cert.year}</div>
                </MotionItem>
              ))}
            </ul>
          </MotionItem>
        </div>
      </div>
    </MotionContainer>
  );
};

export default EducationPage;
