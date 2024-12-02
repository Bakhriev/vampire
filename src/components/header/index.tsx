"use client";

import Image from "next/image";
import { MobileMenu } from "../mobile-menu";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo logo">
          <Image
            className="logo__img"
            src="/icons/logo.png"
            alt="logo"
            width={62}
            height={36}
            priority
          />
        </div>

        <nav className="header__nav">
          <ul className="menu list-reset">
            <li className="menu__item">
              <a href="#" className="menu__link active">
                Vampire: The Requiem
              </a>
            </li>

            <li className="menu__item">
              <a href="#" className="menu__link">
                Changeling: the Lost
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          className="header__burger btn-reset"
        >
          {isMenuOpened ? (
            <Image
              priority
              width={20}
              height={20}
              src={"/icons/close.svg"}
              alt="Follow us on Twitter"
            />
          ) : (
            <Image
              priority
              width={20}
              height={20}
              src={"/icons/menu.svg"}
              alt="Follow us on Twitter"
            />
          )}
        </button>

        <MobileMenu isMenuOpened={isMenuOpened} />
      </div>
    </header>
  );
};
