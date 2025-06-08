import Header from "@/components/layout/Header";
export default function About() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            📖 About This Project
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            This is where we learn about Next.js, React, and TypeScript!
          </p>
          <p className="text-gray-500">
            We&#39;re building something amazing, one component at a time.
          </p>
        </div>
      </div>
    </div>
  )
}