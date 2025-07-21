"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// types
import { ActionBtnType } from "@/types";

// shadcn components
import { buttonVariants } from "@/components/ui/button";

type Props = {
  hero: {
    data: {
      title: string;
      sub_title?: string;
      description: string;
      image?: string;
      action_btn1?: ActionBtnType;
      action_btn2?: ActionBtnType;
      shape1_img?: string;
      shape2_img?: string;
      shape3_img?: string;
      shape4_img?: string;
      shape5_img?: string;
      shape6_img?: string;
    };
    content?: string;
  };
};

const BookingHero = ({ hero }: Props) => {
  const {
    title,
    sub_title,
    description,
    image,
    action_btn1,
    action_btn2,
    shape1_img,
    shape2_img,
    shape3_img,
    shape4_img,
    shape5_img,
    shape6_img,
  } = hero.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="pt-[20px] lg:pt-[40px] xl:pt-[60px] 2xl:pt-[90px] pb-0 relative z-[1] overflow-hidden">
      <div className="container" ref={containerRef}>
        <div className="text-center relative z-[2]">
          {/* Shape 6 - Top decoration */}
          <div className="hidden md:block absolute w-[44px] xl:w-[74px] start-[17%] bottom-[calc(100%+13px)] -rotate-[30deg] -z-[1] rtl_y wc-y-anim">
            {shape6_img && (
              <Image
                width={74}
                height={77}
                style={{ height: "auto" }}
                src={shape6_img}
                alt="shape image"
              />
            )}
          </div>

          {/* Subtitle */}
          {sub_title && (
            <div className="has_fade_anim">
              <span className="text-[14px] font-medium px-[11px] py-2 rounded-[5px] bg-gradient-92 from-[#FEE7C4] to-[#BEE5E4]">
                {sub_title}
              </span>
            </div>
          )}

          {/* Main Title */}
          <div className={cn("mt-[22px] md:mt-[32px]", !sub_title && "mt-0")}>
            <h1
              className="text-[40px] md:text-[45px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] has_fade_anim font-bold leading-tight"
              data-delay="0.25"
            >
              {title}
            </h1>
          </div>

          {/* Description */}
          <div className="mt-[26px]">
            <p
              className="text-xl lg:text-[22px] leading-[1.36] max-w-[660px] mx-auto has_fade_anim text-gray-600"
              data-delay="0.35"
            >
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          {(action_btn1?.enable || action_btn2?.enable) && (
            <div
              className="mt-[33px] lg:mt-[43px] flex justify-center gap-5 has_fade_anim flex-wrap"
              data-delay="0.45"
            >
              {action_btn1?.enable && (
                <Link
                  href={action_btn1.link || "#"}
                  className={cn(buttonVariants({ variant: "primary" }))}
                >
                  <span className="btn-span" data-text={action_btn1.label}>
                    {action_btn1.label}
                  </span>
                </Link>
              )}
              {action_btn2?.enable && (
                <Link
                  href={action_btn2.link || "#"}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <span className="btn-span" data-text={action_btn2.label}>
                    {action_btn2.label}
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Hero Image Section */}
        {image && (
          <div className="relative z-[1] mt-[50px] 2xl:mt-[70px]">
            {/* Background Shapes */}
            <div className="absolute -start-[7%] -top-[6%] -z-[1] w-[88px] lg:w-[138px] hidden md:block rtl_y">
              {shape1_img && (
                <Image
                  width={138}
                  height={82}
                  style={{ height: "auto" }}
                  src={shape1_img}
                  alt="decorative shape"
                />
              )}
            </div>
            <div className="absolute -start-[11%] top-[31%] -z-[1] w-[200px] lg:w-[300px] hidden md:block">
              {shape2_img && (
                <Image
                  width={300}
                  height={315}
                  style={{ height: "auto" }}
                  src={shape2_img}
                  alt="decorative shape"
                />
              )}
            </div>
            <div className="absolute -end-[24%] -top-[30%] -z-[1] w-[549px] lg:w-[1049px] hidden md:block rtl_y">
              {shape3_img && (
                <Image
                  width={1049}
                  height={784}
                  style={{ height: "auto" }}
                  src={shape3_img}
                  alt="decorative shape"
                />
              )}
            </div>
            <div className="absolute start-[102%] top-[35%] -z-[1] w-[31px] lg:w-[61px] hidden md:block rtl_y">
              {shape4_img && (
                <Image
                  width={61}
                  height={96}
                  style={{ height: "auto" }}
                  src={shape4_img}
                  alt="decorative shape"
                />
              )}
            </div>
            <div className="absolute start-[100%] -top-[9%] -z-[1] w-[10px] lg:w-[20px] hidden md:block wc-y-anim">
              {shape5_img && (
                <Image
                  width={20}
                  height={20}
                  style={{ height: "auto" }}
                  src={shape5_img}
                  alt="decorative shape"
                />
              )}
            </div>

            {/* Main Hero Image */}
            <div className="has_fade_anim" data-delay="0.60">
              <Image
                width={1290}
                height={925}
                style={{ height: "auto" }}
                src={image}
                alt="hero dashboard image"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingHero;