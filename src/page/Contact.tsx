import MotionContainer from "../components/MotionContainer";
import MotionItem from "../components/MotionItem";
import { Mail, Phone, MapPin } from 'lucide-react';
import personalInfo from "../config/personal-info.json";
import emailConfig from "../config/send-email.json";
import { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(emailConfig.service_id, emailConfig.template_id, formRef.current, emailConfig.public_key)
      .then(
        () => {
          alert("Email sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email.");
        }
      );
  }

  return (
    <MotionContainer id="contact">
      <div className="max-w-4xl w-full">
        <MotionItem
          as="h2"
          variant
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </MotionItem>

        <div className="grid md:grid-cols-2 gap-12">
          <MotionItem variant className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
            <p className="text-gray-300 text-lg">
              I'm always open to discussing new opportunities and interesting projects.
              Feel free to reach out if you'd like to connect!
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: personalInfo.phone_no, href: `tel:${personalInfo.phone_no}` },
                { icon: MapPin, label: personalInfo.address, href: '#' }
              ].map((contact, index) => (
                <MotionItem
                  as="a"
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <contact.icon size={20} />
                  {contact.label}
                </MotionItem>
              ))}
            </div>
          </MotionItem>

          <MotionItem variant>
            <form className="space-y-6" onSubmit={sendEmail} ref={formRef}>
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                />
              </div>
              <MotionItem
                as="button"
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </MotionItem>
            </form>
          </MotionItem>
        </div>
      </div>
    </MotionContainer>
  )
}

export default ContactPage;