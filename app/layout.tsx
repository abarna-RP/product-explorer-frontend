import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Product Explorer",
  description: "Browse categories and products (World of Books Scraper)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="text-white flex flex-col min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')", // 👈 உங்க image public/bg.jpg
        }}
      >
        <Providers>
          <Navbar />

          {/* remove bg-white & shadow */}
          <div className="p-4">
            <SearchBar />
          </div>

          <main className="flex-grow max-w-6xl mx-auto p-4">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
