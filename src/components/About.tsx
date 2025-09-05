import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, Award, Clock, Lightbulb } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Users,
      title: "Client-Centric",
      description: "We prioritize our clients' success and work collaboratively to achieve their goals.",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We deliver high-quality solutions that exceed expectations and industry standards.",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure projects are delivered on time, every time.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to create innovative solutions.",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

 const team = [
  {
    name: "Farzan Haider",
    designation: "Co-Founder & Director – Operations",
    role: "Full-Stack & AI Specialist",
    experience: "3+ years",
    specialties: ["MERN Stack", "SQL", "Python", "AWS", "Team Leadership"],
    image: "farzan.jpeg",
  },
  {
    name: "Amna Fayyaz",
    designation: "Co-Founder & Director – Finance",
    role: "UI/UX Designer, Frontend Developer & Digital Marketing",
    experience: "4+ years",
    specialties: ["Design Systems", "React", "Next", "Figma", "SEO"],
    image: "/mam-amna.jpeg",
  },
  {
    name: "Musaffa Riaz",
    designation: "Co-Founder & Director – Technology",
    role: "Backend Developer & WordPress",
    experience: "2+ years",
    specialties: ["Node.js", "Express.js", "MongoDB", "SQL", "C/C++"],
    image: "miss-musaffa.jpeg",
  },
];


  return (
    <section id="about" className="bg section-padding bg-card/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 block bg-gradient-to-r from-green-600 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
            About Code Lab Innovations
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            We are a passionate team of developers and designers dedicated to creating
            exceptional digital experiences that drive business growth.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="text-3xl block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow font-semibold mb-6">
              Our Story
            </h3>
            <p className=" mb-6 leading-relaxed">
              Founded in 2020, Code Lab Innovations was built on a simple belief: every business deserves access to cutting-edge software solutions. What began as a vision shared by a team of passionate innovators has quickly evolved into a full-service software house.
            </p>
            <p className="mb-6 leading-relaxed">
              From helping startups bring their first ideas to life, to supporting enterprises in their digital transformation journeys, we deliver solutions that drive real impact. Our focus on innovation, quality, and long-term partnerships has made us a reliable technology partner for businesses worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow mb-2">50+</div>
                <div className="">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow mb-2">25+</div>
                <div className="">Happy Clients</div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-3xl font-semibold mb-6 block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
                Our Mission
              </h3>
              <p className="mb-6 leading-relaxed">
                To empower businesses with innovative software solutions that not only meet
                today's challenges but anticipate tomorrow's opportunities.
              </p>
              <h4 className="text-xl font-semibold mb-4 block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
                Our Vision
              </h4>
              <p className="leading-relaxed">
                To be the go-to software development partner for businesses seeking to
                leverage technology for growth, efficiency, and competitive advantage.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-12 block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover-glow transition-all duration-500 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  } bg-white/20 backdrop-blur-lg border border-white/20`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h4>
                <p className="text-white text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>

            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-12 block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover-glow transition-all duration-500 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  } bg-white/20 backdrop-blur-lg border border-white/20`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
               <img
  src={member.image}
  alt={member.name}
  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-white/30 shadow-md"
/>

                <h4 className="text-lg font-semibold mb-2 block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
                  {member.name}
                </h4>
                <p className="text-white text-sm mb-4">{member.designation}</p>
                <p className="text-white font-medium mb-2">{member.role}</p>
                <p className="text-white text-sm mb-4">{member.experience}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="bg-accent/10 text-accent px-2 py-1 rounded text-xs"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </Card>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
