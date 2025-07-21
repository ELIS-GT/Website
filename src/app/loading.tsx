import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center fixed h-full w-full left-0 top-0 z-[900] bg-white">
      <div className="flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="relative mb-8 animate-pulse">
          <Image
            src="/assets/imgs/logo/logo.png"
            alt="ELIS Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </div>
        
        {/* Spinner */}
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-primary animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="mt-4 text-gray-600 text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
