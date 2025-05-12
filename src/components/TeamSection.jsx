// src/components/TeamSection.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules'; // <-- Added Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
      <div className="relative z-10">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

// Slides data
const slidesLast = [
  <TeamCard icon="💡" title="إدارة" description="مديرين ذوي خبرة ورؤية وخبرة." />,
  <TeamCard icon="📢" title="تسويق" description="التسويق المتطور ونمو الفرص." />,
  <TeamCard icon="📈" title="المبيعات والحسابات" description="مديري المبيعات والحسابات المخضرمين والديناميكيين." />,
  <TeamCard icon="🎨" title="تصميم" description="مصممي الفنون الجميلة وأساتذة تصميم تجربة المستخدم." />,
  <TeamCard icon="💻" title="محتوى" description="متخصصون في المحتوى وإنشائه." />,
];

export default function TeamSection() {
  return (
    <section className="bg-[#DCCDA5] py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold mb-4 text-white">فريقنا</h2>
        <p className="text-white max-w-3xl mx-auto">
          فريق سيجنتشر تكنولوجي شاب، متخصص، ذو خبرة عالمية، وذو مهارات عالية. نحب عملنا، ونحب عملائنا. نسعى لتحقيق إنجازات "مستحيلة" ونتائج مبهرة. نحن فريق فعّال وسريع النمو. نعمل معاً ونستمتع معاً.
        </p>
      </div>

      <div className="flex justify-center">
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
