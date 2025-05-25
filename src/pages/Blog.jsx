import React from "react";
import blog from "../assets/webp/blog-bg.webp"; 
import roboHand from '../assets/webp/robo_hand.webp';
import roboPerson from '../assets/webp/robo_person.webp';
import analytics from '../assets/webp/predictiveAnalaytics.webp';
import bpa from '../assets/webp/BPA.webp';
import contactbg from '../assets/webp/contact-bg.webp';
import aiChatbot from '../assets/webp/ai-chatbot.webp';
import explore1 from '../assets/webp/explore1.webp';
import explore2 from '../assets/webp/explore2.webp';
import explore3 from '../assets/webp/explore3.webp';

const articles = [
    {
        img: explore2,
        title: "Fusce cursus nunc sed condimentum",
    },
    {
        img: explore1,
        title: "Nulla non vulputate turpis, non tincidunt eros",
    },
    {
        img: explore3,
        title: "Mauris efficitur tellus vitae auctor auctor",
    },
    {
        img: bpa,
        title: "Fusce cursus nunc sed condimentum",
    },
    {
        img: analytics,
        title: "Nulla non vulputate turpis, non tincidunt eros",
    },
    {
        img: aiChatbot,
        title: "Mauris efficitur tellus vitae auctor auctor",
    },
    {
        img: roboHand,
        title: "Fusce cursus nunc sed condimentum",
    },
    {
        img: roboPerson,
        title: "Nulla non vulputate turpis, non tincidunt eros",
    },
    {
        img: contactbg,
        title: "Mauris efficitur tellus vitae auctor auctor",
    },
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with BG Image */}
            <div
                className="w-full h-[90vh] flex flex-col items-center justify-center bg-center bg-cover relative"
                style={{ backgroundImage: `url(${blog})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className="relative z-10 text-white text-5xl md:text-6xl font-bold text-center">
                    Blog
                </h1>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-16">
                <p className="text-center text-xl md:text-2xl text-gray-700 mb-12 mt-16">
                    Stay ahead with curated content from our team of technology experts. From AI developments to SaaS best practices, our blog delivers valuable knowledge to support your transformation journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <div key={idx} className="p-3 flex flex-col items-start bg-transparent">
                            <img
                                src={article.img}
                                alt={article.title}
                                className="w-full h-56 rounded-xl object-cover mb-4"
                            />
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-left">{article.title}</h3>
                            <button className="mt-4 text-[#3dc1b1] font-semibold underline underline-offset-4 decoration-4 decoration-[#3dc1b1] hover:text-[#35b0a1] transition text-left">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;