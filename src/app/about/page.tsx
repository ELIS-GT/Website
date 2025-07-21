import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";

import AboutSection from "@/components/pages/about/about";

export default function Page() {

  return (
    <main>
      <SeoData />


      {/* <BookingHero hero={hero} /> */}

      {/* <HomeMoveSupply process={process} /> */}
    <AboutSection />


      {/* <BusinessUnits /> */}

      {/* <MarketingFeature2 feature={feature2} /> */}

      {/* <BookingService service={service} services={services} /> */}
      {/* <BookingCounter counter={counter} /> */}
      {/* <BookingBanner banner={banner} /> */}
      {/* <BookingHomeAbout about={about} /> */}
      {/* <BookingTestimonial testimonial={testimonial} /> */}
      {/* <BookingIntegration integration={integration} /> */}
      {/* <BookingPricing pricing={pricing} /> */}
      {/* <CTA1 cta={cta} /> */}


    </main>
  );
}
