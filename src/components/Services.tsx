import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Monitor,         
  Smartphone,      
  Boxes,           
  Server,          
  PenTool,         
  Brush,           
  Megaphone,       // Digital Marketing
  Brain,           // AI Solutions
} from "lucide-react";
import "./Service.css"

const Services = () => {
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

    const element = document.getElementById("services");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // ✅ Unified Services List (8 Cards Total)
  const allServices = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Scalable, responsive websites crafted with React & Next.js.",
      features: ["Responsive Layouts", "SEO Optimization", "Fast Load Times"],
      color: "from-blue-500/30 to-purple-500/30",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform apps with smooth performance for iOS & Android.",
      features: ["React Native & Flutter", "App Store Launch", "Push Notifications"],
      color: "from-green-500/30 to-teal-500/30",
    },
    {
      icon: Boxes,
      title: "Software Development",
      description: "Custom solutions to streamline workflows and scale operations.",
      features: ["Business Automation", "Custom ERP & CRM", "Cross-Platform Solutions"],
      color: "from-purple-500/30 to-pink-500/30",
    },
       {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent systems that automate, analyze & predict outcomes.",
      features: ["Chatbots", "Predictive Analytics", "AI Automation"],
      color: "from-cyan-500/30 to-blue-500/30",
    },
    {
      icon: Server,
      title: "Backend Systems",
      description: "Powerful APIs and server-side systems for speed & reliability.",
      features: ["REST & GraphQL APIs", "Database Design", "Microservices"],
      color: "from-orange-500/30 to-red-500/30",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "User-centered interfaces that delight and drive engagement.",
      features: ["Wireframing", "Prototyping", "Design Systems"],
      color: "from-pink-500/30 to-purple-500/30",
    },
    {
      icon: Brush,
      title: "Graphics Designing",
      description: "Creative branding & visuals that make your business stand out.",
      features: ["Logos & Branding", "Social Media Posts", "Marketing Materials"],
      color: "from-indigo-500/30 to-green-500/30",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Boost visibility with targeted online campaigns & strategies.",
      features: ["SEO & SEM", "Social Media Ads", "Content Marketing"],
      color: "from-yellow-500/30 to-orange-500/30",
    },
 
  ];

  // Flip Card
  const FlipCard = ({ service, index }) => {
    return (
      <div
        className={`flip-container ${
          isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flip-card h-60 w-full"> {/* ⬅️ Smaller cards */}
          {/* Front */}
          <Card className="flip-front p-4 glass-card rounded-xl border border-border/50 flex flex-col items-start justify-center">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
            >
              <service.icon size={24} className="text-white drop-shadow-md" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </Card>

          {/* Back */}
          <Card className="flip-back p-4 glass-card rounded-xl border border-border/50 flex flex-col justify-center items-start">
            <h3 className="text-base font-semibold mb-2 text-accent">
              Key Features
            </h3>
            <ul className="space-y-1">
              {service.features.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-center text-xs text-muted-foreground"
                >
                  <div className="w-1 h-1 rounded-full bg-accent mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="h-auto flex items-center bg-card/30 py-16">
      <div className="max-w-7xl mx-auto container-padding w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with innovative, tailored solutions for the
            digital era.
          </p>
        </div>

        {/* ✅ Unified Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allServices.map((service, index) => (
            <FlipCard service={service} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
