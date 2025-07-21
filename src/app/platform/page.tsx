import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

// Components
import SeoData from "@/components/tools/seo-data";
import About from "@/components/pages/about/about";
import TechnologySection from "@/components/pages/technology/tech";
import PlatformSection from '../../components/pages/platform/platform';


export default function Page() {

  return (
    <main>
      <SeoData />
      <PlatformSection />
    </main>
  );
}
