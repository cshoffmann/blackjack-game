import React from "react";

export interface CardType {
  suit: string;
  value: string;
  image: string;
}

interface CardProps {
  card: CardType;
  isHidden?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  card,
  isHidden = false,
  style,
}) => {
  if (isHidden) {
    return (
      <div
        className="h-[314px] w-[226px] transform transition-transform duration-300 hover:scale-105"
        style={style}
      >
        <img
          src="https://www.deckofcardsapi.com/static/img/back.png"
          alt="Card Back"
          className="h-full w-full rounded-lg shadow-lg"
        />
      </div>
    );
  }

  return (
    <div
      className="h-[314px] w-[226px] transform transition-transform duration-300 hover:scale-105"
      style={style}
    >
      <img
        src={card.image}
        alt={`${card.value} of ${card.suit}`}
        className="h-full w-full rounded-lg shadow-lg"
      />
    </div>
  );
};
