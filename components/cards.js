import Image from "next/image";
import cardsData from "../data/cards.json";

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card) => (
        <div key={card.id} className="max-w-sm m-4 my-4 mt-2 rounded overflow-hidden shadow-lg justify-center">
          <img className="w-full h-40" src="/1.jpg" alt={card.imageAlt} width={card.imageWidth} height={card.imageHeight} layout="responsive"/>
          <div className="bg-white px-6 py-3">
            <div className="font-bold text-base mb-2">{card.title}</div>
            <p className="text-gray-700 text-sm">{card.description}</p>
          </div>
          <div className="bg-white px-6 pb-2">
            {card.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
