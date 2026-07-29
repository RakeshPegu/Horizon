"use client";

import { usePathname } from "next/navigation";
import Navbar from "./layout/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/booking_consultation";

  return (
    <>
     <header className="flex justify-end   items-center p-4 gap-4 h-16">           
      {!hideNavbar && <Navbar />}
      </header>
      {children}
    </>
  );
}