import React from 'react';
import img10 from '../assets/img10.jpeg';

// Card component
function Card({ imgSrc, title, description, tags }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-10 mb-9 mr-10">
      <img className="w-full" src={imgSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <button className="flex mx-auto mt-6 mb-10  bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt">
        Donate
      </button>
    </div>
  );
}

const DonateCard = () => {
  return (
    <div className="flex flex-wrap justify-start">
      {/* This is where you can use the Card component */}
      {[1, 2, 3, 4].map((item) => (
        <Card
          key={item}
          imgSrc={img10}
          title="The Coldest Sunset"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          tags={["#photography", "#travel", "#winter"]}
        />
      ))}
    </div>
  );
}

export default DonateCard;
