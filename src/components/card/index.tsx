import Image from "next/image";
import React, { FC } from "react";

interface ICard {
  imageUrl: string;
  title: string;
  href: string;
  imageAlt?: string;
}

export const Card: FC<ICard> = ({ imageUrl, imageAlt, title, href }) => {
  return (
    <div className="card">
      <a href={href} className="card__link"></a>
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
