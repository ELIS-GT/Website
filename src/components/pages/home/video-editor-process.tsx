"use client";

import { useRef } from "react";
import Image from "next/image";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { delayTime2 } from "@/lib/helper/delayTime";
import TitleSection2 from "@/components/shared/title-section/title-section2";

// Datos de las tarjetas
const features = [
  {
    title: "Track in Real Time",
    description:
      "Monitor shipments across air, ocean, and land with live updates.",
    icon: "/assets/imgs/icon/icon-r-7.png",
    shape: "/assets/imgs/shape/shape-r-13.png",
    shapeTop: "top-[55%]",
  },
  {
    title: "Optimize with Data",
    description:
      "Leverage AI-driven analytics to reduce costs and boost efficiency.",
    icon: "/assets/imgs/icon/icon-r-8.png",
    shape: "/assets/imgs/shape/shape-r-14.png",
    shapeTop: "top-[23%]",
  },
  {
    title: "Collaborate Seamlessly",
    description:
      "Connect teams, partners, and suppliers on one unified platform.",
    icon: "/assets/imgs/icon/icon-r-9.png",
  },
];

// Componente reutilizable
const FeatureCard = ({
  index,
  title,
  description,
  icon,
  shape,
  shapeTop,
}: {
  index: number;
  title: string;
  description: string;
  icon: string;
  shape?: string;
  shapeTop?: string;
}) => (
  <div
    // className="max-w-full md:max-w-[47%] lg:max-w-[280px] text-center relative bg-[#ebedef36] p-[30px] xl:p-[36px] rounded-theme has_fade_anim"
        className="max-w-full md:max-w-[47%] lg:max-w-[280px] text-center relative p-[30px] xl:p-[36px] rounded-theme has_fade_anim"

    data-delay={delayTime2(index + 1)}

  >
    {shape && (
      <div
        className={`hidden xl:block absolute start-full ${shapeTop} w-1/2 2xl:w-full -translate-y-1/2`}
      >
        <Image width={183} height={128} src={shape} alt="shape" />
      </div>
    )}
    <div className="flex flex-col items-center gap-5">
      <div className="w-[60px] h-[60px] lg:w-[92px] lg:h-[92px] flex justify-center items-center border border-[#0720321a] rounded-theme">
        <Image
          width={28}
          height={34}
          src={icon}
          alt="icon"
          className="max-w-[28px]"
        />
      </div>
      <h2 className="text-[25px] font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </div>
  </div>
);

// Componente principal
const VideoEditorProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    hasFadeAnim();
  }, { scope: containerRef });

  return (
    <section className="sec_space_top4 bg-[#F9F7F4] py-16">
      <div className="container" ref={containerRef}>

   <div className="mt-[22px] md:mt-[32px]">
              <h1
                className="text-[40px] md:text-[45px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] has_fade_anim"
                data-delay="0.25"
                dangerouslySetInnerHTML={{
                  __html: "Move Your SUPPLY Forward with  <strong class='bg-primary text-white'>ELIS</strong>",
                }}
              />
            </div>

        <TitleSection2
        title=''
          // title="Move Your SUPPLY Forward with  <strong  class='bg-primary text-white'>ELIS</strong>"
          
          details="Gain real-time visibility, streamline operations, and optimize your global supply chain with ELIS, the intelligent logistics platform."
          html={true}
        />

        <p className="text-lg text-center mt-10 text-muted-foreground max-w-[820px] mx-auto leading-relaxed">
          In a world that never stops moving, your logistics shouldn’t either.
          ELIS empowers you with end-to-end visibility, actionable insights, and
          effortless control over your international operations. From global
          logistics to customs clearance and last mile, we make logistics simple,
          transparent, and smart.
        </p>

        <div className="mt-[60px] flex justify-start lg:justify-between flex-wrap gap-[30px]">
          {features.map((feature, i) => (
            <FeatureCard key={i} index={i} {...feature} />
          ))}
        </div>

{/* Center button CTA */}
        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
Get Started with ELIS – Transform Your Supply Chain
          </a>
        </div>

      </div>
    </section>
  );
};

export default VideoEditorProcess;