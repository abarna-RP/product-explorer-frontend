export default function AboutPage() {
  return (
    <div className="p-6 bg-[#112240] rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-300">About</h1>
      <p className="text-gray-300">
        Product Explorer is a modern platform inspired by World of Books.  
        Built using <span className="text-blue-400 font-semibold">Next.js</span>{" "}
        and <span className="text-blue-400 font-semibold">Tailwind CSS</span>,
        it helps you explore book categories, details, and more.
      </p>
    </div>
  );
}
