/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  if (!card) {
    return null; // Atau render placeholder/error message
  }

  return (
    <Link
      to={`/detail/${card.id}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl transition duration-150 ease-in-out md:hover:scale-105 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto"
    >
      <img
        className="object-cover w-full h-auto md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={card.images[0]}
        alt={card.name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {card.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Super Sugo Fest Only unit (SSR): {card.superSugoFestOnlyUnit}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Anniversary unit: {card.anniversaryUnit}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Sugo Rare: {card.sugoRare}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          GV: {card.gvFresh}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Main Story: {card.mainStoryFresh}
        </p>
      </div>
    </Link>
  );
};

export default Card;
