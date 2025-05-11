import React, {useRef , useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';
import { EffectCards, Pagination, Navigation, Autoplay, Virtual } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Frame1 from "../assets/Frame (1).svg?react";
import Frame2 from "../assets/Frame (2).svg?react";
import Frame3 from "../assets/Frame (3).svg?react";
import Frame4 from "../assets/Frame.svg?react";
import storeUsHome from "../assets/MacBook Air - 1.png";
import iPhone from "../assets/iPhone 15.png";
import rings from '../assets/7622201730727 1.png';
import cola from '../assets/6222014300974-1 1.png';
import milk from '../assets/5152MmyPcTL._AC_UF894,1000_QL80_ 1.png';
import grocery from '../assets/item_xxl_22950402_5e5018032a346-removebg-preview 1.png';
import diapers from '../assets/mob-app-categ-02-39-13-Nov-2024-mob-egypt-removebg-preview 1.png';
import tissue from '../assets/mob-app-categ-08-33-13-Nov-2024-mob-egypt-removebg-preview 1 (1).png';
import cookies from '../assets/mob-app-categ-08-33-13-Nov-2024-mob-egypt-removebg-preview 1.png';
import oil from '../assets/mob-app-categ-14-27-13-Nov-2024-mob-egypt-removebg-preview 1.png';
import frameBlue1 from '../assets/Frame (2).png';
import frameBlue2 from '../assets/Frame (1).png';
import frameBlue3 from '../assets/Group.png';
import frameBlue4 from '../assets/Frame.png';
import Check from '../assets/Glyph_ undefined.svg?react';


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slidesLast, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slidesLast,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slidesLast, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  const cards = [
    { id: 3, icon: Frame3, title: "المعالم الرئيسية" },
    { id: 1, icon: Frame1, title: "من نحن" },
    { id: 2, icon: Frame2, title: "رؤيتنا" },
  
    { id: 4, icon: Frame4, title: "فريقنا" }
  ];

  const expansionCards = [
    { 
      id: 1,
      icon: frameBlue1,
      period: "2024 - Ongoing",
      title: "دخول السوق",
      items: [
        " إطلاق منصة Storeus - الموقع الإلكتروني والتطبيق",
        "فئات المنتجات الأولية"
       
      ]
    },
    { 
      id: 2,
      icon: frameBlue2,
      period: "2020 - 2023",
      title: "الاكتساب",
      items: [
        "اكتساب العملاء والبائعين",
        " الوصول إلى مليون مستخدم مسجل" ,
        "فئات المنتجات الموسعة",
        "التوسع في ليبيا - إطلاق الموقع الإلكتروني والتطبيق",
        "خيارات الدفع الموسعة"
      ]
    },
    { 
      id: 3,
      icon: frameBlue3,
      period: "2018 - 2020",
      title: "الاحتفاظ",
      items: [
        " السوق الجديد (مينا)",
        " b2b، التخزين، التوزيع والسوق",
        " تسمية خاصة" 
      ]
    },
    { 
      id: 4,
      icon: frameBlue4,
      period: "2016 - 2018",
      title: "التوسع",
      items: [
        "بحث السوق",
        "تطوير النموذج الأولي",
        "جولة التمويل الأولى"
      ]
    }
  ];

  const categories = [
    {
      title: "مقرمشات",
      image: rings,
      link: "https://example.com/snacks"
    },
    {
      title: "مشروبات",
      image: cola,
      link: "https://example.com/drinks"
    },
    {
      title: "منتجات الالبان",
      image: milk,
      link: "https://example.com/dairy"
    },
    {
      title: "البقالة",
      image: grocery,
      link: "https://example.com/grocery"
    },
    {
      title: "حفاضات",
      image: diapers,
      link: "https://example.com/diapers"
    },
    {
      title: "منتجات ورقية",
      image: tissue,
      link: "https://example.com/paper"
    },
    {
      title: "حلويات و بسكويت",
      image: cookies,
      link: "https://example.com/sweets"
    },
    {
      title: "منتجات غذائية",
      image: oil,
      link: "https://example.com/food"
    }
  ];
  
  const slides = [
    {
      image: storeUsHome,
      title: ["الابتكار.", "التكنولوجيا المتطورة.", "ذكاء البيانات."],
      description: "يتم تطبيقه على أعمال التجارة الإلكترونية في العالم الحقيقي.",
    },
    {
      image: storeUsHome, // Add second slide image path
      title: ["السرعة.", "الأداء العالي.", "أمان البيانات."],
      description: "حلول مبتكرة لأعمال التجارة الإلكترونية بأداء فائق.",
    },
    {
      image: storeUsHome, // Add third slide image path
      title: ["التحليل.", "الاستجابة الذكية.", "الدقة."],
      description: "تحليلات دقيقة لقرارات ذكية في عالم التجارة.",
    },
  ];


  return (
    <>
  <main
  className="full-bg-img"
  >
    <section className=" w-full px-4 py-12 sm:py-[104px]">
        <div className="flex  max-w-7xl mx-auto flex-row justify-between  ">
            {/* Image - Takes full width on mobile, half on desktop */}
          <div className="w-1/2 h-auto lg:h-full flex items-start justify-center ">
          <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
            <SwiperSlide
            key={index}
            className="flex items-start justify-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "18px",
             
             
              
            }}
          ></SwiperSlide>
        
            ))}
      
      </Swiper>
          </div>
           {/* Text Content */}
           <div dir="rtl" className=" px-4  sm:px-6 font-sans">
  <div className="max-w-3xl mx-auto text-start">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-relaxed">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {slides[currentIndex].title.map((line, idx) => (
        <p key={idx} className={idx === 1 ? "text-[#1034A6]" : "text-black"}>
          {line}
        </p>
      ))}
    </motion.div>
  </AnimatePresence>
</h1>

<AnimatePresence mode="wait">
  <motion.p
    key={currentIndex + "-desc"}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.5 }}
    className="text-gray-600 mt-6 text-base sm:text-lg"
  >
    {slides[currentIndex].description}
  </motion.p>
</AnimatePresence>

    <div className="mt-8">
      <a
        href="#contact"
        className="inline-block bg-[#1034A6] hover:bg-[#1034A6] text-white font-semibold px-6 py-2 rounded-full transition"
      >
        تواصل معنا
      </a>
    </div>
  </div>
</div>



        

         
        </div>
      </section>
    





      {/* Cards Section */}
      <div dir="rtl" className="px-4  sm:px-6 lg:px-8 py-6  font-sans">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4 sm:gap-6">
          {cards.map((card) => (
            <button
              key={card.id}
              className={`group p-4 sm:p-6 rounded-2xl shadow-md sm:shadow-xl border border-gray-200 cursor-pointer transition-all duration-300
                bg-white hover:bg-blue-50 focus:text-white focus:bg-[#1034A6] active:bg-[#1034A6] active:text-white
                focus:outline-none`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-12 sm:h-16 w-12 sm:w-16 flex items-center justify-center mb-4 sm:mb-6">
                  <card.icon className="h-8 w-8 sm:h-12 sm:w-12 text-black fill-current group-hover:text-[#1034A6] group-focus:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-medium">{card.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Expansion Cards Section */}
      <section className=" w-full py-12 sm:py-[104px]">
        <div className="flex flex-col max-w-7xl mx-auto lg:flex-row min-h-[50vh]  ">
           {/* Text Content */}
           <div className="w-full lg:w-1/2 flex items-center py-8 lg:py-0 px-4 sm:px-8  ">
            <div className="w-full max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-right"> نحن أكثر من مجرد شركة</h2>
              <p className="text-base sm:text-lg text-gray-700 text-right leading-relaxed">
              سيجنتشر تكنولوجي شركةٌ قائمةٌ على الابتكار والتكنولوجيا. نُجري أبحاثًا ونُطلق ونُطوّر مشاريعَ أعمالٍ رائدةً في الشرق الأوسط والعالم<br/>
 نحن نغطي عملية الأعمال بأكملها داخليًا - البحث وتطوير البرمجيات والتسويق والإدارة والخدمات اللوجستية وخدمة العملاء وتحليل  البيانات  
 <br/>
العمود الفقري لمشاريعنا هو مجموعة من منصات التكنولوجيا الحديثة جنبًا إلى جنب مع إدارة المشاريع المتقدمة
  نحن نجهز ونطلق كل مشروع من مشاريعنا بعناية، وننميها بشغف ونديرها بكفاءة
              </p>
            </div>
          </div>
          {/* Image - Takes full width on mobile, half on desktop */}
          <div className="w-full  lg:w-1/2 h-auto lg:h-full flex items-center justify-center ">
            <img
              src={iPhone}
              alt="وصف الصورة"
              className="w-full hover:scale-105 transition-all duration-300  object-contain lg:object-cover"
            />
          </div>

         
        </div>
      </section>
{/* Expansion Cards Section */}
      <div dir="rtl" className="px-4 sm:px-6 lg:px-8 py-12  font-sans">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8  text-center"> المعالم الرئيسية والجداول الزمنية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4 sm:gap-6">
        {expansionCards.map((card) => (
          <div
            key={card.id}
            
            className="group p-4 relative sm:p-6 rounded-2xl shadow-md sm:shadow-xl border border-gray-200 transition-all duration-300
              bg-white  focus:outline-none"
          >
<div className="absolute top-0 left-0 w-full h-8  bg-[#1034A6] rounded-t-2xl  text-center flex items-center justify-center  text-white" > {card.period}</div>
            <div className="flex flex-col h-full">             
             <div className="h-12 mt-6 sm:h-16 w-12 sm:w-16 flex mx-auto items-center justify-center mb-4">
  <img
    src={card.icon}
    alt={card.title}
    className="h-8 w-8 sm:h-12 sm:w-12 object-contain group-hover:scale-110 transition-transform duration-300"
  />
</div>


              <div className="mb-2 pb-2 border-b border-gray-200">
  
                <h3 className="text-lg text-center font-medium">{card.title}</h3>
              </div>
              <ul className="mt-2 space-y-2 text-sm sm:text-base">
                {card.items.map((item, index) => (
                  <li key={index} className="flex  items-start">
                   <Check className="ml-2 w-4 h-4 inline-block" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>


      {/* Hero Section */}
      <section className=" w-full py-12 sm:py-[104px]">
        <div className="flex flex-col lg:flex-row min-h-[50vh]  ">
          {/* Image - Takes full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center ">
            <img
              src={storeUsHome}
              alt="وصف الصورة"
              className="w-full h-auto lg:max-h-none object-contain lg:object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex items-center py-8 lg:py-0 px-4 sm:px-8 lg:px-30 ">
            <div className="w-full max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-right">عنوان رئيسي</h2>
              <p className="text-base sm:text-lg text-gray-700 text-right leading-relaxed">
                هذا نص تجريبي باللغة العربية يوضح كيف يمكن عرض المحتوى النصي بجانب صورة في
                تصميم متجاوب باستخدام Tailwind CSS و React. هذا المثال مفيد للأقسام التعريفية.
              </p>
            </div>
          </div>
        </div>
      </section>


     {/* Hero Section */}
      <div dir="rtl" className=" py-16 px-4 sm:px-6 lg:px-8 font-sans">
  <div className="text-center max-w-3xl mx-auto mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">آلاف المنتجات، منصة واحدة</h2>
    <p className="text-gray-600">نحن نقدم مجموعة واسعة من المنتجات عبر فئات متعددة، مما يجعل عملية الحصول على المنتجات بسيطة وفعالة ومصممة خصيصًا لتلبية احتياجات عملك.</p>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {categories.map((category, index) => (
      <div
        key={index}
        className="bg-[#F4F6FA] p-4 rounded-2xl text-center shadow-sm hover:shadow-md transition"
      >
        <a href={category.link} target="_blank" rel="noopener noreferrer">
          <img
            src={category.image}
            alt={category.title}
            className="mx-auto mb-4 h-32 hover:scale-105 transition-all duration-300 object-contain"
          />
        </a>
        <h3 className="text-lg font-medium">{category.title}</h3>
      </div>
    ))}
  </div>

  <div className="text-center mt-10">
    <button className="bg-[#1034A6] hover:bg-[#1034A6] text-white font-semibold px-6 py-2 rounded-full transition">
      اقراء المزيد
    </button>
  </div>
</div>


{/* slideLast */}


<div>
<Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
        style={{ width: '85%'  }}
        className="swiper-customize py-16 px-4 sm:px-6 lg:px-8"
      >
        {slidesLast.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <p className="append-buttons ">
        <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides">
          Append Slide
        </button>
      </p>  */}
</div>
</main>
    </>
  );
};

export default Home;