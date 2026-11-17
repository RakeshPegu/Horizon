import type { Metadata } from "next";
import { ClerkProvider, } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import {MessageCircle} from 'lucide-react'
import "./globals.css";
import ClientLayout from "./clientLayout";
import Footer from "./layout/Footer";
import { QualificationFormProvider } from "./card/QualificationProvider";
import QualificationForm from "./card/QualificationForm";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = { 

  robots: {
    index:true ,
    follow:true

  },
  metadataBase: new URL('https://www.innovhubs.com/'),
  
  title: {
    default: "InnovHubs | Web Development & Automation Agency",
    template: "%s | InnovHubs",
  },
  description: "InnovHubs builds modern business websites, custom web applications, dashboards, and n8n automations to simplify workflows and boost efficiency",
  alternates:{
    canonical:"/"
  },
  keywords: [
    'web agency',
    "web development agency",
    "automation agency",
    "n8n workflow agency",
    "software agency"
  ],
  openGraph: {
    title: "InnovHubs | Web Development & Automation Agency",
    description:
      "Custom websites, web applications, business dashboards, and n8n workflow automation to help businesses work smarter.",
    url: "/",
    siteName: "InnovHubs",
    images: [
      {
        url: "/og-image-v1.png",
        width: 1200,
        height: 630,
        alt: "InnovHubs - Web Development and Automation Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "InnovHubs | Web Development & Automation Agency",
    description:
      "Custom websites, web applications, business dashboards, and n8n workflow automation for growing businesses.",
    images: ["/og-image-v1.png"],
  },


};
  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QualificationFormProvider>
        <ClerkProvider>
          <ClientLayout>
           <div className="relative min-h-full w-full  overflow-hidden bg-neutral-950 text-neutral-100 ">
      
             {/*  Subtle Structural Tech Grid */}
             <div className="absolute  inset-0  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

             {/*  Soft Ambient Blur Effect (Behind Content) */}
             <div className="absolute top-[-10%] left-[-10%] h-125 w-125 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
             <div className="absolute top-[20%] right-[-10%] h-150 w-150 rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

            {/* Page Content */}
            <main className="relative z-10">
              <QualificationForm/>
              <div className="flex items-center justify-center w-10 h-10 fixed bottom-6 right-14 z-50 cursor-pointer">
                <a href="https://wa.me/919387356020?text=Hi%20HorizonLab,%20I%20want%20to%20book%20a%20consultation" 
                target="_blank" rel="nopener noreferrer" className="flex flex-row items-center gap-4 bg-accent-foreground p-3 rounded-2xl">
                  WhatsApp
                  <MessageCircle className="text-accent "/>
                </a>
              </div>
               {children}
            </main>
            <Footer/>
          </div>     
          </ClientLayout>     
        </ClerkProvider>
        </QualificationFormProvider>
      </body>
    </html>
  );
}
