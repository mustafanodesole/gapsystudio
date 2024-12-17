import React from 'react'
import { formatSlug } from './BlogPage'
import { getBreadcrumbSlug } from './BlogPage';
import { useParams } from 'react-router-dom';

const ServicePage = () => {
    const { slug } = useParams();
    const formattedTitle = formatSlug(slug);
    const breadcrumbTitle = getBreadcrumbSlug(slug);
    return (
        <div>
            <section className="hero-container">
                <div className="lg:w-2/3 mx-auto space-y-6">
                    <div className="flex items-center justify-between flex-wrap lg:flex-nowrap flex-col md:flex-row">
                        <div className="hero-content3 hidden lg:flex items-center">
                            <img alt="Breadcrumbs" aria-hidden="true" loading="lazy" width="24s" height="24" decoding="async" data-nimg="1" class="styles_label__fRSpJ" src="/breadcrumbs.svg" />
                            <h2 className="subheading"> <a href="/"> Gapsy </a> / <a href="/services"> Services </a> / <a href={`/services/${slug}`} className='text-black/80 '> {breadcrumbTitle} </a></h2>
                        </div>
                        <p className="lg:w-1/2 font-rockSalt" >
                            Get a website that works for your business!

                        </p>
                    </div>
                    <h1 className=" font-pp-formula-condensed text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-light" >{formattedTitle}</h1>
                    <div className="divider"></div> {/* Divider line */}
                    <div className="flex justify-between lg:flex-row flex-col items-center gap-4">
                        <button className="hire-us-button">Order Services</button>
                        <p className="lg:w-1/2 font-neue-montreal">
                            In today's digital age, having a well-designed, responsive, and functional website is essential for any business aiming to succeed online. At Gapsy Studio, we offer comprehensive website development services tailored to meet the unique needs of our clients.
                        </p>
                    </div>
                </div>

            </section>

            <div>

                <img src='/images/services/web-development.jpg' />
            </div>

        </div>
    )
}

export default ServicePage
