import Image from "next/image";
import React, { FC } from "react";

interface ICard {
  imageUrl: string;
  imageAlt?: string;
  title: string;
}

export const Card: FC<ICard> = ({ imageUrl, imageAlt, title }) => {
  return (
    <div className="card">
      <Image
        className="card__img"
        src={imageUrl}
        alt={imageAlt || ""}
        width={450}
        height={210}
      />
      <div className="card__title">{title}</div>
    </div>
  );
};
