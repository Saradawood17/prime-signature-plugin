import React, {useRef , useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';
import { EffectCards, Pagination, Navigation, Autoplay, Virtual } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';

import iPhone from "../assets/iPhone 15.png";
import perfumes from "../assets/perfumes.png";
import fashion from "../assets/fashion.png";
import furniture from "../assets/furniture.png";
import watches from "../assets/watches.png";
import mobileTablets from "../assets/mobiles&tablets.png";
import skincare from "../assets/skinCare.png";
import kitchen from "../assets/Kitchen&Dining.png";
import pet from "../assets/PetSupplies.png";
import television from "../assets/Televisions.png";
import kidsToys from "../assets/Kids&Toys.png";
import grocery from "../assets/Grocery.png";
import luggage from "../assets/Luggage.png";

import  Expansion from "../assets/expansion.svg?react";
import Retention from "../assets/retention.svg?react";
import Acquisition from "../assets/acquisition.svg?react";
import LunchMarket from "../assets/lunchMarket.svg?react";
import TeamSection from './TeamSection';
import Contact from "./Contact";
import BackgroundCircles from "./BackgroundCircles";
import backgroundHero from '../assets/background-hero.png';

import AboutIcon from "../assets/about.svg?react";
import KeyIcon from "../assets/key.svg?react";
import VisionIcon from "../assets/vision.svg?react";
import PeopleIcon from "../assets/people.svg?react";

import StoreusLogo from "../assets/storeus-logo.png";
import AboutUs from "../assets/aboutUs.png";
import visionImage from "../assets/visionImage.png";
import { Link } from "react-router-dom";
import Figures from "./Figures";
import HeroSection from "./HeroSection";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slidesLast, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const cards = [
  { id: 'about', icon: AboutIcon, title: "About Us" },
  { id: 'vision', icon: VisionIcon, title: " Vision" },
  { id: 'timeline', icon: KeyIcon , title: "Timeline" },
  { id: 'team', icon: PeopleIcon, title: "Our Team" }
];




const expansionCards = [
  {
    id: 1,
    period: "2021 - 2022",
    icon: LunchMarket,
    title: "Lunch And Market Entry",
    items: [
      "Customer & Seller Acquisition",
      "Reached 1 Million Registered Users",
      "Expanded Product Categories"
    ]
  },
  {
    id: 2,
    period: "2022 - 2023",
    icon: Acquisition,
    title: "Acquisition",
    items: [
      "Expansion into Libya",
      "Launched Website & App",
      "Expanded Payment Options"
    ]
  },
  {
    id: 3,
    period: "2024",
    icon: Retention,
    title: "Retention",
    items: [
      "Focus on Loyalty & Retention Growth",
      "Rolled Out Customer-Centric Innovations",
      "Ongoing Expansion into Egypt"
    ]
  },
  {
    id: 4,
    period: "2025 - Ongoing",
    icon: Expansion,
    title: "Expansion",
    items: [
      "Entry into New MENA Markets",
      "Expansion in B2B Warehousing & Distribution",
      "Growth in Marketplace & Private Label Manufacturing"
    ]
  }
];



  const categories = [
  { title: "Perfumes", image: perfumes , link: 'https://storeus.com/perfumes'},
  { title: "Fashion", image: fashion , link: 'https://storeus.com/traditional-wear'},
  { title: "Furniture", image: furniture , link: 'https://storeus.com/furniture'}, 
  { title: "Watches", image: watches , link: 'https://storeus.com/watches'},
  { title: "Mobiles & Tablets", image: mobileTablets , link: 'https://storeus.com/mobile-and-tablet'},
  { title: "Skin Care", image: skincare , link: 'https://storeus.com/skin-care'},
  { title: "Kitchen & Dining", image: kitchen , link: 'https://storeus.com/kitchen-and-dining'},
  { title: "Pet Supplies", image: pet },
  { title: "Televisions", image: television , link: 'https://storeus.com/tv'},
  { title: "Kids & Toys", image: kidsToys , link: 'hhttps://storeus.com/kids-and-toys'},
  { title: "Grocery", image: grocery },
  { title: "Luggage", image: luggage },
];

  



  return (
    <>


   <HeroSection />

      {/* Cards Section */}
      <div  className="px-4 relative sm:px-6 lg:px-8 py-6  font-sans">
      {/* <BackgroundCircles position="top-tight" /> */}
        <div className="grid relative z-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4 sm:gap-6">
          {cards.map((card) => (
            <a href={`#${card.id}`}
              key={card.id}
              className={`group p-4 sm:p-6 rounded-2xl shadow-md sm:shadow-xl border border-gray-200 cursor-pointer transition-all duration-300
                bg-[#F1EBDA] hover:bg-[#DCCDA5] focus:bg-[#DCCDA5] 
                focus:outline-none`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-12 sm:h-16 w-12 sm:w-16 flex items-center justify-center mb-4 sm:mb-6">
                  <card.icon className="h-8 w-8 sm:h-12 sm:w-12 text-black fill-current group-hover:text-[#DCCDA5] group-focus:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-medium">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* aboutUs section */}

      <section id="about" className="w-full py-12 px-4 sm:px-6 lg:px-8 sm:py-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* Left Column - Text */}
    <div className="w-full lg:w-1/2  flex flex-col justify-center ">
      <h6 className="text-sm sm:text-base text-black font-semibold mb-2 ml-8">about us</h6>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
        At Signature Technology
      </h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
Signature Technology is a forward-thinking, innovation-driven company that researches, launches, and grows cutting-edge business ventures across the Middle East. We handle every aspect of the business process in-house—from research and software development to logistics, marketing, and customer service—ensuring end-to-end excellence and agility. With a strong focus on market trends and customer needs, we specialize in scalable, tech-enabled solutions that drive growth and impact across diverse industries.
      </p>
    </div>

    {/* Right Column - Image */}
    <div className="w-full lg:w-1/2 flex md:justify-center lg:justify-end items-center">
      <img
        src={AboutUs}
        alt="Descriptive alt text"
        className="w-full max-w-[500px] object-contain"
      />
    </div>

  </div>
</section>

 {/* vision section */}

   <section id="vision" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
  <div className="max-w-7xl mx-auto   flex flex-col-reverse md:flex-row items-center  gap-10">
        {/* Right Column - Image */}
    <div className="w-full lg:w-1/2 flex md:justify-center sm:justify-center lg:justify-start items-center">
      <img
        src={visionImage}
        alt="Descriptive alt text"
        className="w-full  max-w-[500px] object-contain"
      />
    </div>

    {/* Left Column - Text */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center ">
      <h6 className="text-sm sm:text-base text-black font-semibold mb-2 ml-8">Our Vision </h6>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
      Pioneering the Future of Digital Commerce
      </h1>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
Our vision is to become a leading force in online marketplaces, cross-border distribution (from China to MENA), and direct-to-consumer (DTC) services across the UAE, Egypt, Libya, and the broader MENA region. We aim to bridge global supply chains with regional demand by leveraging advanced technology, strategic partnerships, and a deep understanding of local markets. Driven by our core values—empowerment, integrity, innovation, customer centricity, and community—we are committed to reshaping commerce with accessible, efficient, and customer-focused solutions that fuel long-term regional growth.
      </p>
    </div>



  </div>
</section>


    


{/* Expansion Cards Section */}
  <div id="timeline" className="px-4 sm:px-6 text-center lg:px-8 py-12 font-sans">
          <h6 className="text-sm sm:text-base text-black font-semibold mb-2 ml-8">latest service </h6>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">Key Milestone & Timelines</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6">
        {expansionCards.map((card) => (
          <div
            key={card.id}
            className="relative bg-white rounded-lg border-2 border-[#E6E6E6] p-6 flex flex-col"
          >
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-[#F5F5F5] px-4 py-1 rounded-full text-black font-semibold text-sm">{card.period}</div>
            <div className="flex flex-col items-center mt-8">
 <card.icon className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <hr className="w-full border-t-2 border-gray-200 mb-4" />
              <ul className="text-sm list-disc list-inside space-y-2 text-start text-black">
                {card.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>


    
<section  className="w-full relative py-12 sm:py-[104px]">
  <div className="flex relative z-10 flex-col max-w-7xl mx-auto lg:flex-row">
    
    {/* LEFT COLUMN */}
    <div className="w-full lg:w-1/2 px-4 sm:px-8">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-start">
        {/* Align image and text from same x-axis */}
        <img
          src={StoreusLogo}
          alt="Foundation"
          className=" h-auto ml-[-50px] w-[400px] object-contain"
        />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Foundation</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Founded in 2020 by visionary entrepreneurs, StoreUs set out to revolutionize the e-commerce landscape in the Middle East. Operating across the UAE, Libya, and Egypt—with plans for broader MENA expansion—StoreUs provides consumers with a seamless online shopping experience. The platform offers a wide selection of products across diverse categories, including electronics, fashion, home décor, and more.
        </p>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="w-full lg:w-1/2 px-4 sm:px-8 flex justify-center items-start">
      <img
        src={iPhone}
        alt="iPhone"
        className="w-full object-contain hover:scale-105 transition-all duration-300"
      />
    </div>
    
  </div>
</section>


     {/* categories Section */}
<section className="w-full py-16 px-4 sm:px-6 lg:px-8">
  {/* Heading */}
  <div className="text-center max-w-2xl mx-auto mb-10">
    <p className="text-sm text-black font-medium"> StoreUs</p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">Categories</h2>
    <p className="text-gray-600">
      The platform offers a wide selection of products across diverse categories,
      including electronics, fashion, home décor, and more.
    </p>
  </div>

  {/* Categories Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
    {categories.map((category, index) => (
      
      <div
        key={index}

      >
        <div
         className="border rounded-xl p-4 bg-gradient-to-b from-white to-[#f9f5eb] flex flex-col items-center justify-center text-center transition hover:shadow-md">
      
        <img
          src={category.image}
          alt={category.title}
          className="h-28 object-contain mb-3"
        />
        </div>
        <div>
          <h3 className="text-lg text-center font-semibold mt-2">{category.title}</h3>

        </div>
      </div>
      
    ))}
  </div>
  

  {/* Explore More Button */}
  <div className="text-center mt-10">
    <button className="px-6 py-2 border border-black text-black text-sm font-medium rounded-full hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
    <a href="https://storeus.com/" target="_blank" rel="noopener noreferrer">  Explore More
      <span className="text-lg">→</span>
      </a>
    </button>
  </div>
</section>


<Figures/>





{/* slideLast section */}
<TeamSection />
{/* contact us section */}
<Contact/>

    </>
  );
};

export default Home;