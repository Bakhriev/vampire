import React, { FC } from "react";

interface ISearch {
  className?: string;
}

export const Search: FC<ISearch> = ({ className }) => {
  return (
    <div className={`search ${className || ""}`}>
      <div className="search__field">
        <input
          type="text"
          className="search__input input-reset"
          placeholder="Поиск по Vampire: The Requiem"
        />
      </div>
    </div>
  );
};
