import React, { FC } from "react";

interface ICardsContainer {
  children: React.ReactNode;
  className?: string;
}

export const CardsContainer: FC<ICardsContainer> = ({
  children,
  className,
}) => {
  return <div className={`cards-container ${className || ""}`}>{children}</div>;
};
