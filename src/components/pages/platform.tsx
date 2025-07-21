"use client";

import { useRef, useState, useMemo } from "react";
import { 
  ArrowRight, 
  Monitor,
  PieChart,
  FileText,
  Search,
  MapPin,
  Bell,
  Leaf,
  Clock,
  BarChart3,
  Eye,
  Shield,
  CheckCircle,
  Play,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PlatformSection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [activeFeature, setActiveFeature] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const platformFeatures = useMemo(() => [
    {
      id: 1,
      icon: Monitor,
      title: "Operational Dashboard",
      description: "Real-time visualization of all active operations with interactive tracking.",
      features: ["Live GPS tracking", "Dynamic calendar", "Status overview", "Interactive maps"],
      color: "from-[#7e4192] to-[#0e7d80]"
    },
    {
      id: 2,
      icon: PieChart,
      title: "Analytics & Reports",
      description: "Strategic insights with automated reporting and KPI tracking.",
      features: ["Performance KPIs", "3-year analysis", "Custom reports", "Export tools"],
      color: "from-[#0e7d80] to-[#7e4192]"
    },
    {
      id: 3,
      icon: MapPin,
      title: "360° Tracking",
      description: "Complete shipment visibility with geolocation and incident detection.",
      features: ["Real-time location", "Route optimization", "Incident alerts", "Document access"],
      color: "from-[#5FB257] via-[#009444] to-[#99C555]"
    },
    {
      id: 4,
      icon: Bell,
      title: "Smart Alerts",
      description: "Intelligent notifications for delays, storage, and critical events.",
      features: ["Delay notifications", "Storage alerts", "Critical events", "Custom rules"],
      color: "from-[#7e4192] to-[#0e7d80]"
    },
    {
      id: 5,
      icon: Leaf,
      title: "CO2 Compensation",
      description: "Automatic carbon footprint calculation and offset programs.",
      features: ["Emissions tracking", "Offset programs", "Sustainability reports", "Impact metrics"],
      color: "from-[#5FB257] via-[#009444] to-[#99C555]"
    }
  ], []);

  useGSAP(() => {
    gsap.fromTo(".platform-header", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".platform-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".feature-showcase", 
      { opacity: 0, y: 40 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".feature-showcase",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className="platform-section relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0e7d80]/10 to-[#7e4192]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        
        {/* Header */}
        <div className="platform-header text-center mb-20 opacity-0">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
            <span className="text-[#7e4192] font-semibold text-sm">🚀 ELIS Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Complete Logistics{" "}
            <span className="bg-gradient-to-r from-[#7e4192] via-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent">
              Intelligence
            </span>{" "}
            System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the power of ELIS with our comprehensive suite of logistics management tools designed for modern supply chains.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
            <button className="px-6 py-4 border-2 border-[#7e4192] text-[#7e4192] font-semibold rounded-xl hover:bg-[#7e4192] hover:text-white transition-all duration-300">
              Request Trial
            </button>
          </div>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="feature-showcase mb-20 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Feature Navigation */}
            <div className="space-y-4">
              {platformFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const isActive = activeFeature === index;
                const isExpanded = expandedFeature === index;
                
                return (
                  <div
                    key={feature.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 ${
                      isActive ? 'border-[#7e4192] shadow-lg' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => {
                        setActiveFeature(index);
                        setExpandedFeature(isExpanded ? null : index);
                      }}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors rounded-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive ? `bg-gradient-to-r ${feature.color}` : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold transition-colors ${
                            isActive ? 'text-[#7e4192]' : 'text-gray-800'
                          }`}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      } ${isActive ? 'text-[#7e4192]' : 'text-gray-400'}`} />
                    </button>
                    
                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-48 pb-6' : 'max-h-0'
                    }`}>
                      <div className="px-6">
                        <div className="grid grid-cols-2 gap-3">
                          {feature.features.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Feature Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7e4192]/20 to-[#0e7d80]/20"></div>
                  <div className="relative text-center text-white">
                    <div className={`w-20 h-20 bg-gradient-to-r ${platformFeatures[activeFeature].color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {(() => {
                        const IconComponent = platformFeatures[activeFeature].icon;
                        return <IconComponent className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{platformFeatures[activeFeature].title}</h3>
                    <p className="text-white/80">Interactive Demo Preview</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                    ● LIVE
                  </div>
                </div>
                
                {/* Feature Details */}
                <div className="mt-6 text-white">
                  <h4 className="font-semibold mb-3">Key Capabilities:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {platformFeatures[activeFeature].features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#0e7d80] rounded-full"></div>
                        <span className="text-sm text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveFeature(activeFeature > 0 ? activeFeature - 1 : platformFeatures.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={() => setActiveFeature(activeFeature < platformFeatures.length - 1 ? activeFeature + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#7e4192] via-[#0e7d80] to-[#7e4192] rounded-3xl p-12 lg:p-16 text-white">
            <h3 className="text-4xl font-bold mb-6">Experience ELIS Platform</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to see how ELIS can transform your logistics operations? Get a personalized demo.
            </p>
            <button className="px-10 py-5 bg-white text-[#7e4192] font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto">
              <span className="text-lg">Request Live Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformSection;