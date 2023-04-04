import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dinami | Create and Display Videos for Companies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <Link legacyBehavior href="/">
              <a className="text-lg font-medium text-gray-900">Dinami</a>
            </Link>
            {/* <a
              href="#"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 transition duration-200"
            >
              Log in
            </a> */}
          </nav>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gray-100 py-20 h-[600px]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-20">
            Create and Display Videos for Companies
          </h1>
          <p className="text-lg text-gray-600 w-[500px]">
            Dinami helps businesses create and showcase their brand through
            professional video production and distribution.
          </p>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Power of Video for Your Business
          </h2>
          <p className="text-xl text-gray-600">
            Dinami makes it easy for businesses of all sizes to create stunning
            video content and reach their audience with engaging videos.
          </p>
        </div>
      </main>
      {/* Tier */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Freemium</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="text-gray-600 mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <p className="text-3xl font-bold text-center mb-4">Free</p>
            <button className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full">
              Sign up for free
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Paid</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="text-gray-600 mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
            <p className="text-3xl font-bold text-center mb-4">$9.99/month</p>
            <button className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full">
              Sign up now
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="text-gray-600 mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
              <li>Feature 8</li>
            </ul>
            <p className="text-3xl font-bold text-center mb-4">$9.99/month</p>
            <button className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
      {/* Connect */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Let's Connect
          </h2>
          <form className="max-w-md mx-auto">
            <div className="flex items-center py-2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-900 rounded-l-full py-3 px-4 text-white w-full placeholder-gray-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-full px-5 py-2 transition duration-200"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 border-t border-gray-300 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            &copy; 2023 Dinami. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}