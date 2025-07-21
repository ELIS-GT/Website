"use client";

import { useRef, useMemo } from "react";
import { 
  ArrowRight, 
  Shield,
  Globe,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  Eye,
  Zap,
  Award,
  Quote
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  const whyStats = useMemo(() => [
    { label: "Global Partners", value: "100+", icon: Globe },
    { label: "Client Retention", value: "95%", icon: Users },
    { label: "Cost Savings", value: "25%", icon: TrendingUp },
    { label: "Customer Rating", value: "4.9/5", icon: Star }
  ], []);

  const benefits = useMemo(() => [
    {
      icon: Eye,
      title: "Transparency You Can Count On",
      description: "Clear pricing, no hidden fees, and total visibility into every aspect of your logistics operations."
    },
    {
      icon: Globe,
      title: "Global Reach, Local Expertise", 
      description: "Access a network of trusted partners across 100+ countries with deep local market knowledge."
    },
    {
      icon: Users,
      title: "Customer-Centric Innovation",
      description: "ELIS evolves with your feedback and industry trends, ensuring you always have cutting-edge solutions."
    }
  ], []);

  useGSAP(() => {
    // Header animation
    gsap.fromTo(".why-badge", 
      { opacity: 0, y: 20, scale: 0.9 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".why-title", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".why-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".why-description", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".why-description",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Benefits animation
    gsap.fromTo(".benefit-card", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".benefits-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );



    // Testimonial animation
    gsap.fromTo(".testimonial-card", 
      { opacity: 0, scale: 0.95 }, 
      { 
        opacity: 1, scale: 1,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".testimonial-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // CTA animation
    gsap.fromTo(".why-cta", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".why-cta",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section className="why-section relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0e7d80]/10 to-[#7e4192]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#7e4192]/5 to-[#0e7d80]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          {/* Badge */}
          <div className="why-badge inline-block mb-6 opacity-0">
            <span className="text-[#7e4192] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
              <Award className="w-4 h-4" />
              Why Choose ELIS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="why-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 opacity-0">
            Your Partner in{" "}
            <span className="bg-gradient-to-r from-[#7e4192] via-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent">
              Global Success
            </span>
          </h1>

          {/* Description */}
          <div className="why-description max-w-4xl mx-auto opacity-0">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              <strong className="text-gray-800">ELIS is more than a logistics platform—we&#39;re your competitive edge in a connected world.</strong>
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              At ELIS, we believe logistics should empower, not overwhelm. That&#39;s why we&#39;ve built a platform that combines advanced technology with human expertise to deliver results you can trust.
            </p>
            
            {/* Stats */}
            <div className="bg-gradient-to-r from-[#7e4192]/5 via-white to-[#0e7d80]/5 rounded-2xl p-6 lg:p-8 border border-gray-100">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {whyStats.map((stat, index) => {
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

        {/* Benefits Section */}
        <div className="benefits-section mb-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">🎯 Key Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Why Businesses Choose ELIS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that make ELIS the preferred logistics platform for companies worldwide.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="benefit-card group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 hover:border-gray-200 opacity-0"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="testimonial-section mb-24">
          <div className="testimonial-card max-w-4xl mx-auto opacity-0">
            <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed text-center mb-8 italic">
                &quot;ELIS transformed our supply chain. With Elis GT, we&#39;ve eliminated manual processes and gained full visibility into our global operations.&quot;
              </blockquote>
              
              <div className="text-center">
                <div className="text-gray-800 font-semibold mb-1">Supply Chain Director</div>
                <div className="text-gray-600">Global Manufacturing Company</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="why-cta text-center opacity-0">
          <div className="relative bg-gradient-to-br from-[#7e4192] via-[#0e7d80] to-[#7e4192] rounded-3xl p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-semibold text-sm">🚀 Ready to Transform?</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Discover Why Businesses Trust ELIS
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
                Join thousands of companies who have transformed their logistics operations with ELIS. 
                Experience the difference that transparency, expertise, and innovation can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-10 py-5 bg-white text-[#7e4192] font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span className="text-lg">Start Your Transformation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>View Success Stories</span>
                  <Star className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;