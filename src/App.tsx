import { useState, useEffect } from "react";
import { Card, CardType } from "./components/Card";

function App() {
  const [card, setCard] = useState<CardType | null>(null); // State to hold the card data

  // Function to fetch a random card
  const fetchRandomCard = async () => {
    try {
      const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/draw/?count=1",
      );
      const data = await response.json();

      if (data.cards && data.cards.length > 0) {
        const drawnCard = data.cards[0];
        setCard({
          suit: drawnCard.suit.toLowerCase(),
          value: drawnCard.value,
          image: drawnCard.image,
        });
      }
    } catch (error) {
      console.error("Error fetching card:", error);
    }
  };

  useEffect(() => {
    fetchRandomCard(); // Fetch a random card on component mount
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-800 p-8">
      <div className="mb-8 text-4xl font-bold text-white">Blackjack</div>

      <div className="flex flex-col items-center gap-12">
        {/* Always show a placeholder card until the first one is loaded */}
        <div>
          {card ? (
            <Card card={card} />
          ) : (
            <div className="h-[314px] w-[226px] rounded-lg bg-gray-500 shadow-lg"></div>
          )}
        </div>
        <button
          onClick={fetchRandomCard}
          className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Draw Random Card
        </button>
      </div>
    </div>
  );
}

export default App;
