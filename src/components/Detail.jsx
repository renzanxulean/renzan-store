import { useNavigate, useParams } from "react-router-dom";
import cardData from "../data/cardData";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = cardData.find((card) => card.id === parseInt(id));

  if (!card) {
    return <div>Kartu tidak ditemukan</div>;
  }

  const message = `Hai, apakah produk ${card.name} tersedia?`;
  const encodedMessage = encodeURIComponent(message);
  const messengerUrl = `https://m.me/RenzanXulean?ref=${encodedMessage}`;

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-4xl font-bold mb-4">{card.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {card.images.slice(1).map((image, index) => (
          <img
            key={index}
            className="object-cover w-full rounded-lg"
            src={image}
            alt={`${card.name} detail ${index + 1}`}
          />
        ))}
      </div>
      <div className="mt-4">
        <p>Super Sugo Fest Only unit (SSR): {card.superSugoFestOnlyUnit}</p>
        <p>Anniversary unit: {card.anniversaryUnit}</p>
        <p>Sugo Rare: {card.sugoRare}</p>
        <p>GV : {card.gvFresh}</p>
        <p>Main Story : {card.mainStoryFresh}</p>
      </div>
      <div className="mt-4">
        <a
          href={messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
        >
          Info lebih lanjut hubungi lewat Facebook
        </a>
      </div>
    </div>
  );
};

export default Detail;
