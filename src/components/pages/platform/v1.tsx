"use client";

import { useRef, useState, useMemo } from "react";
import { 
  ArrowRight, 
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  ChevronDown,
  Building2,
  Truck,
  BarChart3,
  Target,
  Award,
  CheckCircle,
  Lightbulb,
  Eye,
  Leaf,
  Monitor,
  MapPin,
  Calendar,
  FileText,
  PieChart,
  Download,
  Search,
  Bell,
  Clock,
  Package,
  Globe2
} from "lucide-react";



// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Types
interface AccordionItem {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  content: {
    description: string;
    benefits: string[];
    stats: { label: string; value: string; }[];
  };
  color: string;
}

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [activeAccordion, setActiveAccordion] = useState(0);

  // About-focused accordion data
  const aboutContent = useMemo<AccordionItem[]>(() => [
    {
      id: 0,
      title: "Our Mission",
      subtitle: "Making global logistics smarter, faster, and more sustainable",
      icon: Target,
      content: {
        description: "ELIS is on a mission to transform how the world moves goods. We combine cutting-edge technology with deep logistics expertise to empower businesses worldwide, helping them navigate the complexities of international trade while minimizing environmental impact.",
        benefits: [
          "Real-time visibility across your entire supply chain",
          "AI-powered optimization to reduce costs and delays",
          "Sustainable logistics solutions for environmental responsibility",
          "Global network spanning 100+ countries and regions"
        ],
        stats: [
          { label: "Countries Served", value: "100+" },
          { label: "Shipments Tracked", value: "1M+" }
        ]
      },
      color: "from-[#7e4192] to-[#0e7d80]"
    },
    {
      id: 1,
      title: "Our Story",
      subtitle: "Founded by innovators passionate about transforming supply chains",
      icon: Users,
      content: {
        description: "Founded by a team of logistics veterans and technology innovators, ELIS was born from the frustration of dealing with fragmented, outdated supply chain systems. We saw an opportunity to revolutionize logistics through intelligent technology and sustainable practices.",
        benefits: [
          "Deep industry expertise from logistics professionals",
          "Technology-first approach to solving complex problems",
          "Commitment to environmental sustainability in every solution",
          "Customer-centric innovation driven by real-world feedback"
        ],
        stats: [
          { label: "Years of Experience", value: "50+" },
          { label: "Team Members", value: "200+" }
        ]
      },
      color: "from-[#0e7d80] to-[#7e4192]"
    },
    {
      id: 2,
      title: "Our Impact",
      subtitle: "Moving the world, one shipment at a time",
      icon: Globe2,
      content: {
        description: "Every day, ELIS helps businesses around the world move goods more efficiently and sustainably. Our platform doesn't just track shipments—it transforms how companies think about their supply chains, turning logistics from a cost center into a competitive advantage.",
        benefits: [
          "Reduced carbon footprint through optimized routing",
          "Eliminated manual processes and paperwork waste",
          "Improved supply chain resilience and reliability",
          "Enhanced collaboration across global trade networks"
        ],
        stats: [
          { label: "CO2 Reduced", value: "30%" },
          { label: "Client Satisfaction", value: "98%" }
        ]
      },
      color: "from-[#5FB257] via-[#009444] to-[#99C555]"
    }
  ], []);

  const aboutStats = useMemo(() => [
    { label: "Global Network", value: "100+", icon: Globe2 },
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

    // Features animation
    gsap.fromTo(".feature-card", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".platform-features",
          start: "top 80%",
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

    // Stats animation
    gsap.fromTo(".stat-item", 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 1, scale: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".stats-section",
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
        
        {/* Executive Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="about-badge inline-block mb-6 opacity-0">
            <span className="text-[#7e4192] text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
              <Globe2 className="w-4 h-4" />
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
          <div className="about-description max-w-5xl mx-auto opacity-0">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              <strong className="text-gray-800">ELIS is on a mission to make global logistics smarter, faster, and more sustainable.</strong>
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded by innovators passionate about transforming supply chains, ELIS combines technology and expertise to empower businesses worldwide. With a global network and a commitment to sustainability, we help navigate complexities of international trade while minimizing environmental impact.
            </p>
            
            {/* About Stats Bar */}
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

        {/* About Accordion Section */}
        <div className="about-accordion mb-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">🌟 Our Story</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Discover ELIS</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our mission, story, and the impact we&#39;re making in transforming global logistics for a better world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left side - Visual Content */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-8">
                <div className={`bg-gradient-to-br ${aboutContent[activeAccordion].color} rounded-3xl p-8 lg:p-12 text-white`}>
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                      {(() => {
                        const IconComponent = aboutContent[activeAccordion].icon;
                        return <IconComponent className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                      {aboutContent[activeAccordion].title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-8">
                      {aboutContent[activeAccordion].content.description}
                    </p>
                  </div>
                  
                  {/* Key Points */}
                  <div className="space-y-4 mb-8">
                    {aboutContent[activeAccordion].content.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white/90 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    {aboutContent[activeAccordion].content.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                        <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Accordion */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                {aboutContent.map((item, index) => {
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
                        onClick={() => setActiveAccordion(index)}
                        className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors rounded-2xl"
                        aria-expanded={isActive}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? `bg-gradient-to-r ${item.color} shadow-lg` 
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}>
                            <IconComponent className={`w-7 h-7 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold transition-colors ${
                              isActive ? 'text-[#7e4192]' : 'text-gray-800'
                            }`}>
                              {item.title}
                            </h3>
                            <p className="text-gray-600">{item.subtitle}</p>
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

        {/* ELIS Platform Features */}
        <div className="platform-features mb-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">🚀 ELIS Platform</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Complete Logistics Intelligence System</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ELIS is our comprehensive web platform that provides total control over logistics operations. 
              A high-value solution to significantly improve visibility, control, and management of international cargo logistics.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {/* Operational Dashboard */}
            <div className="feature-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 opacity-0">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                Tablero Operativo
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Visualización de todas las operaciones activas con mapa de seguimiento en tiempo real.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Geolocalización en tiempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Calendario operativo dinámico</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Listados de operaciones por estado</span>
                </li>
              </ul>
            </div>

            {/* Statistics & Analytics */}
            <div className="feature-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 opacity-0">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0e7d80] to-[#7e4192] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                Estadísticas Funcionales
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Métricas relevantes que facilitan la toma de decisiones estratégicas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>KPIs de rendimiento</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Comparación de 3 años</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Resumen mensual automático</span>
                </li>
              </ul>
            </div>

            {/* Dynamic Reports */}
            <div className="feature-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 opacity-0">
              <div className="w-16 h-16 bg-gradient-to-r from-[#5FB257] via-[#009444] to-[#99C555] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                Reportes Dinámicos
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Descarga de reportes personalizados con configuraciones preestablecidas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Reportes ocasionales o programados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Configuraciones por usuario</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Múltiples filtros disponibles</span>
                </li>
              </ul>
            </div>

            {/* Operations List */}
            <div className="feature-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 opacity-0">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                Listado de Operaciones
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Búsqueda avanzada con múltiples filtros para encontrar operaciones específicas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Filtros avanzados de búsqueda</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Información detallada por operación</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Estados y progreso visual</span>
                </li>
              </ul>
            </div>

            {/* Real-time Tracking */}
            <div className="feature-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 opacity-0">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0e7d80] to-[#7e4192] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                Visibilidad 360°
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Seguimiento completo con geolocalización y detección de incidencias.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Geolocalización del embarque</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Barra de progreso con incidencias</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Documentos de transporte</span>
                </li>
              </ul>
            </div>

            {/* Alerts & Notifications */}
            <div className="feature-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 opacity-0">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#7e4192] transition-colors">
                Alertas Inteligentes
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sistema de notificaciones para demoras, almacenajes y eventos críticos.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Alertas de demoras automáticas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Notificaciones de almacenaje</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Eventos críticos en tiempo real</span>
                </li>
              </ul>
            </div>

            {/* CO2 Compensation */}
            <div className="feature-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 opacity-0">
              <div className="w-16 h-16 bg-gradient-to-r from-[#5FB257] via-[#009444] to-[#99C555] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#5FB257] transition-colors">
                Compensación de CO2
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Cálculo automático y compensación de emisiones de carbono por cada embarque.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cálculo automático de emisiones</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Programas de compensación</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Reportes de sostenibilidad</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Benefits Banner */}
          <div className="bg-gradient-to-r from-[#7e4192]/5 via-white to-[#0e7d80]/5 rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Control Total de tus Operaciones Logísticas</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ELIS te proporciona una solución integral para mejorar significativamente la visibilidad, 
                control y gestión de tu logística internacional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Visibilidad Total</h4>
                <p className="text-sm text-gray-600">Control completo de todas tus operaciones</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0e7d80] to-[#7e4192] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Tiempo Real</h4>
                <p className="text-sm text-gray-600">Información actualizada al instante</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5FB257] to-[#99C555] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Decisiones Inteligentes</h4>
                <p className="text-sm text-gray-600">Datos que impulsan mejores decisiones</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Identidad Centralizada</h4>
                <p className="text-sm text-gray-600">Un solo sistema para todo tu equipo</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5FB257] via-[#009444] to-[#99C555] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Sostenibilidad</h4>
                <p className="text-sm text-gray-600">Compensación automática de CO2</p>
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
              Our core values shape every decision and guide our mission to transform global logistics for a better world.
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