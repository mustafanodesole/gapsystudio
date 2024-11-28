import React, { useRef, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Background2 from '../components/Background2';
import Navigation from '../components/Navigation';
import HorizontalScroll from '../components/HorizontalScroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ErrorBoundary>
      <main className="bg-gray-200">
        <Background />
        {/* <Background2 /> */}
        <Header />
        <HorizontalScroll>
          {/* Hero Section */}
          <section className="section  w-screen h-screen flex items-center  px-20 ml-80">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className=''>
                <span className='flex flex-nowrap gap-1 items-center'>
                  <img src='/images/wow.svg' alt="" />
                  <h1 className="text-9xl font-bold text-nowrap">From Cool Idea</h1>
                </span>
                <span>
                  <h1 className="text-9xl font-bold text-nowrap">To Insanley Great</h1>
                </span>

                <span className='flex flex-nowrap justify-center items-start '>
                  <h1 className="text-9xl font-bold basis-1/3">Product</h1>
                  <p className='text-black text-xl font-rocksalt basis-1/4 '>A Full-Service Design Studio Specialization In Mobile And Web Desgin, Brandings And Animation</p>

                  <img className='w-52' src='/images/arrow.svg' alt="" />
                </span>

              </div>

              {/* <p className="text-xl text-gray-400 max-w-xl">
                  We create immersive digital experiences that inspire and innovate
                </p> */}
            </motion.div>
          </section>

          {/* Who we are */}
          <section className="ml-80 section w-screen h-screen flex items-center justify-center  px-20">
            <div className="grid grid-cols-2 gap-80">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <div className='flex flex-nowrap items-baseline gap-5'>

                  <h2 className="text-8xl font-bold font-formula text-nowrap">Who We Are </h2>
                  <img src='/images/hello.svg' className='w-44' />
                </div>

                <p className="text-xl text-gray-400 ">
                  Gapsy Studio is an innovative web and mobile app design studio based in Dnipro. We are a tribe of go-getters with outstanding experience and a reputation for building and transforming ideas into a global brand. We bring to life your vision by fusing creativity, experience, and technology. Whether you need a new website or want to upgrade your existing one, we can help turn your goals into reality. If you’re looking for an agency to help you take your business to the next level, contact us today – we will be happy to cooperate!
                </p>
                <div className='flex flex-nowrap items-center gap-2'>
                  <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                    <IoIosArrowForward />
                  </button>
                  <span>About Us</span>
                </div>
              </motion.div>
  {/* video */}

              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className=""
            >

           
                <video controls autoplay loop className=''>
                  <source src='/videos/showreel.mp4' />
                </video>
         

            </motion.div>
            </div>
          </section>


        
        

          {/* selected works*/}
          <section className="section w-screen h-screen flex items-center justify-center  text-center">
            <div className=" relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <img src='/images/wow.svg' className="absolute right-0 -top-24" />
                <h2 className="text-9xl text-nowrap  font-bold  text-red-500">Selected Works</h2>

              </motion.div>

            </div>
          </section>


          {/* projects */}
          <section className="section w-screen h-screen flex items-center justify-center ">
            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8 flex"
              >
                <div className='flex items-center justify-center gap-5'>
                  <img src='/images/download.jpeg' className='' width='600' />
                  <div>
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>Adsellr</h2>
                    <p className='text-[#404040] w-1/3  leading-9 text-2xl font-pp-formula-condensed font-thin'>
                      The service helps create Shopify stores, promote products with the helo of creators who record video ads for soceila networks
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View Course</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
          </section>

          <section className="section w-screen  h-screen flex items-center justify-center px-20">
            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8 flex"
              >
                <div className='flex items-center justify-center gap-5'>
                  <img src='/images/download.jpeg' className='' width='600' />
                  <div>
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>Adsellr</h2>
                    <p className='text-[#404040] text-2xl  font-pp-formula-condensed font-thin w-1/3 leading-9'>
                      The service helps create Shopify stores, promote products with the helo of creators who record video ads for soceila networks
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View Course</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
          </section>

          <section className="section w-screen h-screen flex items-center justify-center px-20">
            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8 flex"
              >
                <div className='flex items-center justify-center gap-5'>
                  <img src='/images/download.jpeg' className='' width='600' />
                  <div>
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>Adsellr</h2>
                    <p className='text-[#404040] w-1/3 leading-9 text-2xl font-pp-formula-condensed font-thin'>
                      The service helps create Shopify stores, promote products with the helo of creators who record video ads for soceila networks
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View Course</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
          </section>


          <section className="section w-screen h-screen flex items-center justify-center px-20">
            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8 flex"
              >
                <div className='flex items-center justify-center gap-3'>
                  <img src='/images/download.jpeg' className='' width='600' />
                  <div>
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>Adsellr</h2>
                    <p className='text-[#404040] text-2xl w-1/3 leading-9 font-pp-formula-condensed font-thin'>
                      The service helps create Shopify stores, promote products with the helo of creators who record video ads for soceila networks
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View Course</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
          </section>

        
         




          {/* Services Section */}
          <section className="section w-screen h-screen flex items-center  ">
            <div className=" flex gap-20">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-9xl  text-nowrap text-red-600 font-bold basis-full"
              >
                Our Services
              </motion.h2>
              
                
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 * 0.1 }}
                    className="space-y-5  rounded-lg backdrop-blur-sm"
                  >
                    <h3 className="text-5xl  font-pp-formula-condensed">Digital Design</h3>
                    <p className="text-gray-400 text-xl">
                      Gapsy Studio produces high-quality websites that look great on all devices. Our website designing services include web design, developement, e-commerce , SEO and more
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View More</span>
                    </div>
                  </motion.div>
            </div>
          </section>




          <section className="section w-screen h-screen flex items-center  ">
            <div className=" flex gap-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 * 0.1 }}
                    className="space-y-5  rounded-lg backdrop-blur-sm"
                  >
                    <h3 className="text-5xl  font-pp-formula-condensed">Digital Design</h3>
                    <p className="text-gray-400 text-xl">
                      Gapsy Studio produces high-quality websites that look great on all devices. Our website designing services include web design, developement, e-commerce , SEO and more
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View More</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 * 0.1 }}
                    className="space-y-5  rounded-lg backdrop-blur-sm"
                  >
                    <h3 className="text-5xl  font-pp-formula-condensed">Digital Design</h3>
                    <p className="text-gray-400 text-xl">
                      Gapsy Studio produces high-quality websites that look great on all devices. Our website designing services include web design, developement, e-commerce , SEO and more
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View More</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 * 0.1 }}
                    className="space-y-5  rounded-lg backdrop-blur-sm"
                  >
                    <h3 className="text-5xl  font-pp-formula-condensed">Digital Design</h3>
                    <p className="text-gray-400 text-xl">
                      Gapsy Studio produces high-quality websites that look great on all devices. Our website designing services include web design, developement, e-commerce , SEO and more
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" text-black border-4 border-black rounded-lg  p-2 text-xl hover:bg-black hover:text-white duration-300 hover:transition-all">
                        <IoIosArrowForward />
                      </button>
                      <span>View More</span>
                    </div>
                  </motion.div>
            </div>
          </section>



         

          {/* Contact Section */}
          <section className="section w-screen h-screen flex items-center px-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full flex items-center"
            >
              <h2 className="text-8xl font-bold mb-8 uppercase text-nowrap text-red-600 ">Get In Touch</h2>
            <form className="space-y-6 ml-32">
                <motion.div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-gray-900/0 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </motion.div>
                <motion.div>
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full bg-gray-900/0  border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  ></textarea>
                </motion.div>
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-200 hover:text-black duration-300 hover:border hover:border-black transition-colors"
                >
                  Send Request
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
