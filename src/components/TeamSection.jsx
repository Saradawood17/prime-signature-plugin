// src/components/TeamSection.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules'; // <-- Added Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SoftwareIcon from "../assets/Group (5).svg?react";
import Content from "../assets/Vector (1).svg?react";
import CustomerSupport from "../assets/Group (6).svg?react";
import Logistics from "../assets/Group (7).svg?react";
import Design from "../assets/Group (8).svg?react";


// Team card component
const TeamCard = ({ icon, title, description }) => {
  return (
    <div
      className="relative rounded-lg border-b-1 p-6 text-center transition-all duration-300 overflow-hidden"
      style={{
        height: '226px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 0 2px rgba(0,0,0,0.5)',
      }}
    >
      {/* Left Gradient Border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '1px',
          background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.5), rgba(255,255,255,0))',
          borderRadius: '1px 0 0 1px',
        }}
      />
      {/* Right Gradient Border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          width: '1px',
          background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.5), rgba(255,255,255,0))',
          borderRadius: '0 1px 1px 0',
        }}
      />
      <div className="relative flex items-center justify-center flex-col z-10">
        <div className="text-6xl  mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-black font-medium text-sm">{description}</p>
      </div>
    </div>
  );
};

// Slides data
const slidesLast = [
  <TeamCard icon={<Design />} title="Design" description="Expert Designers And Masters Of UX Design." />,
  <TeamCard icon={<Content />} title="Content" description="Content Management And Creation Professionals." />,
  <TeamCard icon={<Logistics />} title="Logistics" description="Enhanced Logistics Management And Our Own Fleet." />,
  <TeamCard icon={<CustomerSupport />} title="Customer Support" description="Friendly And Always Ready To Help." />,
  <TeamCard icon={<SoftwareIcon />} title="Software Development" description="Experienced Programmers Who Are Turning The Dreams Into Reality." />,
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#F1EBDA] py-16">
      <div className="text-center mb-12 px-4">
      <h2 className="text-3xl font-bold mb-4 text-black">OUR TEAM</h2>
        <p className="text-black max-w-3xl mx-auto">
          Signature Technology’s Team Is Young, Motivated, International And Highly Skilled. We Love Our Job, We Love Our Clients. We Aim “Impossible” Achievements And Achieve Unthinkable Results.
        </p>
      </div>

      <div className="flex justify-center ">
        <Swiper
          modules={[Virtual, Navigation, Pagination, Autoplay]} // <-- Added Autoplay
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides
          virtual
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ width: '85%' }}
          className="swiper-customize"
        >
          {slidesLast.map((slideContent, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
