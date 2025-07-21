"use client";

import { useRef, useMemo } from "react";
import { 
  ArrowRight, 
  Globe,
  Users,
  Target,
  Award,
  Lightbulb,
  Eye,
  Leaf
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const aboutStats = useMemo(() => [
    { label: "Global Network", value: "100+", icon: Globe },
    { label: "Shipments Processed", value: "1M+", icon: Target },
    { label: "CO2 Reduced", value: "30%", icon: Leaf },
    { label: "Client Satisfaction", value: "98%", icon: Award }
  ], []);

  useGSAP(() => {
    // Header animation
    gsap.fromTo(".about-badge", 
      { opacity: 0, y: 20, scale: 0.9 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".about-title", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".about-description", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Values animation
    gsap.fromTo(".value-card", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // CTA animation
    gsap.fromTo(".about-cta", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.7,
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section className="about-section relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0e7d80]/10 to-[#7e4192]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#7e4192]/5 to-[#0e7d80]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          {/* Badge */}
          <div className="about-badge inline-block mb-6 opacity-0">
            <span className="text-[#7e4192] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              About ELIS 6.0
            </span>
          </div>

          {/* Main Title */}
          <h1 className="about-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 opacity-0">
            Moving the{" "}
            <span className="bg-gradient-to-r from-[#7e4192] via-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent">
              World
            </span>,{" "}
            <br className="hidden sm:block" />
            One Shipment at a Time
          </h1>

          {/* About Description */}
          <div className="about-description max-w-4xl mx-auto opacity-0">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              <strong className="text-gray-800">ELIS is on a mission to make global logistics smarter, faster, and more sustainable.</strong>
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Founded by innovators passionate about transforming supply chains, ELIS combines technology and expertise to empower businesses worldwide. With a global network and a commitment to sustainability, we help navigate complexities of international trade while minimizing environmental impact.
            </p>
            
            {/* Impact Stats */}
            <div className="bg-gradient-to-r from-[#7e4192]/5 via-white to-[#0e7d80]/5 rounded-2xl p-6 lg:p-8 border border-gray-100">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {aboutStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex justify-center mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="values-section mb-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">💎 Our Values</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">What Drives Us Forward</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision and guide our mission to transform global logistics.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="value-card group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 hover:border-gray-200 opacity-0">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Pioneering solutions that redefine logistics.
                </p>
              </div>
            </div>
            
            <div className="value-card group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 hover:border-gray-200 opacity-0">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#0e7d80] to-[#7e4192] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                  Transparency
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Building trust through clarity and accountability.
                </p>
              </div>
            </div>
            
            <div className="value-card group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 hover:border-gray-200 opacity-0">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#5FB257] via-[#009444] to-[#99C555] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                  Sustainability
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Reducing emissions and waste with every shipment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className="about-cta text-center opacity-0">
          <div className="relative bg-gradient-to-br from-[#7e4192] via-[#0e7d80] to-[#7e4192] rounded-3xl p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-semibold text-sm">🚀 Join Our Mission</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Meet the ELIS Team
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
                Ready to be part of the logistics revolution? Join our mission to transform global supply chains and create a more sustainable future for international trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-10 py-5 bg-white text-[#7e4192] font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span className="text-lg">Join Our Mission</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Meet the Team</span>
                  <Users className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;