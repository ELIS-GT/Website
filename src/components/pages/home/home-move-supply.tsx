"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Play,
  Zap,
  Award,
  Eye,
  Truck,
  BarChart3,
  Sparkles,
  MapPin,
  Timer,
  Building2
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// Data para las cards
const processData = {
  title: "The Smart Way to Manage Global Logistics",
  details:
    "ELIS brings clarity to complexity, giving you the tools to manage every step of your supply chain with confidence",
  items: [
    {
      name: "Track in Real Time",
      details:
        "Monitor shipments across air, ocean, and land with live updates. Know where your goods are, every step of the way, with live tracking and alerts.",
      icon: "/assets/imgs/icon/icon-r-7.png",
      color: "blue",
      feature: "Real-Time Visibility",
    },
    {
      name: "Optimize with Data",
      details:
        "Make smarter decisions with predictive analytics and cost optimization tools. Leverage AI-driven analytics to reduce costs and boost efficiency.",
      icon: "/assets/imgs/icon/icon-r-8.png",
      color: "purple",
      feature: "AI-Powered Insights",
    },
    {
      name: "Collaborate Seamlessly",
      details:
        "Connect teams, partners, and suppliers on one unified platform. Navigate customs and regulations effortlessly with automated documentation.",
      icon: "/assets/imgs/icon/icon-r-9.png",
      color: "green",
      feature: "Global Compliance",
    },
  ],
};

// Data para estadísticas
const statsData = [
  {
    number: "100+",
    label: "Global Network",
    description: "Countries and regions covered",
    icon: Globe,
    color: "blue",
  },
  {
    number: "1M+",
    label: "Shipments Tracked",
    description: "Successfully processed",
    icon: TrendingUp,
    color: "green",
  },
  {
    number: "30%",
    label: "CO2 Reduced",
    description: "Environmental impact improvement",
    icon: Shield,
    color: "purple",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Customer success rate",
    icon: Star,
    color: "orange",
  },
];

// Componente principal
const HomeMoveSupply = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  // Animaciones optimizadas
  useGSAP(
    () => {
      console.log("Iniciando animaciones GSAP...");

      // Animaciones existentes...
      gsap.fromTo(
        ".header-badge",
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".header-badge",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".main-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".main-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".test-subtitle",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".test-subtitle",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".main-description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".main-description",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para trust indicators
      gsap.fromTo(
        ".trust-section",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".trust-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para estadísticas
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para benefits
      gsap.fromTo(
        ".benefits-section > div > div",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".benefits-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para social proof
      gsap.fromTo(
        ".social-proof",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".social-proof",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para success metrics
      gsap.fromTo(
        ".success-section",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ".success-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".features-title",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".features-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".features-description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1,
          scrollTrigger: {
            trigger: ".features-description",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".has_fade_anim",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cards-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".cta-section",
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      console.log("Animaciones configuradas");
    },
    { scope: containerRef }
  );

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "from-blue-50 to-blue-100",
          text: "text-blue-600",
          border: "border-blue-200",
          shadow: "shadow-blue-500/20",
          glow: "from-blue-400/20 to-blue-600/20",
        };
      case "purple":
        return {
          bg: "from-purple-50 to-purple-100",
          text: "text-purple-600",
          border: "border-purple-200",
          shadow: "shadow-purple-500/20",
          glow: "from-purple-400/20 to-purple-600/20",
        };
      case "green":
        return {
          bg: "from-green-50 to-green-100",
          text: "text-green-600",
          border: "border-green-200",
          shadow: "shadow-green-500/20",
          glow: "from-green-400/20 to-green-600/20",
        };
      case "orange":
        return {
          bg: "from-orange-50 to-orange-100",
          text: "text-orange-600",
          border: "border-orange-200",
          shadow: "shadow-orange-500/20",
          glow: "from-orange-400/20 to-orange-600/20",
        };
      default:
        return {
          bg: "from-gray-50 to-gray-100",
          text: "text-gray-600",
          border: "border-gray-200",
          shadow: "shadow-gray-500/20",
          glow: "from-gray-400/20 to-gray-600/20",
        };
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0e7d80]/10 to-[#7e4192]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#7e4192]/5 to-[#0e7d80]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container relative z-10" ref={containerRef}>
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="header-badge inline-block mb-6 opacity-0">
            <span className="text-[#7e4192] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
              <Zap className="w-4 h-4" />
              Smart Logistics Platform
            </span>
          </div>

          {/* Main Title */}
          <h1 className="main-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 opacity-0">
            Move Your{" "}
            <span className="bg-gradient-to-r from-[#7e4192] via-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent">
              SUPPLY
            </span>{" "}
            Forward{" "}
            <br className="hidden sm:block" />
            with ELIS
          </h1>

          {/* Subtitle */}
          <p className="test-subtitle text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 opacity-0">
            <strong className="text-gray-800">Gain real-time visibility, streamline operations, and optimize your global supply chain with ELIS, the intelligent logistics platform.</strong>
          </p>
          
          {/* Description */}
          <p className="main-description text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 opacity-0">
            In a world that never stops moving, your logistics shouldn&#39;t either. ELIS empowers you with end-to-end visibility, actionable insights, and effortless control over your international operations. From global logistics to customs clearance and last mile, we make logistics simple, transparent, and smart.
          </p>

          {/* CTA Buttons */}
          <div className="main-description flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>Get Started with ELIS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-6 py-4 border-2 border-[#7e4192] text-[#7e4192] font-semibold rounded-xl hover:bg-[#7e4192] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-section mb-16">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by 500+ companies worldwide</p>
          </div>
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap opacity-60 hover:opacity-100 transition-opacity duration-500">
            {/* Company logos placeholders */}
            <div className="w-24 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold hover:bg-gray-200 transition-colors">
              MAERSK
            </div>
            <div className="w-24 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold hover:bg-gray-200 transition-colors">
              DHL
            </div>
            <div className="w-24 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold hover:bg-gray-200 transition-colors">
              FEDEX
            </div>
            <div className="w-24 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold hover:bg-gray-200 transition-colors">
              UPS
            </div>
            <div className="w-24 h-12 bg-gray-200/50 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold hover:bg-gray-200 transition-colors">
              COSCO
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section mb-20">
          <div className="bg-gradient-to-r from-[#7e4192]/5 via-white to-[#0e7d80]/5 rounded-2xl p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-4">
                <span className="text-[#7e4192] font-semibold text-sm">📊 Platform Impact</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Numbers That Matter</h3>
              <p className="text-gray-600">Real results from companies using ELIS</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="stat-card text-center opacity-0 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
                    <div className="text-gray-600 text-sm">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Benefits */}
        <div className="benefits-section mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Visibility</h3>
              <p className="text-gray-600 text-sm">Track every shipment in real-time across air, ocean, and land with live updates and intelligent alerts.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Smart Analytics</h3>
              <p className="text-gray-600 text-sm">AI-powered insights help you optimize routes, reduce costs, and predict potential issues before they happen.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Seamless Collaboration</h3>
              <p className="text-gray-600 text-sm">Connect teams, partners, and suppliers on one unified platform with automated workflows.</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">🚀 Key Features</span>
            </div>
            <h2 className="features-title text-3xl lg:text-4xl font-bold text-gray-800 mb-6 opacity-0">
              {processData.title}
            </h2>
            <p className="features-description text-lg text-gray-600 max-w-3xl mx-auto opacity-0">
              {processData.details}
            </p>
          </div>

          {/* Features Cards */}
          <div className="cards-container grid lg:grid-cols-3 gap-8 lg:gap-12">
            {processData.items.map((item, index) => {
              const colorClasses = getColorClasses(item.color);
              return (
                <div
                  key={index}
                  className="has_fade_anim group bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 hover:border-gray-200 opacity-0"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-lg"></div>
                      </div>
                    </div>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${colorClasses.glow} rounded-full mb-4`}>
                      <span className={`text-xs font-semibold ${colorClasses.text}`}>
                        {item.feature}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.details}
                    </p>
                    <div className="flex items-center gap-2 text-[#7e4192] font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Available Now</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-proof mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium mb-6 italic">
                &quot;ELIS transformed our supply chain operations. We&#39;ve reduced costs by 35% and improved delivery times significantly. The real-time visibility is game-changing.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Sarah Chen</div>
                  <div className="text-gray-600 text-sm">VP of Supply Chain, Global Manufacturing Corp</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="success-section mb-20">
          <div className="bg-gradient-to-br from-[#7e4192]/5 to-[#0e7d80]/5 rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
                <span className="text-[#7e4192] font-semibold text-sm">🏆 Success Metrics</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Real Results from Real Companies</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how ELIS transforms logistics operations with measurable improvements across key performance indicators.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                <div className="text-gray-600 text-sm font-medium">Average Cost Reduction</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Timer className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-gray-600 text-sm font-medium">Faster Processing</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 text-sm font-medium">Supply Chain Visibility</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm font-medium">Real-time Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section text-center opacity-0">
          <div className="relative bg-gradient-to-br from-[#7e4192] via-[#0e7d80] to-[#7e4192] rounded-3xl p-12 lg:p-16 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-semibold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Ready to Transform?
                </span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Start Your Logistics Revolution
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join 500+ companies who have revolutionized their logistics operations with ELIS. 
                Experience the power of intelligent supply chain management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group px-10 py-5 bg-white text-[#7e4192] font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span className="text-lg">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>Watch 2-min Demo</span>
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Setup in 15 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMoveSupply;