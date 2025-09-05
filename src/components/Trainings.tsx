import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Monitor,         
  Smartphone,      
  Boxes,           
  Server,          
  PenTool,         
  Brush,           
  Megaphone,       
  Brain,           
} from "lucide-react";

const Trainings = () => {
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

    const element = document.getElementById("trainings");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // ✅ Your Trainings Content (unchanged, added images)
  const allTrainings = [
    {
      image: "/web-dev.jpg",
      icon: Monitor,
      title: "Web Development Training",
      description: "Master modern web development with React, Next.js & Tailwind.",
      features: ["Frontend Fundamentals", "Responsive Design", "Full-Stack Projects"],
    },
    {
      image: "/mobile-app-dev.jpg",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build cross-platform apps with React Native & Flutter.",
      features: ["UI Components", "State Management", "App Store Deployment"],
    },
    {
      image: "software-dev.jpg",
      icon: Boxes,
      title: "Software Development",
      description: "Learn to design, develop, and deploy scalable software.",
      features: ["OOP & Patterns", "Agile Practices", "Project-Based Learning"],
    },
    {
      image: "ai.jpg",
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Hands-on AI solutions: from chatbots to predictive models.",
      features: ["Python for AI", "ML Algorithms", "Real-World AI Projects"],
    },
    {
      image: "backend-dev.jpg",
      icon: Server,
      title: "Backend Development",
      description: "APIs, databases & microservices for real-world applications.",
      features: ["Node.js & Express", "GraphQL & REST APIs", "Database Design"],
    },
    {
  image: "cyber.jpg",
  icon: Brain,
  title: "Cyber Security Training",
  description: "Learn to secure systems, networks, and applications.",
  features: ["Ethical Hacking", "Network Security", "Real-World Case Studies"],
},
    {
  image: "/shopify.jpg",
  icon: Boxes,
  title: "Shopify Development",
  description: "Build eCommerce stores with Shopify and manage sales online.",
  features: ["Store Setup", "Custom Themes", "Shopify Apps Integration"],
},
   
    {
  image: "wp.jpg",
  icon: Monitor,
  title: "WordPress Development",
  description: "Create and customize websites using WordPress CMS.",
  features: ["Themes & Plugins", "WooCommerce", "Custom WordPress Projects"],
},
 {
      image: "/digital-marketing.jpg",
      icon: Megaphone,
      title: "Digital Marketing Training",
      description: "Boost online presence with campaigns and SEO strategies.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy"],
    },

    {
      image: "/graphic-design.jpg",
      icon: Brush,
      title: "Graphic Design Mastery",
      description: "Learn creative tools to craft branding and visual assets.",
      features: ["Adobe Photoshop/Illustrator", "Branding", "Social Media Creatives"],
    },
    {
      image: "UI-UX.jpg",
      icon: PenTool,
      title: "UI/UX Design Training",
      description: "Design interfaces that engage and provide great experiences.",
      features: ["Wireframing", "Figma Prototyping", "Design Systems"],
    },
{
  image: "/interview.jpg",
  icon: Megaphone,
  title: "Interview Preparation",
  description: "Boost confidence and crack technical & HR interviews.",
  features: ["Mock Interviews", "Resume Building", "Soft Skills Training"],
},

  ];

  // Training Card with Image + Content
  const TrainingCard = ({ training, index }) => {
    return (
      <div
        className={`${
          isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <Card className="overflow-hidden rounded-xl border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
          {/* Image */}
          <img
            src={training.image}
            alt={training.title}
            className="h-40 w-full object-cover"
          />

          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {training.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {training.description}
            </p>
            <h4 className="text-sm font-semibold text-accent mb-1">Key Topics</h4>
            <ul className="space-y-1">
              {training.features.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-center text-xs text-muted-foreground"
                >
                  <div className="w-1 h-1 rounded-full bg-accent mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section id="trainings" className="h-auto flex items-center bg-card/30 py-16">
      <div className="max-w-7xl mx-auto container-padding w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Trainings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipping learners and professionals with industry-ready skills in the
            digital era.
          </p>
        </div>

        {/* ✅ Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allTrainings.map((training, index) => (
            <TrainingCard training={training} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;
