"use client";

export const MobileMenu = ({ isMenuOpened }: { isMenuOpened: boolean }) => {
  return (
    <div className={`mobile-menu ${isMenuOpened ? "active" : ""}`}>
      <div className="mobile-menu__links">
        <a href="#" className="mobile-menu__link">
          Vampire: The Requiem
        </a>
        <a href="#" className="mobile-menu__link">
          Changeling: the Lost
        </a>
      </div>
      <div className="mobile-menu__inner custom-scroll">
        <div className="mobile-menu__col">
          <div className="nav-group">
            <div className="nav-group__title">Сеттинг</div>
            <ul className="nav-menu list-reset">
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Мир современной готики
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Обращение
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Реквием и Пляска Смерти
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Питание, безумие, торпор
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Традиции
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Сила крови
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Винкулум
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Рабы и гули
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Диаблери
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Метка хищника
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <div className="nav-group__title">Ковенанты</div>
            <ul className="nav-menu list-reset">
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Картианское Движение
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Колдовской Круг
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Инвиктус
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Ланцеа Санктум
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Ордо Дракул
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <div className="nav-group__title">Дисциплины</div>
            <ul className="nav-menu list-reset">
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Общие Дисциплины
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Прерогативные Дисциплины
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Распределение Дисциплин по кланам
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Династические Дисциплины
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Дисциплины ковенантов
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile-menu__col">
          <div className="nav-group">
            <div className="nav-group__title">Кланы</div>
            <ul className="nav-menu list-reset">
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Дэва
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Гангрел
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Мехет
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Носферату
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Вентру
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Родословные
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Юлии
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <div className="nav-group__title">Специализации</div>
            <ul className="nav-menu list-reset">
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Подбор по навыкам
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Весь список
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-group">
            <div className="nav-group__title">Другие фракции</div>
            <ul className="nav-menu list-reset">
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Нейтральные фракции
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Отстранившиеся
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Теневые культы
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Исторические фракции
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Камарилья
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Сакадагами
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Союз Южных Городов
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Анархи
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Опциональные фракции
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Тайные организации
                </a>
              </li>
              <li className="nav-menu__item">
                <a href="#" className="nav-menu__link">
                  Младшие ковенанты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
