import Header from "../components/layout/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Welcome to My First Next.js App! 🚀
          </h1>
          <p className="text-gray-600 text-lg">
            Hello, I&apos;m learning React and Next.js!
          </p>
        </div>
      </div>
    </div>
  )
}