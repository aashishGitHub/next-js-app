import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Next.js App
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
            About Us
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome to our Next.js application! This project showcases the power and flexibility of modern web development
              using Next.js 14, React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              We believe in creating beautiful, performant, and user-friendly web applications that deliver exceptional
              experiences across all devices. Our mission is to push the boundaries of what's possible with modern web technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower developers and businesses with cutting-edge tools and technologies.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create innovative solutions that make the web faster, more accessible, and more beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


