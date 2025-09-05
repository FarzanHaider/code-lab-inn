import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socials = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/company/code-lab-innovations" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/codelab.innovations" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=61579129166837" },
    { name: "Gmail", icon: <MdEmail />, url: "mailto:codelabinn@gmail.com" },
  ];
  const footerLinks = {
    Services: [
      "Web Development",
      "Mobile Apps",
      "Software Development",
      "Cybersecurity",
      "Digital Marketing",
      "UI/UX Design"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Trainings",
      "Portfolio",
      "Contact"
    ]
  };

  return (
    <footer className="bg-card/50 border-border">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img className="w-10 h-13" src="./logo.png" alt="" />
                <span className="text-xl font-bold text-primary">Code Lab Innovations</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transforming ideas into powerful digital solutions that drive business growth.
              </p>
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

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Map Section */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-4">Find Us</h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
               
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1408076.3456574632!2d71.88278065625002!3d31.520023600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905004a2350ff%3A0xc14860a6b0697318!2sCLI%20(Code%20Lab%20Innovations)!5e1!3m2!1sen!2s!4v1756554462976!5m2!1sen!2s" 
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className=" py-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Code Lab Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
