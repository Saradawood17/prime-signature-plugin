import React from 'react';
import Sellers from '../assets/sellers.svg?react';
import TotalFollowers from '../assets/totalFollowers.svg?react';
import Products from '../assets/products.svg?react';
import Impression from '../assets/impression.svg?react';
import MonthlyActiveUsers from '../assets/activeUsers.svg?react';
import MarketingSpend from '../assets/marketing.svg?react';
import AppDownload from '../assets/appDownload.svg?react';

function Figures() {
     const stats = [
        { icon: Sellers , value: '1,000', title: 'Sellers' },
        { icon: TotalFollowers , value: '1,000', title: 'Total Followers' },
        { icon: Products , value: '1,000', title: 'Products' },
        { icon: Impression , value: '1,000', title: 'Impression' },
        { icon: MonthlyActiveUsers , value: '1,000', title: 'Monthly Active Users' },
        { icon: MarketingSpend , value: '1,000', title: 'Marketing Spend' },
        { icon: AppDownload , value: '1,000', title: 'App Download' },
    ];

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
        <p className="text-sm md:text-base text-gray-600 font-medium mb-2">Latest Service</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">StoreUs Figures</h2>
      </div>

      {/* Figures Grid - consistent card widths */}
      <div className="flex flex-col items-center  gap-4">
        {/* First Row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap  justify-center gap-4 w-full max-w-6xl px-4 sm:px-6">
          {stats.slice(0, 4).map((item, index) => (
            <StatCard key={index} item={item} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 w-full max-w-6xl px-4 sm:px-6">
          {stats.slice(4).map((item, index) => (
            <StatCard key={index + 4} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function StatCard({ item }) {
  return (
    <div className="relative lg:w-64  rounded-lg overflow-hidden p-4 text-center shadow-sm hover:shadow-md transition-all duration-300">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F1EBDA] via-white to-[#F1EBDA] z-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
       <item.icon className="w-10 h-10 mb-2" />
        <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
        <p className="text-xs sm:text-sm text-gray-600">{item.title}</p>
      </div>
    </div>
  );
}

export default Figures;
