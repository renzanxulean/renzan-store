import cardData from "../data/cardData";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 p-6">
      {cardData.map((card) => (
        <div key={card.id}>
          <Card card={card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
