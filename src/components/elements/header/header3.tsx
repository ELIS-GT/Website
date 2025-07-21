"use client";

import { useEffect, useState } from "react";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// shadcn components
import { Button } from "@/components/ui/button";

// components
import Logo from "../common/logo";
import Offcanvas1 from "../offcanvas/offcanvas1";
import Signin from "../signin";
import Signup from "../signup";
import Menu2 from "../menu/menu2";
import { useRouter } from "next/navigation";
type Props = {
  headerNav: MenuDataType;
};

const Header3 = ({ headerNav }: Props) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);
  const router = useRouter(); // ✅ hook del router

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  const closeDialog2 = () => {
    setIsOpen2(!isOpen2);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          scroll ? "fixed " : "absolute",
          "top-0 left-0 w-full z-[99] transition-all duration-300"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "relative flex gap-[20px] justify-between items-center h-[60px] md:h-[70px] max-w-[950px] rounded-full my-[20px] mx-auto px-[30px] py-[10px] 2xl:pe-[10px] transition-all duration-300",
              scroll
                ? "bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50"
                : "bg-white/70 backdrop-blur-sm border border-white/30"
            )}
          >
            <div>
              <Logo />
            </div>
            <div className="hidden xl:flex justify-center">
              <Menu2 headerNav={headerNav} />
            </div>
            <div className="flex justify-end gap-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-elis-purple to-elis-teal hover:from-elis-purple-light hover:to-elis-teal-light transition-all duration-300 text-white border-0 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <span className="btn-span" data-text="Contact">
                  Contact
                </span>
              </Button>
              <div className="flex justify-end xl:hidden">
                <Offcanvas1 headerNav={headerNav} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Signup isOpen={isOpen} close={closeDialog} open={closeDialog2} />
      <Signin isOpen={isOpen2} close={closeDialog2} open={closeDialog} />
    </>
  );
};

export default Header3;
