import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import About from "@/components/pages/about/about";
import TechnologySection from "@/components/pages/technology/tech";
import WhyChooseSection from "@/components/pages/why-choose";


export default function Page() {

  return (
    <main>
      <SeoData />

      <WhyChooseSection />

    </main>
  );
}
