"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Building2, 
  Truck, 
  BarChart3, 
  Globe, 
  Zap, 
  Users,
  CheckCircle,
  TrendingUp
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BusinessUnits = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [activeTab, setActiveTab] = useState('gt');

  const businessUnits = {
    gt: {
      title: "Elis Global Trade (GT)",
      subtitle: "For Medium to Large Companies",
      description: "Integrates seamlessly with your ERP, filling the gaps with end-to-end supply chain visibility, automation, and analytics. Say goodbye to spreadsheets and hello to streamlined operations.",
      target: "Medium to large companies with complex international logistics operations, often relying on ERP systems that lack robust supply chain functionality, leading to inefficiencies and manual workarounds.",
      
      benefits: [
        "Automate manual processes for customs, freight, and inventory management",
        "Gain real-time insights into global shipments to reduce delays and costs",
        "Enhance decision-making with AI-driven forecasting and optimization"
      ],
      
      useCase: {
        company: "Global Manufacturer",
        result: "25% reduction in lead times",
        detail: "Uses Elis GT to sync its SAP system with real-time shipment data, cutting lead times by 25%, eliminating manual documentation errors and avoiding extra costs"
      },
      
      features: [
        { icon: Building2, title: "ERP Integration", desc: "Seamless connection with SAP, Oracle, and more enterprise systems" },
        { icon: BarChart3, title: "Supply Chain Analytics", desc: "End-to-end visibility and actionable insights across your operations" },
        { icon: Zap, title: "Process Automation", desc: "Eliminate manual workflows and reduce human error" }
      ],
      
      color: "purple",
      gradient: "from-[#7e4192] to-[#a456b8]",
      bgGradient: "from-[#7e4192]/10 to-[#a456b8]/10"
    },
    
    gl: {
      title: "Elis Global Logistics (GL)",
      subtitle: "For Logistics Companies in LATAM",
      description: "Provides a cloud-based platform to manage and track shipments worldwide, with tools for route optimization, compliance, and customer communication.",
      target: "Logistics companies in Latin America seeking to modernize their shipment control and management systems.",
      
      benefits: [
        "Centralize control of air, ocean, and land shipments in one dashboard",
        "Improve delivery times with AI-powered route planning and alerts",
        "Offer clients transparent tracking for a competitive edge"
      ],
      
      useCase: {
        company: "LATAM Freight Forwarder",
        result: "35% operational cost reduction",
        detail: "Uses Elis GL to manage 500+ weekly shipments, reducing operational costs by 35% and improving client retention with real-time tracking portals"
      },
      
      features: [
        { icon: Truck, title: "Multi-Modal Tracking", desc: "Comprehensive tracking for air, ocean, and land shipments" },
        { icon: Globe, title: "Route Optimization", desc: "AI-powered planning and real-time alerts for optimal delivery" },
        { icon: Users, title: "Client Portals", desc: "Transparent tracking portals to enhance customer experience" }
      ],
      
      color: "teal",
      gradient: "from-[#0e7d80] to-[#1aa5a8]",
      bgGradient: "from-[#0e7d80]/10 to-[#1aa5a8]/10"
    }
  };

  // Additional solutions data
  const additionalSolutions = [
    {
      icon: "🛒",
      title: "E-Commerce",
      description: "Streamline fulfillment and delight customers with faster deliveries"
    },
    {
      icon: "🏭",
      title: "Manufacturing", 
      description: "Optimize inventory and ensure on-time production cycles"
    },
    {
      icon: "🏪",
      title: "Retail",
      description: "Manage multi-channel distribution with ease and precision"
    }
  ];

  const currentUnit = businessUnits[activeTab as keyof typeof businessUnits];

  useGSAP(() => {
    // Animación de la sección
    gsap.fromTo(".header-badge", 
      { opacity: 0, y: 20, scale: 0.9 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".business-units-section",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".business-units-title", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".business-units-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".test-subtitle", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".test-subtitle",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".main-description", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".main-description",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".business-units-tabs", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".business-units-tabs",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".business-units-content", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".business-units-content",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section className="business-units-section relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden" ref={containerRef}>
      {/*     <section className="business-units-section relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/50 overflow-hidden" ref={containerRef}> */}
      {/* Background decorations - ELIS themed */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0e7d80]/10 to-[#7e4192]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#7e4192]/5 to-[#0e7d80]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge minimalista - solo texto e icono */}
          <div className="header-badge inline-block mb-6 opacity-0">
            <span className="text-[#7e4192] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4" />
              Tailored Solutions
            </span>
          </div>

          {/* Main Title */}
          <h1 className="business-units-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 opacity-0">
            Tailored{" "}
            <span className="bg-gradient-to-r from-[#7e4192] via-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent">
              Logistics
            </span>{" "}
            for{" "}
            <br className="hidden sm:block" />
            Your Business
          </h1>

          {/* Subtitle */}
          <p className="test-subtitle text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 opacity-0">
            From complex global trade to regional logistics, ELIS delivers solutions designed for your unique needs.
          </p>
          
          {/* Description */}
          <p className="main-description text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0">
            No two businesses are alike, and neither are their logistics challenges. ELIS offers specialized solutions through two core business units — <strong className="text-[#7e4192] font-bold">Elis Global Trade (Elis GT)</strong> and <strong className="text-[#0e7d80] font-bold">Elis Global Logistics (Elis GL)</strong> — to empower your operations with{" "}
            <span className="font-bold bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent">
              ELIS
            </span>{" "}
            technology.
          </p>
        </div>

        {/* Tabs */}
        <div className="business-units-tabs flex justify-center mb-12 opacity-0">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 inline-flex shadow-lg border border-gray-200/50">
            <button
              onClick={() => setActiveTab('gt')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'gt'
                  ? 'bg-gradient-to-r from-[#7e4192] to-[#a456b8] text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:text-[#7e4192] hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>Elis GT</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('gl')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'gl'
                  ? 'bg-gradient-to-r from-[#0e7d80] to-[#1aa5a8] text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:text-[#0e7d80] hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Elis GL</span>
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="business-units-content opacity-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h3 className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${currentUnit.gradient} bg-clip-text text-transparent mb-2`}>
                    {currentUnit.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">{currentUnit.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {currentUnit.description}
                  </p>
                </div>

                {/* Target Audience */}
                <div className={`bg-gradient-to-r ${currentUnit.bgGradient} rounded-2xl p-6 border border-gray-100/50 backdrop-blur-sm`}>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#7e4192]" />
                    Who It&#39;s For:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{currentUnit.target}</p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#0e7d80]" />
                    Key Benefits:
                  </h4>
                  <div className="space-y-3">
                    {currentUnit.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#7e4192] to-[#0e7d80] flex items-center justify-center mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Case */}
                <div className={`bg-gradient-to-r ${currentUnit.gradient} rounded-2xl p-6 text-white shadow-xl border border-white/20`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-lg text-gray-300 ">Success Story</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-lg font-medium text-white">
                      <span className="font-bold text-gray-300 ">{currentUnit.useCase.company}:</span> 
                      <span className="ml-1 text-white">{currentUnit.useCase.result}</span>
                    </p>
                    <p className="text-white leading-relaxed font-normal">
                      {currentUnit.useCase.detail}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`group px-8 py-4 bg-gradient-to-r ${currentUnit.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}>
                    <span>Request Demo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Content - Features Grid */}
              <div className="space-y-6">
                <div className="grid gap-6">
                  {currentUnit.features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50 hover:border-gray-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${currentUnit.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800 mb-2 group-hover:text-[#7e4192] transition-colors">
                              {feature.title}
                            </h5>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Platform Preview */}
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentUnit.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className={`w-16 h-16 bg-gradient-to-r ${currentUnit.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Building2 className="w-8 h-8" />
                        </div>
                        <p className="font-semibold text-lg mb-1 text-white">Platform Preview</p>
                        <p className="text-sm text-white">Interactive demo available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Solutions */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Additional Solutions
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              ELIS adapts to various industries with specialized features and integrations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalSolutions.map((solution, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#7e4192] transition-colors">
                  {solution.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto">
              <span>Find Your ELIS Solution</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-600 mt-3">Let&apos;s Talk Logistics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessUnits;