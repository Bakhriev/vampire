import { Header } from "@/components/header";
import "../styles/main.scss";
import { Footer } from "@/components/footer";
import { Search } from "@/components/search";
import { CardsContainer } from "@/components/cards-container";
import { Card } from "@/components/card";

export default function Home() {
  return (
    <div className="app home-page">
      <Header />
      <main className="main">
        <div className="container">
          <Search className="home-page__search" />

          <CardsContainer className="home-page__cards">
            <Card imageUrl="/images/card-setting.jpg" title="Сеттинг" />
            <Card imageUrl="/images/card-clans.jpg" title="Кланы" />
            <Card imageUrl="/images/card-spec.jpg" title="Специализации" />
            <Card imageUrl="/images/card-benefits.jpg" title="Преимущества" />
            <Card imageUrl="/images/card-covenants.jpg" title="Ковенанты" />
            <Card imageUrl="/images/card-others.jpg" title="Другие фракции" />
          </CardsContainer>

          <div className="info-block">
            <div className="info-block__title">Vampire: The Requiem</div>
            <div className="info-block__content">
              <p className="info-block__text">
                Это захватывающая настольная ролевая игра, которая погружает вас
                в мрачный мир ночи, где оживают вампирские мифы. действие
                разворачивается в сеттинге, наполненном тайнами, интригами и
                сверхъестественными угрозами. игроки становятся вампирами,
                существами, живущими в вечной тьме, которые борются с жаждой
                крови, осмысляют свою бессмертную природу и пытаются сохранить
                связь с остатками своей человечности.
              </p>
              <p className="info-block__text">
                На нашем сайте вы найдете всё необходимое для погружения в игру
                и создания уникального персонажа. ознакомьтесь с преимуществами
                игры, изучите специализации, доступные вампирам, и погрузитесь в
                подробные описания кланов, каждый из которых предлагает свои
                уникальные способности, философию и стиль игры. мы также
                расскажем о различных ковенантах — союзах и группах, которые
                определяют вампирскую политику и религиозные взгляды, — чтобы
                ваш персонаж смог найти своё место в сложной иерархии мира ночи.
              </p>
              <p className="info-block__text">
                Кроме того, вы узнаете больше о правилах игры, советах для
                новичков, механиках развития персонажа и создании увлекательных
                сюжетов. наша цель — помочь вам глубже понять этот мистический
                мир, раскрыть его возможности и вдохновить на создание
                запоминающейся истории для вашей кампании. добро пожаловать в
                вечную ночь!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
