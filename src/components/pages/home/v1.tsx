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
  Zap
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// Data para las cards
const processData = {
  title: "Why Choose ELIS?",
  details: "Discover the powerful features that make ELIS the smart choice for modern logistics",
  items: [
    {
      name: "Track in Real Time",
      details: "Monitor shipments across air, ocean, and land with live updates and intelligent alerts.",
      icon: "/assets/imgs/icon/icon-r-7.png",
      color: "blue",
      feature: "Live GPS Tracking"
    },
    {
      name: "Optimize with Data",
      details: "Leverage AI-driven analytics to reduce costs, boost efficiency, and predict potential issues.",
      icon: "/assets/imgs/icon/icon-r-8.png",
      color: "purple",
      feature: "AI-Powered Insights"
    },
    {
      name: "Collaborate Seamlessly",
      details: "Connect teams, partners, and suppliers on one unified platform with real-time communication.",
      icon: "/assets/imgs/icon/icon-r-9.png",
      color: "green",
      feature: "Unified Platform"
    }
  ]
};

// NUEVO: Data para estadísticas
const statsData = [
  {
    number: "35%",
    label: "Cost Reduction",
    description: "Average savings on logistics operations",
    icon: TrendingUp,
    color: "green"
  },
  {
    number: "100+",
    label: "Countries",
    description: "Global network coverage",
    icon: Globe,
    color: "blue"
  },
  {
    number: "99.9%",
    label: "Uptime",
    description: "Platform reliability guarantee",
    icon: Shield,
    color: "purple"
  },
  {
    number: "24/7",
    label: "Support",
    description: "Always available assistance",
    icon: Clock,
    color: "orange"
  }
];


// NUEVO: Data para logos de empresas (si los tienes)
const companyLogos = [
  { name: "Company 1", logo: "/assets/imgs/logos/company-1.svg" },
  { name: "Company 2", logo: "/assets/imgs/logos/company-2.svg" },
  { name: "Company 3", logo: "/assets/imgs/logos/company-3.svg" },
  { name: "Company 4", logo: "/assets/imgs/logos/company-4.svg" },
  { name: "Company 5", logo: "/assets/imgs/logos/company-5.svg" },
];

// Componente principal
const HomeMoveSupply = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  // Animaciones optimizadas
  useGSAP(() => {
    console.log("Iniciando animaciones GSAP...");
    
    // Animaciones existentes...
    gsap.fromTo(".header-badge", 
      { opacity: 0, y: 20, scale: 0.9 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".header-badge",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".main-title", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0, 
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".main-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".test-subtitle", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0, 
        duration: 0.6,
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
        scrollTrigger: {
          trigger: ".main-description",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // NUEVO: Animación para logos
    gsap.fromTo(".company-logos", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0, 
        duration: 0.5,
        scrollTrigger: {
          trigger: ".company-logos",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // NUEVO: Animación para estadísticas
    gsap.fromTo(".stat-card", 
      { opacity: 0, y: 30, scale: 0.95 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".features-title", 
      { opacity: 0, y: 25 }, 
      { 
        opacity: 1, y: 0, 
        duration: 0.5,
        scrollTrigger: {
          trigger: ".features-title",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".features-description", 
      { opacity: 0, y: 20 }, 
      { 
        opacity: 1, y: 0, 
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".features-description",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".has_fade_anim", 
      { opacity: 0, y: 30, scale: 0.95 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );


    gsap.fromTo(".cta-section", 
      { opacity: 0, y: 20, scale: 0.98 }, 
      { 
        opacity: 1, y: 0, scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    console.log("Animaciones configuradas");
  }, { scope: containerRef });

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "from-blue-50 to-blue-100",
          text: "text-blue-600",
          border: "border-blue-200",
          shadow: "shadow-blue-500/20",
          glow: "from-blue-400/20 to-blue-600/20"
        };
      case "purple":
        return {
          bg: "from-purple-50 to-purple-100",
          text: "text-purple-600",
          border: "border-purple-200",
          shadow: "shadow-purple-500/20",
          glow: "from-purple-400/20 to-purple-600/20"
        };
      case "green":
        return {
          bg: "from-green-50 to-green-100",
          text: "text-green-600",
          border: "border-green-200",
          shadow: "shadow-green-500/20",
          glow: "from-green-400/20 to-green-600/20"
        };
      case "orange":
        return {
          bg: "from-orange-50 to-orange-100",
          text: "text-orange-600",
          border: "border-orange-200",
          shadow: "shadow-orange-500/20",
          glow: "from-orange-400/20 to-orange-600/20"
        };
      default:
        return {
          bg: "from-gray-50 to-gray-100",
          text: "text-gray-600",
          border: "border-gray-200",
          shadow: "shadow-gray-500/20",
          glow: "from-gray-400/20 to-gray-600/20"
        };
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10" ref={containerRef}>
        
        {/* Header Section */}
        {/* <div className="text-center mb-16"> */}
          {/* Badge */}
          {/* <div className="header-badge inline-block mb-6 opacity-0">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
              ✨ Smart Logistics Platform
            </span>
          </div> */}

          {/* Main Title */}
          {/* <h1 className="main-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 opacity-0">
            <span className="block">Move Your{" "}</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              SUPPLY CHAIN
            </span>
            <span className="block">Forward with{" "}</span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-[#7e4192] to-[#0e7d80] text-white px-4 py-2 rounded-xl shadow-lg inline-block">
                ELIS
              </span>
            </span>
          </h1> */}

          {/* Subtitle */}
          {/* <p className="test-subtitle text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 opacity-0">
            Gain real-time visibility, streamline operations, and optimize your global supply chain with ELIS, the intelligent logistics platform.
          </p> */}

          {/* Description */}
          {/* <p className="main-description text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 opacity-0">
            In a world that never stops moving, your logistics shouldn't either.
            ELIS empowers you with end-to-end visibility, actionable insights, and
            effortless control over your international operations.
          </p> */}

          {/* NUEVO: Demo Video Button */}
          {/* <div className="mb-12">
            <button className="bg-gradient-to-r from-[#7e4192] to-[#0e7d80]group inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
              </div>
              <span className="text-gray-700 font-medium">Watch 2-min Demo</span>
              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div> */}




{/* Header Section */}
<div className="mb-20 lg:mb-32">
  {/* Badge centrado */}
  {/* <div className="text-center mb-12">
    <div className="header-badge inline-block mb-6 opacity-0">
      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
        ✨ Smart Logistics Platform
      </span>
    </div>
  </div> */}

  {/* Layout de dos columnas */}
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    {/* Columna Izquierda - Texto */}

<div className="text-left lg:text-left">
  {/* Main Title - MEJORADO */}
  <h1 className="main-title font-bold leading-tight mb-8 opacity-0">
    <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 lg:mb-4 text-gray-900">
      Move Your{" "}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          SUPPLY CHAIN
        </span>
        <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 rounded-full"></div>
      </span>
    </span>
    
    <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-6 text-gray-700 font-medium">
      Forward with{" "}
      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">
        Intelligence
      </span>
    </span>
    
    <span className="block">
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-[#7e4192] to-[#0e7d80] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl shadow-lg text-xl lg:text-2xl xl:text-3xl font-bold tracking-wide">
          ELIS Platform
        </span>
        <div className="absolute -inset-1 bg-gradient-to-r from-[#7e4192]/20 to-[#0e7d80]/20 rounded-xl blur-lg opacity-75"></div>
      </span>
    </span>
  </h1>

  {/* Subtitle - MEJORADO */}
  <div className="test-subtitle mb-6 opacity-0">
    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
      Gain{" "}
      <span className="text-[#0e7d80] font-semibold">real-time visibility</span>,{" "}
      <span className="text-[#7e4192] font-semibold">streamline operations</span>, and{" "}
      <span className="text-emerald-600 font-semibold">optimize</span> your global supply chain
    </p>
    <p className="text-lg text-gray-600 mt-2">
      with ELIS, the intelligent logistics platform.
    </p>
  </div>

  {/* Key Benefits - NUEVO */}

  {/* CTAs - MEJORADOS */}
  <div className="flex flex-col sm:flex-row gap-4 mb-8">

    <button className="bg-sky-700 group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-[#7e4192]/30 text-gray-700 hover:text-[#7e4192] font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="w-6 h-6 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-lg flex items-center justify-center">
        <Play className="w-4 h-4 text-white" fill="currentColor" />
      </div>
      <span>Watch Demo</span>
      <span className="text-sm text-gray-500 group-hover:text-[#7e4192]/70">(2 min)</span>
    </button>
  </div>


</div>


    {/* Columna Derecha - Video/Imágenes Promocionales */}
    <div className="relative">
      {/* Video Promocional Principal */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Placeholder para video */}
        <div className="aspect-video relative">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7e4192]/40 to-[#0e7d80]/40"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          
          {/* Contenido del video mockup */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all duration-300 group">
                <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
              </div>
              <h3 className="text-xl font-semibold mb-2">See ELIS in Action</h3>
              <p className="text-white/80">2-minute platform overview</p>
            </div>
          </div>
          
          {/* Overlays decorativos */}
          <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
            ● LIVE
          </div>
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg">
            2:15
          </div>
        </div>
      </div>

      {/* Floating Stats Cards - ANIMACIONES SUAVES */}
      <div className="absolute -top-6 -left-6 bg-white/0 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hidden lg:block hover:scale-105 transition-all duration-300 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">Cost Savings</p>
            <p className="font-bold text-green-600 text-sm">35% Average</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hidden lg:block hover:scale-105 transition-all duration-300 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">Global Coverage</p>
            <p className="font-bold text-blue-600 text-sm">100+ Countries</p>
          </div>
        </div>
      </div>

      {/* Screenshots del Dashboard - CON MOCKUPS CSS */}
      <div className="mt-8 grid grid-cols-2 gap-4 hidden lg:grid">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
            {/* Mockup de dashboard con CSS */}
            <div className="w-full h-full bg-white rounded-lg p-3 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="w-16 h-2 bg-blue-500 rounded"></div>
                <div className="w-8 h-2 bg-green-500 rounded"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-8 bg-blue-200 rounded"></div>
                <div className="w-12 h-8 bg-purple-200 rounded"></div>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-2 right-2 bg-white/90 text-gray-800 text-xs px-2 py-1 rounded font-medium">
              Live Data
            </div>
          </div>
          <p className="text-xs text-gray-600 font-medium">Real-time Analytics</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
            {/* Mockup de tracking con CSS */}
            <div className="w-full h-full bg-white rounded-lg p-3 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="w-10 h-2 bg-orange-500 rounded"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-full h-1 bg-gray-300 rounded">
                <div className="w-2/3 h-1 bg-orange-500 rounded"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-2 left-2 bg-white/90 text-gray-800 text-xs px-2 py-1 rounded font-medium">
              GPS Active
            </div>
          </div>
          <p className="text-xs text-gray-600 font-medium">Live Shipment Tracking</p>
        </div>
      </div>
    </div>
  </div>
</div>




        {/* NUEVO: Company Logos Section */}
        <div className="company-logos text-center mb-20 opacity-0">
          <p className="text-sm text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap grayscale hover:grayscale-0 transition-all duration-500">
            {/* Puedes usar logos reales o placeholders */}
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold">LOGO 1</div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold">LOGO 2</div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold">LOGO 3</div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold">LOGO 4</div>
            <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs font-bold">LOGO 5</div>
          </div>
        </div>

        {/* NUEVO: Stats Section */}
        <div className="stats-section mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => {
              const colors = getColorClasses(stat.color);
              const IconComponent = stat.icon;
              
              return (
                <div
                  key={index}
                  className="stat-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <div className={`text-3xl font-bold ${colors.text} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-900 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="features-title text-3xl font-bold text-gray-900 mb-4 opacity-0">{processData.title}</h2>
            <p className="features-description text-xl text-gray-600 max-w-2xl mx-auto opacity-0">{processData.details}</p>
          </div>
          
          {processData.items && processData.items.length && (
            <div className="cards-container mt-[60px] flex justify-start lg:justify-between flex-wrap gap-[30px] max-w-7xl mx-auto">
              {processData.items.slice(0, 3).map((item, i) => (
                <div
                  key={`process_item-${i}`}
                  className="max-w-full md:max-w-[47%] lg:max-w-[280px] text-center relative bg-[#ebedef36] lg:bg-transparent p-[30px] lg:p-0 rounded-theme lg:rounded-0 has_fade_anim"
                >
                  {/* Shapes conectoras */}
                  {i === 0 && (
                    <div className="hidden xl:block absolute start-full top-[55%] w-1/2 2xl:w-full -translate-y-1/2">
                      <Image
                        width={183}
                        height={128}
                        src="/assets/imgs/shape/shape-r-13.png"
                        alt="shape"
                      />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="hidden xl:block absolute start-full top-[23%] w-1/2 2xl:w-full -translate-y-1/2">
                      <Image
                        width={183}
                        height={128}
                        src="/assets/imgs/shape/shape-r-14.png"
                        alt="shape"
                      />
                    </div>
                  )}
                  
                  {/* Icon container */}
                  <div className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mx-auto flex justify-center items-center bg-transparent rounded-2xl mb-[25px] lg:mb-[35px] group-hover:scale-110 transition-transform duration-300">
                    <Image
                      width={40}
                      height={40}
                      src={item.icon}
                      className="max-w-[28px] lg:max-w-[40px] object-contain"
                      alt="icon"
                    />
                  </div>
                  
                  {/* Title */}
                  <div className="mb-[15px] md:mb-[20px] max-w-full mx-auto">
                    <h3 className={`text-[22px] lg:text-[24px] font-bold text-gray-900 hover:${getColorClasses(item.color).text} transition-colors duration-300`}>
                      {item.name}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4">
                    {item.details}
                  </p>

                  {/* Feature badge */}
                  <div className={`flex items-center justify-center gap-2 ${getColorClasses(item.color).text} group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-sm font-bold">{item.feature}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* CTA Section Mejorada */}
        <div className="cta-section text-center opacity-0">
          <div className="relative">
            {/* Main CTA */}
            <div className="inline-block mb-8">
              <a
                href="#"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0e7d80] to-[#7e4192] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Get Started with ELIS – Transform Your Supply Chain</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e7d80]/80 to-[#7e4192]/80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Secondary CTAs */}
            <div className="flex items-center justify-center gap-6 text-gray-600">
              <button className="flex items-center gap-2 hover:text-[#7e4192] transition-colors duration-300">
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Watch Demo</span>
              </button>
              <button className="flex items-center gap-2 hover:text-[#0e7d80] transition-colors duration-300">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Talk to Sales</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free Demo Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Setup in Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMoveSupply;