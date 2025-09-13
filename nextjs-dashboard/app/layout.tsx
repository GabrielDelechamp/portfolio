import React from "react";
import { AppProvider } from "@/app/context/AppContext";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <div className="sm:flex justify-center items-center min-h-screen bg-gray-200 sm:dark:bg-[#01080E] sm:p-2">

            {/* --- Desktop / Tablet layout --- */}
            <div
              className="hidden sm:flex flex-col rounded-[8px] border-2
                text-[#1F2937] bg-white 
                dark:text-[#607B96] dark:bg-[#011627] border-[#1E2D3D]
                sm:h-[90vh] sm:w-[90vw]
              "
            >
              <Navbar />
              <KonamiEasterEgg />
              <div className="h-[77vh] overflow-auto">{children}</div>
              <div className="grow">
                <Footer />
              </div>
            </div>

            {/* --- Mobile layout --- */}
            <div
              className="flex sm:hidden flex-col w-full h-[100vh] text-[#1F2937] bg-white 
                dark:text-[#607B96] dark:bg-[#011627] border-[#1E2D3D]"
            >
              {/* Sticky Navbar */}
              <header className="sticky top-0 left-0 w-full z-40 border-b border-[#1E2D3D] bg-white dark:bg-[#011627]">
                <Navbar />
              </header>

              <KonamiEasterEgg />

              {/* Scrollable Content */}
              <main className="flex-1 overflow-y-auto">
                {children}
              </main>

              {/* Sticky Footer */}
              <footer className="sticky bottom-0 left-0 w-full z-40 border-t border-[#1E2D3D] bg-white dark:bg-[#011627]">
                <Footer />
              </footer>
            </div>

          </div>
        </body>
      </html>
    </AppProvider>
  );
}
