import React from 'react';
import { useParams } from 'react-router-dom';

// Helper function to transform slug
const formatSlug = (slug) => {
  return slug
    .split('-') // Split by dashes
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join with spaces
};


const getBreadcrumbSlug = (slug) => {
    return slug
      .split('-') // Split by dashes
      .slice(0, 3) // Get the first three words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join with spaces
  };



const BlogPage = () => {
  const { slug } = useParams();
  const formattedTitle = formatSlug(slug);
  const breadcrumbTitle = getBreadcrumbSlug(slug);

  return (
    <main>
      <section className="my-10 py-10">
        <div className="">
          <div className="hero-content2 lg:w-1/2 mx-auto">
            <div className="hero-content3">
              <img
                alt="Breadcrumbs"
                aria-hidden="true"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="styles_label__fRSpJ"
                src="/breadcrumbs.svg"
              />
              <h2 className="subheading">
                <a href="/" className="hover:underline duration-500">
                  Gapsy
                </a>{" "}
                / <a href="/blog">Blog </a> 
                / <span className='text-black'>{breadcrumbTitle}</span>
              </h2>
            </div>
          </div>
          <h1 className="main-heading font-pp-formula-condensed text-9xl w-2/3 px-20 mx-auto">
            {formattedTitle}
          </h1>
          <div className="divider lg:w-2/3 mx-auto"></div> {/* Divider line */}
        </div>
      </section>


      <section className='lg:w-2/3 mx-auto'>


      </section>
    </main>
  );
};

export default BlogPage;
