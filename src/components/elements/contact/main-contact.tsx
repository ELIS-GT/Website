"use client";

import { useRef } from "react";
import Image from "next/image";
import siteConfig from "@/config/siteConfig.json";

// gsap
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// components
import TitleSection1 from "@/components/shared/title-section/title-section1";
import Title1 from "@/components/shared/title/title1";
import ContactForm from "./contact-form";
import { MailIcon, MapPinIcon, Clock, Phone, MessageCircle, Send, ArrowRight, CheckCircle, Zap } from "lucide-react";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const MainContact = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { footer_info } = siteConfig;
  const { address, email } = footer_info;

  useGSAP(
    () => {
      // Animación para el título
      gsap.fromTo(
        ".contact-title",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".contact-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para la info de contacto
      gsap.fromTo(
        ".contact-info",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para el formulario
      gsap.fromTo(
        ".contact-form",
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para los items de contacto
      gsap.fromTo(
        ".contact-item",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.7,
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación para las shapes
      gsap.fromTo(
        ".shape-float",
        {
          opacity: 0,
          scale: 0.8,
          rotation: -15,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          delay: 0.9,
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="contact-section pt-4 sm:pt-10 xl:pt-20 2xl:pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background decorative elements - Enhanced con colores de marca */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#7e4192]/10 to-[#0e7d80]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#0e7d80]/10 to-[#7e4192]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#7e4192]/8 to-[#0e7d80]/8 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container relative z-10" ref={containerRef}>
        {/* Título mejorado - TEXTO DIRECTO EN LUGAR DE COMPONENTE */}
        <div className="contact-title opacity-0">
     

          {/* Título principal con gradientes mejorado */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              Let&apos;s Get Your{" "}
              <span className="bg-gradient-to-r from-[#7e4192] via-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent">
                Logistics
              </span>{" "}
              <br className="hidden sm:block" />
              Moving Forward
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Whether you have questions, need a demo, or want to explore{" "}
              <strong className="text-[#7e4192] font-bold">Elis GT</strong> or{" "}
              <strong className="text-[#0e7d80] font-bold">Elis GL</strong>, we&apos;re
              just a click away. Connect with us today and discover how{" "}
              <span className="font-bold bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent">
                ELIS
              </span>{" "}
              can power your business forward.
            </p>
          </div>

          {/* Trust indicators mejorados */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 text-sm mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#0e7d80]" />
              <span className="font-medium">24h Response Time</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <CheckCircle className="w-4 h-4 text-[#0e7d80]" />
              <span className="font-medium">Expert Support</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between relative gap-12 mt-16">
          {/* Info contacto mejorada */}
          <div className="contact-info w-full lg:max-w-[500px] text-center opacity-0">
            {/* Título de sección con texto directo mejorado */}
            <div className="mb-12 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Ready to transform your</span>{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent font-black">
                  supply chain with ELIS?
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our logistics experts are here to help you optimize your operations.
                Choose your preferred way to connect with us.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card - Enhanced */}
              <div className="contact-item opacity-0">
                <div className="flex items-center gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MailIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Email us directly
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-lg font-bold text-[#7e4192] hover:text-[#0e7d80] transition-colors flex items-center gap-2"
                    >
                      {email}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <p className="text-xs text-gray-600 mt-1">
                      Quick response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Demo CTA - New */}
              <div className="contact-item opacity-0">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-xl shadow-lg text-white hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden">
                  {/* Overlay para mejor contraste */}
                  <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
                  
                  <div className="relative z-10 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white drop-shadow-sm" />
                  </div>
                  <div className="text-left flex-1 relative z-10">
                    <p className="text-xs font-bold text-white uppercase tracking-wide mb-1 drop-shadow-sm">
                      Book a live demo
                    </p>
                    <p className="text-lg font-bold text-white flex items-center gap-2 drop-shadow-sm">
                      See ELIS in action
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </p>
                    <p className="text-xs text-white font-medium mt-1 drop-shadow-sm">
                      15-minute personalized walkthrough
                    </p>
                  </div>
                </div>
              </div>


            </div>

            {/* Call to action adicional - MEJORADO */}
            <div className="contact-item mt-6 opacity-0">
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg relative overflow-hidden group">
                <div className="relative z-10 text-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#7e4192] to-[#0e7d80] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    🚀 Need immediate assistance?
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our support team responds within 24 hours and provides expert guidance
                    to get your logistics operations optimized quickly.
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#7e4192]/5 to-[#0e7d80]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            </div>

            {/* Key Benefits - New Section */}
            <div className="contact-item mt-6 opacity-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm">
                  <div className="text-xl font-bold bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent mb-1">24h</div>
                  <p className="text-xs text-gray-600 font-medium">Response Time</p>
                </div>
                <div className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm">
                  <div className="text-xl font-bold bg-gradient-to-r from-[#0e7d80] to-[#7e4192] bg-clip-text text-transparent mb-1">500+</div>
                  <p className="text-xs text-gray-600 font-medium">Happy Clients</p>
                </div>
              </div>
            </div>


          </div>

          {/* Formulario mejorado */}
          <div className="contact-form w-full max-w-[640px] bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 border border-white/20 opacity-0">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Contact{" "}
                <span className="bg-gradient-to-r from-[#7e4192] to-[#0e7d80] bg-clip-text text-transparent font-black tracking-wider">
                  ELIS
                </span>{" "}
                Now
              </h3>
              <p className="text-gray-600 text-sm">
                Start your journey towards optimized logistics. Fill out the
                form below and we&#39;ll get back to you promptly.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>


      </div>
    </section>
  );
};

export default MainContact;
