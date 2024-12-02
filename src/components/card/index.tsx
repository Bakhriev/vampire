import React, { FC } from "react";

interface ICard {
  imageUrl: string;
  imageAlt?: string;
  title: string;
}

export const Card: FC<ICard> = ({ imageUrl, imageAlt, title }) => {
  return (
    <div className="card">
      <img className="card__img" src={imageUrl} alt={imageAlt || ""} />
      <div className="card__title">{title}</div>
    </div>
  );
};
