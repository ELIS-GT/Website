"use client";

import { useRef, useState, useMemo } from "react";
import { useAnalytics } from "@/lib/useAnalytics";
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
  ChevronDown,
  Globe
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
  const { trackButtonClick, trackDemoRequest, trackTrialStart } = useAnalytics();

  const platformFeatures = useMemo(() => [
    {
      id: 1,
      icon: Monitor,
      title: "Operational Dashboard",
      description: "Command center for your entire logistics operation with real-time visibility across all channels.",
      features: ["Live GPS tracking across air, ocean & land", "Dynamic operational calendar with alerts", "Multi-modal status overview dashboard", "Interactive world map with route visualization"],
      businessValue: "Reduce operational blind spots by 95% and improve decision-making speed by 60%",
      color: "from-[#7e4192] to-[#0e7d80]",
      roiMetric: "60% faster decision making",
      imageUrl: "/assets/imgs/platform/elis/dash.webp"
    },
    {
      id: 2,
      icon: PieChart,
      title: "Advanced Analytics & Intelligence",
      description: "Transform logistics data into strategic business intelligence with predictive insights.",
      features: ["Executive KPI dashboards with drill-down", "3-year trend analysis & forecasting", "Custom report builder with 50+ templates", "Automated insights with AI recommendations"],
      businessValue: "Identify cost-saving opportunities worth 25-35% of logistics spend annually",
      color: "from-[#0e7d80] to-[#7e4192]",
      roiMetric: "35% cost reduction potential",
      imageUrl: "/assets/imgs/platform/elis/dash.webp"
    },
    {
      id: 3,
      icon: MapPin,
      title: "360° Supply Chain Visibility",
      description: "Complete end-to-end transparency from origin to destination with predictive exception management.",
      features: ["Real-time shipment geolocation", "AI-powered route optimization", "Proactive incident detection & alerts", "Digital document management hub"],
      businessValue: "Eliminate 90% of 'where is my shipment' inquiries and reduce delays by 40%",
      color: "from-[#5FB257] via-[#009444] to-[#99C555]",
      roiMetric: "40% reduction in delays",
      imageUrl: "/assets/imgs/platform/elis/dash.webp"
    },
    {
      id: 4,
      icon: Bell,
      title: "Intelligent Alert System",
      description: "Proactive notifications that prevent issues before they impact your business operations.",
      features: ["Predictive delay notifications", "Automated storage & demurrage alerts", "Critical milestone tracking", "Custom business rule engine"],
      businessValue: "Prevent 80% of supply chain disruptions through early warning systems",
      color: "from-[#7e4192] to-[#0e7d80]",
      roiMetric: "80% disruption prevention",
      imageUrl: "/assets/imgs/platform/elis/dash.webp"
    },
    {
      id: 5,
      icon: Leaf,
      title: "ESG & Carbon Management",
      description: "Meet sustainability goals with automated carbon tracking and offset programs.",
      features: ["Automated emissions calculation per shipment", "Carbon offset program integration", "ESG compliance reporting suite", "Sustainability impact dashboards"],
      businessValue: "Achieve carbon neutrality goals while reducing logistics costs by 15-20%",
      color: "from-[#5FB257] via-[#009444] to-[#99C555]",
      roiMetric: "Carbon neutral + 20% cost savings",
      imageUrl: "/assets/imgs/platform/elis/dash.webp"
    },
    {
      id: 6,
      icon: Search,
      title: "Advanced Operations Search",
      description: "Powerful search and filtering capabilities to instantly locate and manage any operation.",
      features: ["Multi-criteria advanced search filters", "Bulk operations management tools", "Custom view configurations", "Export capabilities for compliance"],
      businessValue: "Reduce time spent searching for shipment information by 85%",
      color: "from-[#0e7d80] to-[#7e4192]",
      roiMetric: "85% time savings on searches",
      imageUrl: "/assets/imgs/platform/elis/dash.webp"
    },
    {
      id: 7,
      icon: FileText,
      title: "Dynamic Reporting Engine",
      description: "Enterprise-grade reporting with customizable templates and automated distribution.",
      features: ["50+ pre-built executive report templates", "Custom report builder with drag-drop", "Automated report scheduling & distribution", "Multi-format export (PDF, Excel, API)"],
      businessValue: "Eliminate 90% of manual reporting work and improve data accuracy to 99.9%",
      color: "from-[#5FB257] via-[#009444] to-[#99C555]",
      roiMetric: "90% reduction in manual reporting",
      imageUrl: "/assets/imgs/platform/elis/dash.webp"
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
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-6">
            <strong>Transform operational complexity into competitive advantage with intelligent logistics management.</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            ELIS provides comprehensive logistics visibility and control through advanced analytics, real-time tracking, and automated reporting. Built for companies ready to modernize their supply chain operations.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => {
                trackButtonClick('Watch Demo', 'Platform Header');
                trackDemoRequest('platform_header');
              }}
              className="px-8 py-4 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
            <button 
              onClick={() => {
                trackButtonClick('Request Trial', 'Platform Header');
                trackTrialStart('platform_header');
              }}
              className="px-6 py-4 border-2 border-[#7e4192] text-[#7e4192] font-semibold rounded-xl hover:bg-[#7e4192] hover:text-white transition-all duration-300"
            >
              Request Trial
            </button>
          </div>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="feature-showcase mb-20 opacity-0">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left: Feature Navigation */}
            <div className="lg:w-2/5 space-y-4">
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
            <div className="lg:w-3/5 relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                <div 
                  className="aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${platformFeatures[activeFeature].imageUrl})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black opacity-40"></div>
                  <div className="relative text-center text-white bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                    <div className={`w-20 h-20 bg-gradient-to-r ${platformFeatures[activeFeature].color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      {(() => {
                        const IconComponent = platformFeatures[activeFeature].icon;
                        return <IconComponent className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{platformFeatures[activeFeature].title}</h3>
                    <p className="text-white/90 drop-shadow-md">Platform Screenshot</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-lg">
                    ● LIVE
                  </div>
                </div>
                
                {/* Feature Details */}
                <div className="mt-6 text-white bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Business Impact:</h4>
                    <p className="text-sm text-white/90 bg-white/10 rounded-lg p-3">
                      {platformFeatures[activeFeature].businessValue}
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">ROI Metric:</h4>
                      <span className="text-lg font-bold text-[#0e7d80]">
                        {platformFeatures[activeFeature].roiMetric}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-3">Key Capabilities:</h4>
                  <div className="space-y-2">
                    {platformFeatures[activeFeature].features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#0e7d80] rounded-full mt-2 flex-shrink-0"></div>
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

        {/* Platform Capabilities */}
        <div className="platform-capabilities mb-20">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
              <span className="text-[#7e4192] font-semibold text-sm">🚀 Platform Capabilities</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Built for Modern Logistics Operations</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ELIS provides comprehensive logistics management through our RESTful API, advanced analytics, and multi-device accessibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* API Integration */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">RESTful API Integration</h4>
              <p className="text-gray-600 mb-6">Connect ELIS with your existing systems through our robust REST API for seamless data exchange.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">RESTful API endpoints</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">JSON data format</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Real-time data sync</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Custom integration support</span>
                </div>
              </div>
            </div>

            {/* Analytics & Reports */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Advanced Analytics & Reports</h4>
              <p className="text-gray-600 mb-6">Comprehensive reporting suite with interactive charts, graphs, and scheduled report delivery.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Interactive dashboards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Custom chart builder</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Scheduled reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Export to PDF/Excel</span>
                </div>
              </div>
            </div>

            {/* Multi-Device Access */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Multi-Device Accessibility</h4>
              <p className="text-gray-600 mb-6">Access ELIS from any device, anywhere. Responsive design ensures optimal experience across all platforms.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Web browser access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Mobile responsive design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Tablet optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 text-sm">Cross-platform compatibility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Modern Platform Architecture</h4>
                <p className="text-gray-600 mb-6">
                  Built on modern web technologies with RESTful API architecture, responsive design, and enterprise security standards. Designed for scalability and reliability.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-1">REST</div>
                    <div className="text-gray-600 text-sm">API Architecture</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                    <div className="text-gray-600 text-sm">Availability</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Multi</div>
                    <div className="text-gray-600 text-sm">Device Access</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Real</div>
                    <div className="text-gray-600 text-sm">Time Data</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <h5 className="font-semibold mb-4">Platform Benefits:</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">RESTful API for easy integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">Interactive charts and analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm">Scheduled report automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm">Cross-device accessibility</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-sm">Responsive web design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="security-compliance mb-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full mb-6">
                <span className="text-[#7e4192] font-semibold text-sm">🔒 Enterprise Security</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Enterprise Security & Data Protection</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your data is protected with industry-standard security measures and modern encryption protocols designed for business-critical applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Data Encryption</h4>
                <p className="text-gray-600 text-sm">End-to-end encryption for data protection</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Secure Access</h4>
                <p className="text-gray-600 text-sm">Multi-factor authentication and role-based access</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Data Privacy</h4>
                <p className="text-gray-600 text-sm">Privacy-focused design and data handling</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">24/7 Monitoring</h4>
                <p className="text-gray-600 text-sm">Continuous security monitoring and alerts</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#7e4192] via-[#0e7d80] to-[#7e4192] rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-semibold text-sm">🚀 Ready to Get Started?</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">Experience ELIS Platform</h3>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Ready to modernize your logistics operations? Discover how ELIS can provide the visibility and control your supply chain needs. 
                Schedule a personalized demo to see the platform in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button 
                  onClick={() => {
                    trackButtonClick('Request Platform Demo', 'Platform CTA');
                    trackDemoRequest('platform_cta');
                  }}
                  className="px-12 py-6 bg-white text-[#7e4192] font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <span className="text-lg">Request Platform Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => {
                    trackButtonClick('Contact Sales Team', 'Platform CTA');
                  }}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Contact Sales Team</span>
                  <FileText className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Free Demo Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No Commitment Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Expert Support Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformSection;