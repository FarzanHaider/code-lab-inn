import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Globe, Monitor } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: "0s", position: "top-20 left-10" },
    { Icon: Zap, delay: "0.5s", position: "top-32 right-16" },
    { Icon: Globe, delay: "1s", position: "bottom-32 left-20" },
    { Icon: Monitor, delay: "0.5s", position: "bottom-32 right-16" },
  ];

  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        playsInline
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Gray Overlay */}
      <div className="absolute inset-0 bg-black/85 z-10" />

      {/* Content */}
      <section className="relative z-20 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-20 animate-float`}
            style={{ animationDelay: delay }}
          >
            <Icon size={48} className="text-white" />
          </div>
        ))}

        <div className="relative z-20 max-w-7xl mx-auto container-padding text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Crafting Digital
              <span className="block bg-gradient-to-r from-green-700 to-cyan-500 bg-clip-text text-transparent animate-pulse-glow">
                Excellence
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              We transform ideas into powerful digital solutions. From web
              applications to mobile apps, we deliver cutting-edge software that
              drives your business forward.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 glass-card hover-glow text-black border-gray-400"
              >
                <a href="#portfolio">View Our Work</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: 50, suffix: "+", label: "Projects Delivered" },
                { number: 5, suffix: "+", label: "Years Experience" },
                { number: 100, suffix: "%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${
                    isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-2 flex justify-center items-baseline">
                    <NumberTicker value={stat.number} decimalPlaces={0} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
