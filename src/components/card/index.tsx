import Image from "next/image";
import React, { FC } from "react";

interface ICard {
  imageUrl: string;
  title: string;
}

export const Card: FC<ICard> = ({ imageUrl, title }) => {
  return (
    <div className="card">
      <Image
        className="card__img"
        src={imageUrl}
        alt={title}
        width={450}
        height={210}
      />
      <div className="card__title">{title}</div>
    </div>
  );
};
