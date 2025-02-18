import React from "react";
import { AppProvider } from "@/app/context/AppContext"; // Import depuis le dossier `context`
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <div className="bg-[#01080E] flex justify-center items-center h-[100vh] overflow-hidden">
            <div className="text-[#607B96] rounded-[8px] h-[90vh] w-[90vw] bg-[#011627] border-2 border-[#1E2D3D]">
              <Navbar />
              <div className="h-[78vh]">{children}</div>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </AppProvider>
  );
}
