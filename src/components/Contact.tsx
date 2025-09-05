import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa";

const Contact = () => {
    const socials = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/company/code-lab-innovations" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/codelab.innovations" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=61579129166837" },
     { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/923170246827" },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

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

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "codelabinn@gmail.com",
      description: "Send us an email anytime!",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+92 3170246827",
      description: "Mon-Sat from 8am to 6pm",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Office # 4, Khurram Center, Ab Para Stop, Wahdat Road, Lahore",
      description: "Come say hello at our office",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="contact" className=" bg-white section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
              }`}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-foreground">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're here to answer any questions you might have about our services.
                Whether you need a simple website or a complex enterprise solution,
                we'd love to hear about your project.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`glass-card p-6 hover-glow transition-all duration-500 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-foreground">
                      {info.title}
                    </h4>
                    <p className="text-accent font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-card hover-glow flex items-center justify-center transition-all duration-300 hover:scale-110 text-accent text-xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
         <Card
  className={`glass-card glass-card-1 p-8 hover-glow transition-all duration-700 ${
    isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
  }`}
  style={{ animationDelay: "0.3s" }}
>

  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSexkAt5dryEeCSvYNKsjLqtqN0LFxEyz1coCEi8Bi3HHiRZ8Q/viewform?embedded=true"
    width="100%"
    height="650"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
  >
    Loading…
  </iframe>
</Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;