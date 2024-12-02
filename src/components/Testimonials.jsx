import React from 'react';
import '../css/Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const testimonials = [
    {
        text: "Gapspy has helped me immensely with perfecting my online presence...",
        author: "Blake Bell",
        title: "Founder",
        company: "Mind Cleanse",
        image: "/images.jpeg",
    },
    {
        text: "Gapspy has been a game-changer for my business...",
        author: "Heman Gomez",
        title: "Founder & CEO",
        company: "Mylargo",
        image: "/images.jpeg",
    },
    {
        text: "They are simply amazing and have elevated...",
        author: "Mohammed Ali",
        title: "CEO",
        company: "BizGrow",
        image: "/images.jpeg",
    },
    {
        text: "Gapspy has been a game-changer for my business...",
        author: "Heman Gomez",
        title: "Founder & CEO",
        company: "Mylargo",
        image: "/images.jpeg",
    },
    {
        text: "They are simply amazing and have elevated...",
        author: "Mohammed Ali",
        title: "CEO",
        company: "BizGrow",
        image: "/images.jpeg",
    },
    {
        text: "Gapspy has been a game-changer for my business...",
        author: "Heman Gomez",
        title: "Founder & CEO",
        company: "Mylargo",
        image: "/images.jpeg",
    },
    {
        text: "They are simply amazing and have elevated...",
        author: "Mohammed Ali",
        title: "CEO",
        company: "BizGrow",
        image: "/images.jpeg",
    }
];

function TestimonialCard({ text, author, title, company, image }) {
    return (
        <div className="testimonial-card">
            <div>
                <p className="testimonial-text2">"</p>
                <p className="testimonial-text">{text}</p>
            </div>
            <div className="testimonial-author">
                <div className="author-details">
                    <img src={image} alt={author} className="author-image" />
                    <div className="author-info">
                        <h4>{author}</h4>
                        <p>{title}</p>
                    </div>
                </div>
                <div className="company-info">
                    <p>{company}</p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

function Testimonials() {
    return (
        <div className="testimonials-section py-20 px-10">
            <h1 className="header app-container">Want to know what our clients think about working with us?</h1>
            <div className="">
                <Swiper
                    spaceBetween={0} // Spacing between slides
                    slidesPerView={3} // Number of slides visible
                    // Enables navigation buttons
                    pagination={{ clickable: true }} // Enables pagination dots

                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide>
                            <TestimonialCard key={index} {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
