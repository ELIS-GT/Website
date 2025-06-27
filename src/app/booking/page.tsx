import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import BookingHomeAbout from "@/components/elements/about/booking-home-about";
import BookingBanner from "@/components/elements/banner/booking-banner";
import BookingCounter from "@/components/elements/counter/booking-counter";
import CTA1 from "@/components/elements/cta/cta1";
import BookingHero from "@/components/elements/hero/booking-hero";
import BookingIntegration from "@/components/elements/integration/booking-integration";
import BookingPricing from "@/components/elements/pricing/booking-pricing";
import BookingService from "@/components/elements/service/booking-service";
import BookingTestimonial from "@/components/elements/testimonial/booking-testimonial";
import MarketingFeature2 from "@/components/elements/feature/marketing-feature2";

import VideoEditorProcess from "@/components/pages/home/video-editor-process";


export default function Page() {
  const hero = getMainPage("/heros/booking-hero.mdx");
  const service = getMainPage("/services/booking/_index.mdx");
  const services = getAllPages("/services/booking");
  const counter = getMainPage("/counters/booking-counter.mdx");
  const banner = getMainPage("/banners/booking-banner.mdx");
  const testimonial = getMainPage("/testimonials/booking-testimonial.mdx");
  const about = getMainPage("/abouts/booking-about.mdx");
  const integration = getMainPage("/integrations/booking-integration.mdx");
  const pricing = getMainPage("/pricings/booking-pricing.mdx");
  const cta = getMainPage("/ctas/cta1.mdx");
  const feature2 = getMainPage("/features/marketing-feature2.mdx");
  const process = getMainPage("/processes/video-editor-process.mdx");

  return (
    <main>
      <SeoData />


      <BookingHero hero={hero} />

      <VideoEditorProcess process={process} />

      <MarketingFeature2 feature={feature2} />

      <BookingService service={service} services={services} />
      <BookingCounter counter={counter} />
      <BookingBanner banner={banner} />
      <BookingHomeAbout about={about} />
      <BookingTestimonial testimonial={testimonial} />
      <BookingIntegration integration={integration} />
      <BookingPricing pricing={pricing} />
      <CTA1 cta={cta} />


    </main>
  );
}
