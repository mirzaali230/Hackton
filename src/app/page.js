// pages/index.js

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Our Product
        </h1>
        <p className="text-lg mb-6">
          Discover the amazing features and capabilities that will make your life easier.
        </p>
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
            <p className="text-gray-700">
              Quisque volutpat augue a leo cursus, nec tincidunt lorem lacinia.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
            <p className="text-gray-700">
              Sed euismod ante sit amet mi fringilla, in viverra mauris tempus.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="mb-6 text-lg">
          Join thousands of people already using our platform to grow and succeed.
        </p>
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition">
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
