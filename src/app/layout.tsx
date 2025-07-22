import { AppContextProvider } from "@/context/app.context";
import GoogleAnalytics from "@/lib/analytics";

// styles
import "@/style/globals.css";
import "@/style/main.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body suppressHydrationWarning={true} dir="ltr">
        {/* Google Analytics & GTM */}
        <GoogleAnalytics 
          gaId={process.env.NEXT_PUBLIC_GA_ID || ''}
          gtmId={process.env.NEXT_PUBLIC_GTM_ID}
        />
        
        <AppContextProvider>
          <div className="has-smooth" id="has_smooth"></div>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
