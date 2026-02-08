import React from "react";

// 1. Child Component (Card)
const AwardCard = ({ image, text, bgColor }) => {
  return (
    <div 
      className="flex flex-col items-center justify-center p-8 rounded-lg text-center hover:-translate-y-1 transition-transform duration-200"
      style={{ backgroundColor: bgColor }} // Dynamic Color prop se aayega
    >
      <img src={image} alt="award" className="w-20 h-20 object-contain mb-5" />
      <p className="font-semibold text-gray-800">{text}</p>
    </div>
  );
};

// 2. Parent Component (Main Section)
const AwardsSection = () => {
  const awardsData = [
    {
      id: 1,
      text: "Market leader across 18 categories",
      bgColor: "#fff0f0", // Light Pink
      image: "https://placehold.co/80x80/orange/white?text=Leader",
    },
    {
      id: 2,
      text: "Most loved SaaS tool in 2021",
      bgColor: "#fff0fa", // Light Purple
      image: "https://placehold.co/80x80/black/white?text=Loved",
    },
    {
      id: 3,
      text: "Category leader in 2022",
      bgColor: "#f0fdff", // Light Blue
      image: "https://placehold.co/80x80/teal/white?text=Leader",
    },
    {
      id: 4,
      text: "Most recommended tool in 2021",
      bgColor: "#f5f4ff", // Light Indigo
      image: "https://placehold.co/80x80/darkblue/white?text=Advice",
    },
    {
      id: 5,
      text: "Champion in survey tool 2022",
      bgColor: "#fffbeb", // Light Yellow
      image: "https://placehold.co/80x80/gold/white?text=Champ",
    },
    {
      id: 6,
      text: "Top performer spring 2021",
      bgColor: "#fff0e5", // Light Orange
      image: "https://placehold.co/80x80/orange/white?text=Top",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Grid: Mobile=1 col, Tablet=2 cols, Desktop=3 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {awardsData.map((item) => (
          <AwardCard
            key={item.id}
            image={item.image}
            text={item.text}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;