import { useEffect, useState } from "react";

const Portfolio = () => {
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

    const element = document.getElementById("portfolio");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Blog Website",
      description:
        "A fully customized WordPress blog website with a modern design.",
      image: "/blog-website.jpg",
      live: "https://insightedge.blog/",
    },
    {
      title: "Home Decor",
      description:
        "A modern home décor platform with integrated e-commerce features",
      image:
        "/decor.jpg",
      live: "https://decor-19vw.vercel.app/",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "Real-time analytics platform with machine learning insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      live: "#",
    },
    {
      title: "Fintech Banking App",
      description:
        "Secure mobile banking application with biometric authentication.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      live: "#",
    },
    {
      title: "SaaS Project Management",
      description:
        "Collaborative project management tool with time tracking.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      live: "#",
    },
  ];

  return (
 <section
id="portfolio"
  className="portfolio-section bg-white relative"
>
  <div className="max-w-7xl mx-auto h-full flex flex-col justify-center container-padding">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold gradient-text">
        Our Portfolio
      </h2>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-20 h-[50vh]">
      {/* Left Text */}
      <div className="flex-1 text-left space-y-6">
        <h3 className="text-3xl font-semibold gradient-text">
          Creative Projects
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Here you can explore a selection of my most impactful projects. Each
          project highlights different aspects of our skills, from UI/UX design to
          backend integration, mobile development, and IoT solutions.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This rotating showcase gives you a quick glimpse of the diversity and
          creativity we bring to our work.
        </p>
      </div>

      {/* Rotating Carousel */}
      <div className="flex-1 wrapper">
        <div
          className="inner"
          style={{ "--quantity": projects.length } as React.CSSProperties}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="card glass-card hover-glow group cursor-pointer"
              style={{ "--index": index } as React.CSSProperties}
              onClick={() => window.open(project.live, "_blank")}
            >
              <div className="img relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <style>{`
   /* 🔥 Full Portfolio Section */
.portfolio-section {
  background-color: #f9fafb; /* Light gray background */
  min-height: 40vh; /* Always fills viewport */
  padding: 4rem  1rem; /* Top & bottom spacing */
  display: flex;
  align-items: center;
}

/* 🔥 Carousel Wrapper */
.wrapper {
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.inner {
  --w: 150px; /* card width */
  --h: 250px; /* card height */
  --translateZ: calc((var(--w) + var(--h)) / 2.3);
  --rotateX: -10deg;
  --perspective: 1300px;
  position: absolute;
  width: var(--w);
  height: var(--h);
  transform-style: preserve-3d;
  transform: perspective(var(--perspective));
  animation: rotating 25s linear infinite;
}

.wrapper:hover .inner {
  animation-play-state: paused;
}

@keyframes rotating {
  from {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
  }
  to {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
  }
}

.card {
  position: absolute;
  inset: 0;
  transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
    translateZ(var(--translateZ));
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.4s ease, z-index 0.4s ease;
}

.card:hover {
  transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
    translateZ(var(--translateZ)) translateY(-30px);
  z-index: 2;
}

.img {
  width: 100%;
  height: 100%;
}
/* Keep your original code as-is above ⬆ */

/* ✅ Mobile fix */
@media (max-width: 768px) {
  .wrapper {
    height: 400px;       /* smaller carousel */
    overflow: hidden;    /* prevent horizontal scroll */
  }

  .inner {
    --w: 100px;          /* smaller card width */
    --h: 160px;          /* smaller card height */
    --translateZ: 180px; /* adjust depth for mobile */
  }
}

  `}
  </style>
</section>

  );
};

export default Portfolio;