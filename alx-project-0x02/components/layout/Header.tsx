import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Next.js App</h1>
        <nav className="space-x-6">
          <Link href="/home" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link href="/posts" className="hover:text-blue-200 transition-colors">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  )
}