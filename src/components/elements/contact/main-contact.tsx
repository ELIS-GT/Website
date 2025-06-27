"use client";

import { useRef } from "react";
import Image from "next/image";
import siteConfig from "@/config/siteConfig.json";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// components
import TitleSection1 from "@/components/shared/title-section/title-section1";
import Title1 from "@/components/shared/title/title1";
import ContactForm from "./contact-form";
import { MailIcon, MapPinIcon } from "lucide-react";

type Props = {};

const MainContact = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { footer_info } = siteConfig;
  const { address, email } = footer_info;

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-4 sm:pt-10 xl:pt-20 2xl:pt-32 pb-20 bg-gray-50 relative">
      <div className="container" ref={containerRef}>
        <TitleSection1
          title="Let’s Get Your Logistics Moving"
          details="Whether you have questions, need a demo, or want to explore Elis GT or Elis GL, we’re just a click away. Connect with us today and discover how ELIS can power your business forward."
        />

        <div className="flex flex-col md:flex-row justify-between relative gap-10 mt-10">
          {/* Shapes */}
          <div className="absolute bottom-0 end-[calc(100%+100px)] z-[-1] animate-float">
            <Image
              src="/assets/imgs/shape/shape-s-57.png"
              width={153}
              height={153}
              alt="shape"
            />
          </div>
          <div className="absolute top-[213px] start-[calc(100%+124px)] z-[-1] animate-float">
            <Image
              src="/assets/imgs/shape/shape-s-58.png"
              width={60}
              height={60}
              alt="shape"
            />
          </div>

          {/* Info contacto */}
          <div className="w-full md:max-w-[400px] text-center">
         <Title1
  text="<span class='text-gray-900 font-bold'>Ready to transform your</span> <span class='text-primary'>supply chain with ELIS?</span><br /><span class='text-gray-600 text-sm'>Our team is here to help.</span>"
  html
  className="mb-10 text-center md:text-left"
/>
            <ul className="space-y-4">
          <li className="flex items-center gap-2 justify-center mb-4">
  <MailIcon className="w-5 h-5 text-primary" />
  <a href={`mailto:${email}`} className="text-lg text-primary underline hover:text-blue-600">
    {email}
  </a>
</li>
              <li className="flex items-center justify-center gap-2">
                <MapPinIcon className="w-5 h-5 text-primary" />
                <a
                  href={address.link || "#"}
                  className="text-primary underline font-semibold"
                >
                  {address.name}
                </a>
              </li>
            </ul>
          </div>

          {/* Formulario */}
          <div className="w-full max-w-[740px] bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <h3 className="text-[24px] font-semibold mb-6">
              Contact ELIS Now – Start Your Journey
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContact;
