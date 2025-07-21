import navigation from "@/config/navigation.json";

// Components
import Footer1 from "@/components/elements/footer/footer1";
import ScrollSmootherComponent from "@/components/tools/scroll-smoother";
import ScrollTop from "@/components/tools/scroll-top";
import Header3 from "@/components/elements/header/header3";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="colasta-bold">
      <ScrollSmootherComponent />
      {/* <ToolsComponent /> */}
      <ScrollTop />
      <Header3 headerNav={navigation.header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="absolute w-full h-[1100px] top-0 start-0 -z-[1] bg-gradient-180 from-[#FBF7F4] to-[#fbf7f400]" />
          {/* <div className="pt-[100px]">{children}</div> */}
          <div >{children}</div>

          <Footer1 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
