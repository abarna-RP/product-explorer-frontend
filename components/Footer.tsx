// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-center items-center">
        {/* Left side - Branding */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Product Explorer. All rights reserved.</p>

       
       
      </div>
    </footer>
  );
}
