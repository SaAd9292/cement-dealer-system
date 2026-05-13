import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F7FB]">

        {/* SIDEBAR FIXED */}
        <div className="fixed left-0 top-0 h-full w-64">
          <Sidebar />
        </div>

        {/* MAIN AREA WITH LEFT OFFSET */}
        <div className="ml-64 flex flex-col min-h-screen">

          {/* PAGE CONTENT */}
          <main className="flex-1 p-6">
            {children}
          </main>

          {/* FOOTER FULL WIDTH OF MAIN AREA */}
          <Footer />

        </div>

      </body>
    </html>
  );
}