"use client";

import { useRef, useState, useMemo, useCallback } from "react";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3,
  Cloud,
  Settings,
  TrendingUp,
  CheckCircle,
  Cpu,
  ChevronDown,
  Monitor,
  Database,
  Lock,
  Server,
  Globe,
  Award
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Types
interface TechFeature {
  icon: any;
  title: string;
  description: string;
  benefits: string[];
}

interface AccordionItem {
  id: number;
  title: string;
  icon: any;
  description: string;
  content: {
    title: string;
    subtitle: string;
    features: string[];
    stats: { metric: string; value: string; description: string };
  };
}

const TechnologySection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Memoized data to prevent unnecessary re-renders
  const techFeatures = useMemo<TechFeature[]>(() => [

    {
      icon: Brain,
      title: "AI-Driven Optimization",
      description: "Predict delays, optimize routes, and cut costs with machine learning algorithms that learn from your operations.",
      benefits: ["Smart route planning", "Predictive analytics", "Cost reduction up to 25%"]
    },
    {
      icon: Settings,
      title: "Seamless Integrations",
      description: "Connect with your ERP, WMS, or e-commerce tools in minutes with our plug-and-play architecture.",
      benefits: ["200+ integrations", "Real-time sync", "No downtime setup"]
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security and performance that grows with your business needs.",
      benefits: ["SOC 2 compliant", "99.9% uptime", "Auto-scaling infrastructure"]
    }
  ], []);

  const techSpecs = useMemo(() => [
    { label: "API Response Time", value: "<100ms", icon: Zap },
    { label: "Data Processing", value: "Real-time", icon: BarChart3 },
    { label: "Cloud Infrastructure", value: "Multi-region", icon: Cloud },
    { label: "Uptime Guarantee", value: "99.9%", icon: TrendingUp }
  ], []);

  const accordionItems = useMemo<AccordionItem[]>(() => [
    {
      id: 0,
      title: "Dashboard & Analytics",
      icon: Monitor,
      description: "Real-time insights with customizable dashboards",
      content: {
        title: "Intelligent Dashboard System",
        subtitle: "Real-time visibility into your entire logistics network",
        features: [
          "Custom KPI dashboards",
          "Predictive analytics",
          "Real-time notifications",
          "Mobile-responsive design"
        ],
        stats: { metric: "Data Points", value: "10M+", description: "Processed daily" }
      }
    },
    {
      id: 1,
      title: "Data Management",
      icon: Database,
      description: "Centralized data hub with advanced processing",
      content: {
        title: "Advanced Data Engine",
        subtitle: "Centralized processing with enterprise-grade security",
        features: [
          "Multi-source data integration",
          "Automated data validation",
          "Historical data analytics",
          "Export & API access"
        ],
        stats: { metric: "Integration Speed", value: "<5min", description: "Average setup time" }
      }
    },
    {
      id: 2,
      title: "Security & Compliance",
      icon: Lock,
      description: "Enterprise security with compliance standards",
      content: {
        title: "Security Infrastructure",
        subtitle: "Bank-level security protecting your sensitive data",
        features: [
          "End-to-end encryption",
          "SOC 2 Type II certified",
          "GDPR compliant",
          "Multi-factor authentication"
        ],
        stats: { metric: "Security Score", value: "A+", description: "Industry leading" }
      }
    }
  ], []);

  // Optimized accordion handler
  const handleAccordionChange = useCallback((index: number) => {
    setActiveAccordion(index);
  }, []);

  useGSAP(() => {
    // Header animation
    gsap.fromTo(".tech-badge", 
      { opacity: 0, y: 20, scale: 0.9 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".technology-section",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".tech-title", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".tech-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".tech-description", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".tech-description",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Features animation
    gsap.fromTo(".tech-feature", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".tech-features",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Specs animation
    gsap.fromTo(".tech-spec", 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 1, scale: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".tech-specs",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Infrastructure animation
    gsap.fromTo(".infrastructure-card", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".infrastructure-section",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".trust-indicators", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".trust-indicators",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // CTA animation
    gsap.fromTo(".tech-cta", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.7,
        scrollTrigger: {
          trigger: ".tech-cta",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section className="technology-section relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0e7d80]/10 to-[#7e4192]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#7e4192]/5 to-[#0e7d80]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="tech-badge inline-block mb-6 opacity-0">
            <span className="text-[#7e4192] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4" />
              Technology 5.0
            </span>
          </div>

          {/* Main Title */}
          <h1 className="tech-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 opacity-0">
            Built for the{" "}
            <span className="bg-gradient-to-r from-[#7e4192] via-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent">
              Future
            </span>{" "}
            of{" "}
            <br className="hidden sm:block" />
            Logistics
          </h1>

          {/* Subtitle */}
          <p className="tech-description text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 opacity-0">
            <strong className="text-gray-800">ELIS harnesses AI, automation, and real-time data to keep you ahead of the curve.</strong>
          </p>
          
          {/* Description */}
          <p className="tech-description text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0">
            At the heart of ELIS is technology that works for you. From machine learning to cloud-based collaboration, we&apos;ve engineered every feature to simplify complexity and drive efficiency.
          </p>
        </div>

        {/* Tech Features */}
        <div className="tech-features mb-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {techFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="tech-feature group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50 hover:border-gray-200 opacity-0"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="space-y-3 w-full">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#7e4192] to-[#0e7d80] flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Accordion Section */}
        <div className="tech-accordion mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Explore ELIS Platform</h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side - Visual Content */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      {(() => {
                        const IconComponent = accordionItems[activeAccordion].icon;
                        return <IconComponent className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                      {accordionItems[activeAccordion].content.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {accordionItems[activeAccordion].content.subtitle}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {accordionItems[activeAccordion].content.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#7e4192] to-[#0e7d80] flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                    <div className="text-3xl font-bold text-[#7e4192] mb-2">
                      {accordionItems[activeAccordion].content.stats.value}
                    </div>
                    <div className="text-gray-800 font-semibold mb-1">
                      {accordionItems[activeAccordion].content.stats.metric}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {accordionItems[activeAccordion].content.stats.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Accordion */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                {accordionItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeAccordion === index;
                  
                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-2xl border transition-all duration-300 ${
                        isActive 
                          ? 'border-[#7e4192] shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <button
                        onClick={() => handleAccordionChange(index)}
                        className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors rounded-2xl"
                        aria-expanded={isActive}
                        aria-controls={`accordion-content-${index}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleAccordionChange(index);
                          }
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? 'bg-gradient-to-r from-[#7e4192] to-[#0e7d80] shadow-lg' 
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}>
                            <IconComponent className={`w-7 h-7 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                          </div>
                          <div>
                            <h3 className={`text-lg font-semibold transition-colors ${
                              isActive ? 'text-[#7e4192]' : 'text-gray-800'
                            }`}>
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                        <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                          <ChevronDown className={`w-5 h-5 ${isActive ? 'text-[#7e4192]' : 'text-gray-400'}`} />
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Specs - Redesigned */}
        <div className="tech-specs mb-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">⚡ Performance</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Built for Speed & Scale</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real numbers from our production environment</p>
          </div>
          
          {/* Performance Grid - 2 Columns */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Stats */}
            <div className="tech-spec bg-gradient-to-br from-[#7e4192]/5 via-white to-[#0e7d80]/5 rounded-3xl p-8 lg:p-10 border border-gray-100 opacity-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Performance Stats</h3>
                <p className="text-gray-600">Real-time metrics from our platform</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {techSpecs.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent mb-2">
                        {spec.value}
                      </div>
                      <div className="text-gray-600 font-medium text-sm">{spec.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="space-y-6">
              <div className="tech-spec bg-gradient-to-br from-[#7e4192]/10 to-transparent rounded-2xl p-8 border border-[#7e4192]/20 opacity-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#7e4192] rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Lightning Fast</h3>
                    <p className="text-gray-600 text-sm">Sub-100ms response times</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Optimized infrastructure ensures maximum speed, processing thousands of requests without delays.
                </p>
              </div>
              
              <div className="tech-spec bg-gradient-to-br from-[#0e7d80]/10 to-transparent rounded-2xl p-8 border border-[#0e7d80]/20 opacity-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0e7d80] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Always Available</h3>
                    <p className="text-gray-600 text-sm">99.9% uptime guarantee</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise-grade infrastructure with automatic failover and 24/7 monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure & Security */}
        <div className="infrastructure-section mb-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">🔒 Enterprise Security</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Enterprise-Grade Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Built on world-class cloud infrastructure with enterprise security standards, 
              ensuring your data is protected and your operations never stop.
            </p>
          </div>

          {/* Infrastructure Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {/* Cloud Provider */}
            <div className="infrastructure-card group bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-[#0e7d80]/30 hover:shadow-2xl hover:shadow-[#0e7d80]/10 transition-all duration-500 opacity-0 hover:-translate-y-3">
              <div className="w-20 h-20 bg-gradient-to-r from-[#0e7d80] to-[#7e4192] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#0e7d80] transition-colors">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                World-class cloud provider ensuring 99.99% uptime and global scalability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">99.99% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Global CDN Distribution</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Auto-scaling Infrastructure</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="infrastructure-card group bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-[#7e4192]/30 hover:shadow-2xl hover:shadow-[#7e4192]/10 transition-all duration-500 opacity-0 hover:-translate-y-3">
              <div className="w-20 h-20 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">Enterprise Security</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Bank-level encryption and continuous monitoring protect your data 24/7.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">AES-256 Encryption</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">GDPR Compliant</span>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="infrastructure-card group bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 opacity-0 hover:-translate-y-3 md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">Compliance & Certifications</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Meet the highest industry standards with comprehensive compliance frameworks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Annual Security Audits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators bg-gradient-to-r from-[#7e4192]/5 via-white to-[#0e7d80]/5 rounded-3xl p-10 lg:p-12 border border-gray-100 opacity-0">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Trusted by Industry Leaders</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of companies who trust ELIS with their mission-critical logistics operations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="trust-stat">
                <div className="text-3xl font-bold text-[#7e4192] mb-2">99.99%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="trust-stat">
                <div className="text-3xl font-bold text-[#0e7d80] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Security Monitoring</div>
              </div>
              <div className="trust-stat">
                <div className="text-3xl font-bold text-[#7e4192] mb-2">&lt; 50ms</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="trust-stat">
                <div className="text-3xl font-bold text-[#0e7d80] mb-2">100%</div>
                <div className="text-sm text-gray-600">Data Protection</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="tech-cta text-center opacity-0">
          <div className="relative bg-gradient-to-br from-[#7e4192] via-[#0e7d80] to-[#7e4192] rounded-3xl p-12 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-semibold text-sm">🚀 Ready to Transform?</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Experience ELIS Technology
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                See how our cutting-edge platform can transform your logistics operations with AI-powered insights and seamless automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-10 py-5 bg-white text-[#7e4192] font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span className="text-lg">Request Live Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Watch 2-min Overview</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
