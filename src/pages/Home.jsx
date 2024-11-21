import React, { useRef, useEffect } from 'react';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Navigation from '../components/Navigation';
import HorizontalScroll from '../components/HorizontalScroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const HomePage = () => {

    return (
        <ErrorBoundary>
        <main className="">
          <Background />
          <Header />
          <HorizontalScroll>
            {/* Hero Section */}
            <section className="section w-screen h-screen flex items-center px-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-8xl font-bold mb-6">
                  Digital Creative
                  <br />
                  Studio
                </h1>
                <p className="text-xl text-gray-400 max-w-xl">
                  We create immersive digital experiences that inspire and innovate
                </p>
              </motion.div>
            </section>
  
            {/* Projects Section */}
            <section className="section w-screen h-screen flex items-center px-20">
              <div className="grid grid-cols-2 gap-20">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="space-y-8"
                >
                  <h2 className="text-6xl font-bold">Selected Works</h2>
                  <p className="text-xl text-gray-400">
                    Explore our portfolio of innovative digital solutions
                  </p>
                </motion.div>
                <div className="grid grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="aspect-square bg-gray-900 rounded-lg overflow-hidden"
                    >
                      <img
                        src={`https://source.unsplash.com/random/800x800?design,${i}`}
                        alt={`Project ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
  
            {/* Services Section */}
            <section className="section w-screen h-screen flex items-center px-20">
              <div className="w-full">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-6xl font-bold mb-20"
                >
                  Our Services
                </motion.h2>
                <div className="grid grid-cols-3 gap-12">
                  {[
                    'Digital Design',
                    'Web Development',
                    'Brand Strategy',
                    'UI/UX Design',
                    'Motion Design',
                    '3D Animation',
                  ].map((service, i) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 bg-gray-900/50 rounded-lg backdrop-blur-sm"
                    >
                      <h3 className="text-2xl font-bold mb-4">{service}</h3>
                      <p className="text-gray-400">
                        Creating exceptional digital experiences through innovative solutions
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
  
            {/* Contact Section */}
            <section className="section w-screen h-screen flex items-center px-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-2xl"
              >
                <h2 className="text-6xl font-bold mb-8">Let's Create Together</h2>
                <p className="text-xl text-gray-400 mb-12">
                  Ready to start your next project? Get in touch with us.
                </p>
                <form className="space-y-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your message"
                      rows={4}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </section>
          </HorizontalScroll>
        </main>
        <Footer />
      </ErrorBoundary>
    );
};

export default HomePage;
