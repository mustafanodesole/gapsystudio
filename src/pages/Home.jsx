import React, { useRef, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Background2 from '../components/Background2';
import Navigation from '../components/Navigation';
import HorizontalScroll from '../components/HorizontalScroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import FloatingChatButton from '../components/FloatingChatButton';
import TextThreeD from '../components/TextThreeD';
import ContactModal from '../components/ContactModal';
import ModelViewer from '../components/ModelViewer';

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
          <section className="section  w-screen h-screen flex items-center  px-20 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className='text-[#fe6f61]'>
                <span className='flex flex-nowrap gap-1 items-center'>
                  <img src='/images/wow.svg' alt="" />
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-nowrap">From Cool Idea</h1>
                </span>
                <span>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-nowrap">To Insanley Great</h1>
                </span>

                <span className='flex flex-wrap lg:flex-nowrap justify-center items-start gap-3 mt-2'>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold basis-1/3">Product</h1>
                  <p className='text-black text-xl font-rocksalt basis-1/4 '>A Full-Service Design Studio Specialization In Mobile And Web Desgin, Brandings And Animation</p>

                  <img className='w-52' src='/images/arrow.svg' alt="" />
                </span>

              </div>

              {/* <p className="text-xl text-gray-400 max-w-xl">
                  We create immersive digital experiences that inspire and innovate
                </p> */}
            </motion.div>
            <div className="hidden lg:flex items-center justify-center ">
              <img
                src="/images/120_.webp"
                alt="Rotating"
                className="w-[300px] h-[300px] object-contain animate-spin-custom"
              />
            </div>
          </section>



          {/* Who we are */}
          <section className="ml-80 section w-screen h-screen flex items-center justify-center  px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-80">
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
                className="hidden lg:block"
              >
                <video autoPlay loop controls>
                  <source src='/videos/showreel.mp4' />
                </video>
              </motion.div>
            </div>
          </section >


          <section className=" section w-screen h-screen flex items-center justify-center  px-20  lg:hidden">


            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center"
            >
              <video autoPlay loop controls>
                <source src='/videos/showreel.mp4' />
              </video>
            </motion.div>
          </section>



          {/* selected works*/}
          <section className="section w-screen h-screen flex items-center justify-center  text-center px-10">
            <div className=" relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <img src='/images/wow.svg' className="absolute right-0 -top-24" />
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-nowrap  font-bold  text-[#fe6f61]">Selected Works</h2>

              </motion.div>

            </div>
          </section>

          {/* <section className='section'>

            <ModelViewer />
          </section> */}

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
                  <div className='space-y-4'>
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>Adsellr</h2>
                    <p className='text-[#404040] md:w-1/2  leading-9 text-2xl font-pp-formula-condensed font-thin'>
                      The service helps create Shopify stores, promote products with the helo of creators who record video ads for soceila networks
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className="animate-btn">
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
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>RKDE</h2>
                    <p className='text-[#404040] text-2xl  font-pp-formula-condensed font-thin md:w-1/2 leading-9'>
                      The product KOP (Keep On Playing) is a Play to Earn (P2E) platform that rewards users for playing games and completing challenges/quest
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className="animate-btn">
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
                <div className='flex items-center justify-center gap-5 '>
                  <img src='/images/download.jpeg' className='' width='600' />
                  <div className='space-y-4'>
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>Scoop Solar</h2>
                    <p className='text-[#404040] md:w-1/2 leading-9 text-2xl font-pp-formula-condensed font-thin'>
                      An innovative project that streamlines the process of solar operations by utilizing industry-leading technologies and software.
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className=" animate-btn">
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
                  <div className='space-y-4'>
                    <h2 className='text-4xl font-medium text-[#404040] font-pp-formula-condensed'>Pickle</h2>
                    <p className='text-[#404040] text-2xl md:w-1/2 leading-9 font-pp-formula-condensed font-thin'>
                      All-in-one social application that allows you to assign events, sync, them to calendars, that chat with friends and leave feedback
                    </p>
                    <div className='flex flex-nowrap items-center gap-2'>
                      <button className="animate-btn">
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
          <section className="section w-screen h-screen flex items-center  justify-center">
            <div className=" flex items-center justify-center gap-20">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl  text-nowrap text-[#fe6f61] font-bold basis-full"
              >
                Our Services
              </motion.h2>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.1 }}
                className="space-y-5  rounded-lg backdrop-blur-sm"
              >
                <p className="text-4xl text-black font-pp-formula-condensed">01</p>
                <h3 className="text-5xl  font-pp-formula-condensed">Web Design</h3>
                <p className="text-gray-400 text-xl pr-5">
                  Gapsy Studio produces high-quality websites that look great on all devices. Our website designing services include web design, developement, e-commerce , SEO and more
                </p>
                <div className='flex flex-nowrap items-center gap-2'>
                  <button className="   animate-btn">
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
                <p className="text-4xl text-black font-pp-formula-condensed">02</p>

                <h3 className="text-5xl  font-pp-formula-condensed">Mobile App Design</h3>
                <p className="text-gray-400 text-xl pr-5">
                  Custom app design services in Gapsy can help your business get noticed by potential customers. We can create a mobile-friendly app that is both user-friendly and visually appealing.
                </p>
                <div className='flex flex-nowrap items-center gap-2'>
                  <button className=" animate-btn">
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
                <p className="text-4xl text-black font-pp-formula-condensed">03</p>

                <h3 className="text-5xl  font-pp-formula-condensed">Web Development</h3>
                <p className="text-gray-400 text-xl pr-5">
                  Gapsy Studio offer web developement services that can help take your business to the next level. We create custome websites that are both user-friendly and highly functional.
                </p>
                <div className='flex flex-nowrap items-center gap-2'>
                  <button className=" animate-btn">
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
                <p className="text-4xl text-black font-pp-formula-condensed">04</p>

                <h3 className="text-5xl  font-pp-formula-condensed">Branding Design</h3>
                <p className="text-gray-400 text-xl pr-5">
                  If you are looking for branding design services, look no further than Gapsy Studio. We can help you create a unique and memorable brand that will standout fromt the competetion.
                </p>
                <div className='flex flex-nowrap items-center gap-2'>
                  <button className=" animate-btn">
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
                className="space-y-5  rounded-lg backdrop-blur-sm w-[33vw]"
              >
                <p className="text-4xl text-black font-pp-formula-condensed">05</p>

                <h3 className="text-5xl  font-pp-formula-condensed">Motion Design</h3>
                <p className="text-gray-400 text-xl pr-5">
                  Gapsy Studio specializes in creating high-quality, innovative and engaging motion graphics services for various clients and projects.
                </p>
                <div className='flex flex-nowrap items-center gap-2'>
                  <button className=" animate-btn">
                    <IoIosArrowForward />
                  </button>
                  <span>View More</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.1 }}
                className="space-y-5  rounded-lg backdrop-blur-sm w-[33vw]"
              >
                <p className="text-4xl text-black font-pp-formula-condensed">06</p>

                <h3 className="text-5xl  font-pp-formula-condensed">UX Audit</h3>
                <p className="text-gray-400 text-xl pr-5">
                  Gapsy's users experience audit services are desgined to help get a detailed report higlighting any areas that need improvement and fixing on your website or in the app.
                </p>
                <div className='flex flex-nowrap items-center gap-2'>
                  <button className=" animate-btn">
                    <IoIosArrowForward />
                  </button>
                  <span>View More</span>
                </div>
              </motion.div>

            </div>
          </section>


          {/* Contact Section */}
          <section className="section w-screen h-screen flex  items-center px-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full flex items-center"
            >
              <div className='flex flex-col'>

                <h2 className="text-4xl md:text-8xl font-bold mb-8 uppercase text-nowrap text-[#fe6f61]  ">Get In Touch</h2>
                <span className='block lg:hidden'>

                  <ContactModal />
                </span>
              </div>

              <form className="space-y-6 ml-32 md:w-[33vw] hidden lg:block">
                <motion.div>
                  <input
                    required
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-gray-900/0 border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  />
                </motion.div>
                <motion.div>
                  <textarea
                    required
                    placeholder="Your message"
                    rows={4}
                    className="w-full bg-gray-900/0  border border-gray-800 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  ></textarea>
                </motion.div>
                <div className='flex justify-between '>

                  <div className='flex gap-3'>


                    <label htmlFor='file' className='upload-btn block '>
                      <ImAttachment />
                    </label>

                    <input type="file" name="file" id="file" className='hidden' />
                    <label htmlFor="file" className='border border-gray-400 shadow-sm rounded-md block p-2'>Attach File</label>
                  </div>
                  <button
                    type="submit"
                    className="animate-btn"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </section>

        </HorizontalScroll>
      </main>
      <FloatingChatButton />
      <Footer />
    </ErrorBoundary>
  );
};

export default HomePage;
