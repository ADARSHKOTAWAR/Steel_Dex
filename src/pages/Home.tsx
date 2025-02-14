import React from 'react';
import { ArrowRight, Building2, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            "url('/assets/baground-home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">
              Precision-Driven PEB Steel Detailing Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Delivering high-quality steel detailing solutions for manufacturing,
              commercial, and infrastructure projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary hover:bg-secondary-hover px-6 py-3 rounded-md text-white font-semibold transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Choose Steel Dex?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and precision to deliver
              outstanding steel detailing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary/5 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-600">
                Comprehensive steel detailing services tailored to your specific
                project requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/5 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring precision and
                accuracy in every detail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/5 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Experienced Team</h3>
              <p className="text-gray-600">
                Skilled professionals with extensive experience in steel
                detailing and construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your steel detailing requirements and
            discover how we can help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary hover:bg-secondary-hover px-8 py-4 rounded-md text-white font-semibold transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;