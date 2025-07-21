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
} from "lucide-react";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

// Data para las cards - Estilo Databricks
const processData = {
  title: "The ELIS Logistics Intelligence Platform",
  subtitle: "Unify all your supply chain + AI",
  details:
    "ELIS brings AI to your logistics data to help you bring intelligence to your supply chain operations.",
  items: [
    {
      name: "Succeed with AI",
      details:
        "Develop predictive logistics applications on your data without sacrificing data privacy or control.",
      icon: "/assets/imgs/icon/icon-r-7.png",
      color: "blue",
      feature: "AI-Powered Predictions",
    },
    {
      name: "Democratize insights",
      details:
        "Empower everyone in your organization to discover logistics insights from your data using natural language.",
      icon: "/assets/imgs/icon/icon-r-8.png",
      color: "blue",
      feature: "Natural Language Analytics",
    },
    {
      name: "Drive down costs",
      details:
        "Gain efficiency and simplify complexity by unifying your approach to logistics, AI and governance.",
      icon: "/assets/imgs/icon/icon-r-9.png",
      color: "blue",
      feature: "Unified Operations",
    },
  ],
};

// NUEVO: Data para estadísticas - Estilo Databricks
const statsData = [
  {
    number: "10M+",
    label: "Shipments Processed",
    description: "Monthly logistics operations",
    icon: TrendingUp,
    color: "blue",
  },
  {
    number: "150+",
    label: "Countries",
    description: "Global network coverage",
    icon: Globe,
    color: "blue",
  },
  {
    number: "99.9%",
    label: "Platform Uptime",
    description: "Enterprise-grade reliability",
    icon: Shield,
    color: "blue",
  },
  {
    number: "24/7",
    label: "AI Monitoring",
    description: "Continuous intelligence",
    icon: Clock,
    color: "blue",
  },
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

      // NUEVO: Animación para logos
      gsap.fromTo(
        ".company-logos",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".company-logos",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // NUEVO: Animación para estadísticas
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
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background pattern sutil estilo Databricks */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      
      <div className="container relative z-10" ref={containerRef}>
        
        {/* Header Section - Estilo Databricks */}
        <div className="mb-16 lg:mb-24">
          
          {/* Layout centrado estilo Databricks */}
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Main Title - Estilo Databricks */}
            <h1 className="main-title font-light leading-tight mb-8 opacity-0">
              <span className="block text-5xl md:text-6xl lg:text-7xl mb-4 text-gray-900">
                Your data.{" "}
                <span className="font-normal text-blue-600">Your AI.</span>
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl text-gray-900">
                Your{" "}
                <span className="font-normal bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  supply chain.
                </span>
              </span>
            </h1>

            {/* Subtitle - Estilo Databricks */}
            <div className="test-subtitle mb-8 opacity-0">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-4">
                Own them all on the new logistics intelligence platform
              </p>
            </div>

            {/* CTAs - Estilo Databricks */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200">
                Explore demos
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-200">
                Learn more
              </button>
            </div>

            {/* Platform subtitle */}
            <div className="mb-8">
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">PLATFORM</span>
            </div>
          </div>
        </div>
        {/* Platform Section - Estilo Databricks */}
        <div className="mb-16 lg:mb-24">
          <div className="text-center mb-12">
            <h2 className="features-title text-4xl lg:text-5xl font-light text-gray-900 mb-6 opacity-0">
              {processData.title}
            </h2>
            <p className="features-description text-xl text-gray-600 max-w-3xl mx-auto font-light mb-4 opacity-0">
              {processData.details}
            </p>
            <div className="mt-8">
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">{processData.subtitle}</span>
            </div>
          </div>
          
          {processData.items && processData.items.length && (
            <div className="cards-container grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {processData.items.slice(0, 3).map((item, i) => (
                <div
                  key={`process_item-${i}`}
                  className="text-center has_fade_anim"
                >
                  {/* Icon container - Estilo Databricks */}
                  <div className="w-16 h-16 mx-auto flex justify-center items-center bg-blue-50 rounded-2xl mb-6">
                    <Image
                      width={32}
                      height={32}
                      src={item.icon}
                      className="max-w-[32px] object-contain"
                      alt="icon"
                    />
                  </div>
                  
                  {/* Title - Estilo Databricks */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-normal text-gray-900 mb-3">
                      {item.name}
                    </h3>
                  </div>
                  
                  {/* Description - Estilo Databricks */}
                  <p className="text-gray-600 leading-relaxed font-light">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Company Logos Section - Estilo Databricks */}
        <div className="company-logos text-center mb-16 lg:mb-24 opacity-0">
          <p className="text-sm text-gray-500 mb-8 font-light">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
            {/* Amazon */}
            <div className="w-20 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg
                       width="2500"
                height="1595"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-0.658000000000003 -1.875 384.24600000000004 119.917"
              >
                <path d="M81.633 27.542V64.65a2.268 2.268 0 0 1-2.268 2.268H67.651a2.269 2.269 0 0 1-2.268-2.268V4.292a2.268 2.268 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S84.634.667 96.134.667c0 0 11.375-1.375 16 11.25 0 0 3.875-11.25 15.625-11.25 0 0 17.474-1.039 17.474 17.042l.133 9.958v37.108a2.268 2.268 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268l-.107-40.483c.333-9.167-7.083-8.5-7.083-8.5-9.333.167-8.435 11.875-8.435 11.875v37.108a2.268 2.268 0 0 1-2.268 2.268H99.508a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.649-9.5c.001 0-8.249-1.083-7.958 11.834zM383.588 27.431v37.107a2.269 2.269 0 0 1-2.268 2.268l-12.183.236a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.648-9.5c0 0-7.959-.392-7.959 14.503v34.438a2.269 2.269 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268V4.292a2.269 2.269 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S354.262.667 365.762.667c0 0 12.319-1.869 16.468 11.015.001-.001 1.358 2.657 1.358 15.749zM299.008.417c-14.98 0-27.125 12.625-27.125 33.875 0 18.709 9.375 33.875 27.125 33.875 16.75 0 27.125-15.166 27.125-33.875 0-20.875-12.144-33.875-27.125-33.875zm9.455 34.625c0 8-1 12.25-1 12.25-1.423 8.457-7.562 8.469-8.467 8.424-.977.039-7.168-.049-8.449-8.424 0 0-1-4.25-1-12.25v-1.333c0-8 1-12.25 1-12.25 1.281-8.375 7.473-8.463 8.449-8.425.905-.045 7.044-.034 8.467 8.425 0 0 1 4.25 1 12.25zM265.084 12.708v-8.66a2.269 2.269 0 0 0-2.268-2.268h-38.72a2.268 2.268 0 0 0-2.268 2.268v8.593a2.269 2.269 0 0 0 2.268 2.268h20.197l-23.906 34.68s-.942 1.406-.911 2.959v10.549s-.156 3.617 3.946 1.518c0 0 7.286-4.402 19.503-4.402 0 0 12.065-.15 20.109 4.781 0 0 3.339 1.518 3.339-1.82v-9.182s.303-2.43-2.884-3.947c0 0-9.258-5.084-21.399-4.25zM56.342 56.124l-3.667-5.582c-1.167-2.084-1.083-4.418-1.083-4.418V20.375C52.092-1.875 27.425.042 27.425.042 5.497.042 2.258 17.107 2.258 17.107c-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.14.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.083 3.668 5.917 7.166 5.917 7.166 1.918 2.08 3.917.334 3.917.334l8.667-7.416c1.916-1.418.5-3.168.5-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.437-9.583v3.305c.415 14.438-6.093 17.245-10.726 17.245zM212.008 56.124l-3.666-5.582c-1.167-2.084-1.084-4.418-1.084-4.418V20.375c.5-22.25-24.167-20.333-24.167-20.333-21.928 0-25.167 17.065-25.167 17.065-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.139.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.084 3.668 5.916 7.166 5.916 7.166 1.918 2.08 3.918.334 3.918.334l8.666-7.416c1.917-1.418.501-3.168.501-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.436-9.583v3.305c.416 14.438-6.091 17.245-10.725 17.245z" />
                <g fill="#f3971b">
                  <path d="M241.504 104.862s-.98 1.705.224 2.086c0 0 1.36.531 3.056-1.043 0 0 12.369-10.805 12.667-30.477 0 0 .091-2.457-.895-3.129 0 0-3.875-3.428-17.809-2.385 0 0-12.146.82-18.777 6.707 0 0-.596.521-.596 1.191 0 0-.143 1.447 3.502.82 0 0 12.145-1.715 19.373-.82 0 0 3.727.447 4.77 1.715 0 0 1.714 1.416.819 6.109 0 .002-2.46 11.924-6.334 19.226z" />
                  <path d="M239.055 85.989s1.814 2.35-1.113 4.377c0 0-31.267 25.01-83.767 25.01 0 0-54.042 2.666-99.167-38.334 0 0-1.582-1.389-.6-2.68 0 0 .878-1.188 3.151.104 0 0 42.449 26.451 98.199 26.451 0 0 38.75 1.5 78.5-15.5 0 0 3.167-1.641 4.797.572z" />
                </g>
              </svg>
            </div>

            {/* FedEx */}
            <div className="w-20 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                  width="2500"
                height="1595"
                viewBox="10 45.67 160.003 44.33"
              >
                <path
                  d="M169.018 84.244c0-2.465-1.748-4.27-4.156-4.27-2.404 0-4.154 1.805-4.154 4.27 0 2.461 1.75 4.263 4.154 4.263 2.408 0 4.156-1.805 4.156-4.263zm-5.248.219v2.789h-.901v-6.15h2.239c1.312 0 1.914.573 1.914 1.69 0 .688-.465 1.233-1.064 1.312v.026c.52.083.711.547.818 1.396.082.55.191 1.504.387 1.728h-1.066c-.248-.578-.223-1.396-.414-2.081-.158-.521-.436-.711-1.033-.711h-.875v.003l-.005-.002zm1.117-.795c.875 0 1.125-.466 1.125-.877 0-.486-.25-.87-1.125-.87h-1.117v1.749h1.117v-.002zm-5.17.576c0-3.037 2.411-5.09 5.141-5.09 2.738 0 5.146 2.053 5.146 5.09 0 3.031-2.407 5.086-5.146 5.086-2.73 0-5.141-2.055-5.141-5.086z"
                  fill="#ff5a00"
                />
                <g fill="#ff5a00">
                  <path d="M141.9 88.443l-5.927-6.647-5.875 6.647h-12.362l12.082-13.574-12.082-13.578h12.748l5.987 6.596 5.761-6.596h12.302l-12.022 13.521 12.189 13.631zM93.998 88.443V45.67h23.738v9.534h-13.683v6.087h13.683v9.174h-13.683v8.42h13.683v9.558z" />
                </g>
                <path
                  d="M83.98 45.67v17.505h-.111c-2.217-2.548-4.988-3.436-8.201-3.436-6.584 0-11.544 4.479-13.285 10.396-1.986-6.521-7.107-10.518-14.699-10.518-6.167 0-11.035 2.767-13.578 7.277V61.29H21.361v-6.085h13.91v-9.533H10v42.771h11.361V70.465h11.324a17.082 17.082 0 0 0-.519 4.229c0 8.918 6.815 15.185 15.516 15.185 7.314 0 12.138-3.437 14.687-9.694h-9.737c-1.316 1.883-2.316 2.439-4.949 2.439-3.052 0-5.686-2.664-5.686-5.818h19.826C62.683 83.891 68.203 90 75.779 90c3.268 0 6.26-1.607 8.089-4.322h.11v2.771h10.017V45.672H83.98v-.002zM42.313 70.593c.633-2.718 2.74-4.494 5.37-4.494 2.896 0 4.896 1.721 5.421 4.494H42.313zm35.588 11.341c-3.691 0-5.985-3.439-5.985-7.031 0-3.84 1.996-7.529 5.985-7.529 4.139 0 5.788 3.691 5.788 7.529 0 3.638-1.746 7.031-5.788 7.031z"
                  fill="#29007c"
                />
              </svg>
            </div>

            {/* DHL */}
            <div className="w-20 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="1595"
                viewBox="0 0 46.986 29.979"
              >
                <path fill="#ffcb01" d="M0 0h46.986v29.979H0z" />
                <g fill="#d80613">
                  <path d="M8.731 11.413L7.276 13.39h7.93c.401 0 .396.151.2.418-.199.27-.532.737-.735 1.012-.103.139-.289.392.327.392h3.243l.961-1.306c.596-.809.052-2.492-2.079-2.492l-8.392-.001z" />
                  <path d="M6.687 17.854l2.923-3.972h3.627c.401 0 .396.152.2.418l-.74 1.008c-.103.139-.289.392.327.392h4.858c-.403.554-1.715 2.154-4.067 2.154H6.687zM23.425 15.699l-1.585 2.155h-4.181l1.585-2.155zM29.829 15.211H19.604l2.796-3.798h4.179l-1.602 2.178h1.865l1.604-2.178h4.179zM29.47 15.699l-1.585 2.155h-4.179l1.585-2.155zM.722 16.549H6.88l-.336.457H.722zM.722 15.699h6.784l-.337.457H.722zM.722 17.399h5.533l-.335.455H.722zM46.265 17.006h-6.136l.337-.457h5.799zM46.265 17.854h-6.759l.334-.455h6.425zM41.091 15.699h5.174v.458h-5.51zM38.413 11.413l-2.796 3.798h-4.429l2.798-3.798zM30.83 15.699s-.305.418-.454.618c-.524.71-.061 1.536 1.652 1.536h6.712l1.585-2.154H30.83z" />
                </g>
              </svg>
            </div>

            {/* UPS */}
            <div className="w-20 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg
                viewBox="1.288 1.243 531.212 212.731"
       width="2500"
                height="1595"                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m163.246 87.298v-51.957h13.834l17.517 38.541 17.266-38.54h13.24v51.956h-11.4v-29.74l-13.161 29.74h-12.152l-13.319-29.586v29.586zm80.459 0h-13.413l23.046-51.957h16.52l23.207 51.957h-13.243l-4.566-10.392-27.125.081zm27.277-20.112-9.427-21.46-9.214 21.46zm27.529 20.112v-51.957h49.639v10.386h-37.65v10.4h32.28v10.309h-32.28v10.477h37.65v10.385z" />
                <path
                  d="m126.44 213.75v-33.77h27.62s1.779-.201 3.658 1.627c1.684 1.635 1.405 4.035 1.405 4.035v11.347s.332 2.084-1.657 3.867c-1.92 1.719-4.713 1.346-4.713 1.346l6.428 11.548h-8.443l-6.378-11.548h-10.018v11.548zm7.903-18.3h16.94v-8.718h-16.94zm38.987 18.3h-2.675s-2.348-.045-3.681-1.451c-1.543-1.635-1.49-3.506-1.49-3.506v-4.412h7.846v2.62h16.669v-6.813h-19.13s-2.358.239-3.811-1.254c-1.615-1.653-1.44-3.646-1.44-3.646v-10.131s-.034-1.703 1.113-3.216c1.649-2.176 4.194-1.959 4.194-1.959l21.855.016s1.783-.126 3.528 1.565c1.913 1.845 1.471 3.811 1.471 3.811v4.031h-7.788v-2.671h-16.669v6.756h19.065s2.237-.164 3.811 1.634c1.581 1.799 1.581 3.811 1.581 3.811v9.533s.256 1.871-1.242 3.57c-1.699 1.936-3.985 1.714-3.985 1.714h-19.229"
                  transform="matrix(1.53856 0 0 1.53856 163.246 -241.569)"
                />
                <path d="m479.035 87.283v-51.972h12.309v20.785l23.463-20.785h16.693l-27.986 24.14 28.986 27.832h-17.262l-23.894-23.648v23.648z" />
                <path
                  d="m101.496 1.337c8.332-.035 13.7 6.736 13.726 13.708l.025 92.536c-.04 7.495-5.97 13.737-13.814 13.76h-86.413c-8.045-.015-13.73-6.63-13.73-13.812l.004-92.484c-.006-7.723 6.512-13.802 13.762-13.762l86.443.054"
                  fill="#4dc7e4"
                />
                <path
                  d="m174.26 1.607c11.16-.046 18.35 9.022 18.384 18.361l.034 123.94c-.053 10.039-7.997 18.399-18.502 18.43h-115.74c-10.775-.02-18.388-8.88-18.388-18.5l.004-123.87c-.008-10.344 8.722-18.486 18.433-18.433l115.78.072z"
                  fill="none"
                  stroke="#fff"
                  stroke-width=".788"
                  transform="matrix(.74662 0 0 .74662 -28.61 .137)"
                />
                <path
                  d="m66.569 44.751 32.014-15.106c.129-.067.2.129.296.16l-22.137 27.675 32.34 15.63c.164.096.326.227.104.388l-35.514.035 8.122 35.286-.228.2-23.226-28.384h-.296l-22.988 28.422c-.13.1-.196.1-.327.002l8.008-35.412-35.445-.094c-.132-.1-.132-.197-.132-.296l32.226-15.513.224-.227-22.211-27.634c-.065-.162.065-.23.165-.36l32.046 15.107 8.389-34.37h.227l8.333 34.49"
                  fill="#fff"
                />
              </svg>
            </div>

            {/* Maersk */}
            <div className="w-20 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg
       width="2500"
                height="1595"                viewBox="0 0 48.545 42.607000000000006"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.89 0c-2.278 0-4.416.907-6.029 2.475V.52H6.273v21.741h-.035c-3.014 0-5.293-1.291-5.293-1.291L0 22.715s2.523 1.537 6.273 1.537c3.856 0 5.468-1.711 9.008-1.711 3.576 0 4.802 1.71 9.008 1.71 4.171 0 5.434-1.71 9.01-1.71 3.575 0 5.153 1.71 9.008 1.71 3.537 0 6.238-1.57 6.238-1.57l-.947-1.745s-2.278 1.326-5.291 1.326V8.479C42.307 3.8 38.486 0 33.824 0c-2.523 0-4.836 1.046-6.449 2.93C25.728 1.046 23.415 0 20.891 0zm-3.4 7.256a2.341 2.341 0 0 1 2.348 2.338V21.39c-1.332-.42-2.664-.838-4.557-.838h-.105V9.593c0-1.292 1.053-2.337 2.314-2.337zm13.6 0c1.297 0 2.314 1.045 2.314 2.338v10.959H33.3c-1.893 0-3.225.419-4.557.838V9.594a2.341 2.341 0 0 1 2.348-2.338zM15.21 23.762c-2.278 0-4.17.595-5.572 1.537-1.543 1.047-2.418 2.547-2.418 4.431 0 2.687 1.963 4.292 6.59 5.409 2.663.628 3.19.837 3.224 1.605 0 .244-.07.419-.246.594-.385.384-1.052.523-1.578.523-.21 0-.805-.035-1.365-.314-.526-.314-.842-.768-.948-1.397l-6.273.036c0 1.814 1.015 3.454 2.873 4.71 1.613 1.047 3.68 1.711 5.608 1.711 4.17 0 8.658-2.025 8.658-6.421 0-3.385-3.224-4.747-4.205-5.061-.947-.35-2.209-.592-3.33-.836-.807-.175-1.543-.316-2.104-.49-.42-.105-.666-.419-.666-.803 0-1.012 1.191-1.115 1.717-1.115 1.087 0 1.963.766 1.963 1.674h6.1c0-3.979-4.172-5.793-8.028-5.793zm18.088.035c-2.84 0-4.907.943-6.555 2.758-1.542 1.675-2.35 4.047-2.35 6.664 0 2.582.808 4.956 2.35 6.63 1.648 1.816 3.68 2.758 6.52 2.758 2.591 0 4.942-.698 6.414-2.128 1.331-1.257 2.14-3.037 2.453-5.305l.037-.315h-6.453l-.033.245c-.388 1.675-1.401 2.199-2.278 2.199-1.998 0-2.455-2.863-2.455-4.084 0-1.256.457-4.117 2.455-4.117.84 0 1.89.559 2.278 2.234l.033.209h6.453l-.037-.314c-.313-2.269-1.122-4.05-2.453-5.305-1.472-1.396-3.823-2.13-6.38-2.13z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Section - Estilo Databricks */}
        <div className="stats-section mb-16 lg:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;

              return (
                <div
                  key={index}
                  className="stat-card text-center"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-light text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-900 font-normal mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm font-light">
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
            <h2 className="features-title text-3xl font-bold text-gray-900 mb-4 opacity-0">
              {processData.title}
            </h2>
            <p className="features-description text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
              {processData.details}
            </p>
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
                    <h3
                      className={`text-[22px] lg:text-[24px] font-bold text-gray-900 hover:${
                        getColorClasses(item.color).text
                      } transition-colors duration-300`}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4">
                    {item.details}
                  </p>

                  {/* Feature badge */}
                  <div
                    className={`flex items-center justify-center gap-2 ${
                      getColorClasses(item.color).text
                    } group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="text-sm font-bold">{item.feature}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section - Estilo Databricks */}
        <div className="cta-section text-center py-16 bg-gray-50 rounded-2xl opacity-0">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Ready to become a data + logistics company?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-8">
              Take the first steps in your supply chain transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200">
                Browse demos
              </button>
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-200">
                Try it free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMoveSupply;
