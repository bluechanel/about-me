import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-400">
            <span>&copy; {new Date().getFullYear()} wiley. 保留所有权利。</span>
            <span>·</span>
            <Link
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Built with v0.dev
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

