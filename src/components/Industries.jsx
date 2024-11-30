import React from "react"

const experiences = [
  {
    video : '/videos/healthcare.mp4',
    heading : "Healthcare",
    subHeading : 'Gapsy Design has a long history of providing top-notch design services to the healthare industry.',
    description : 'We have worked with some of the biggest names in the business, and we have a deep understanding of the unique challenges that come with designing for healthcare. From creating engaging patient education materials to designing cutting-edge medical devices, we have the experience and expertise to help you succeed. Some of the healthcare design services we offer include',

  }
]
const Industries = () => {
  return (
    <main>
             <section className="hero-container">
        <div className="">
          <div className="hero-content2 w-2/4 mx-auto">
            <div className="hero-content3">
              <img alt="Breadcrumbs" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="styles_label__fRSpJ" src="/breadcrumbs.svg" />
              <h2 className="subheading"> <a href="/" className='hover:underline duration-500'> Gapsy </a> / Industries</h2>
            </div>
            <p className="description font-rockSalt text-black ">
            Helping Industries Grow, Succeed and Thrive
            </p>
          </div>
          <h1 className="main-heading font-pp-formula-condensed text-9xl w-2/3  mx-auto">Our Industries Strives To Be The Best In The Niche</h1>
          <div className="divider w-2/3 mx-auto"></div> {/* Divider line */}

          <div className="hero-content2 flex items-center w-2/3 mx-auto justify-between">
            <button className="hire-btn">Tell Us About Your Project</button>
            <p className="description2 font-neue-montreal">
            Gapsy is a forward-thinking design studio that specializes in creating next-generation designs. We believe in pushing the boundaries of what's possible and strive to create products and experiences that are truly unique. Whether designing a new type of user interface or developing a groundbreaking new product, we're always looking for ways to innovate. If you're looking for a design studio that thinks outside the box, Gapsy is the right choice. We'll help you create something truly special to make a lasting impression. Let's get started!
            </p>
          </div>
          
        </div>

        {experiences.map((experience) => <>
                <Experience />
        </>)}
      </section>
    </main>
  )
}

const Experience = ({heading, videoUrl , subHeading , description }) => {
  return (
    <div>
        Experience
    </div>
  )
}


export default Industries
