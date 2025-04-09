import React from "react";
import { AppProvider } from "@/app/context/AppContext";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <div className="flex justify-center items-center h-[100vh] overflow-hidden bg-gray-200 dark:bg-[#01080E]">
            <div className="rounded-[8px] h-[90vh] w-[90vw] border-2
              text-[#1F2937] bg-white 
              dark:text-[#607B96] dark:bg-[#011627] border-[#1E2D3D]
              flex flex-col"
            >
              <Navbar />
              <div className="h-[77vh]">{children}</div>
              <div className="grow">
                <Footer />
              </div>
            </div>
          </div>
        </body>
      </html>
    </AppProvider>
  );
}
