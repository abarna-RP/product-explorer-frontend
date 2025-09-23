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
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <div className="bg-white shadow p-4">
            <SearchBar />
          </div>
          <main className="flex-grow max-w-6xl mx-auto p-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
