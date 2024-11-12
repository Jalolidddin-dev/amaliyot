import { IoCubeSharp, IoPersonOutline } from "react-icons/io5";
import CatalogImage from "../../assets/images/img.png";
import { CiHeart } from "react-icons/ci";
import { LuBedSingle } from "react-icons/lu";
import { FaShower, FaSwimmingPool } from "react-icons/fa";
import "../../styles/catalog.card.css";

function CatalogCard() {
  return (
    <div className="catalog_card">
      <div className="catalog_image">
        <img src={CatalogImage} alt="catelog-card images" />
        <div className="catalog_card_icons">
          <CiHeart className="like_icon" />
        </div>
      </div>

      <div className="catalog_info">
        <div className="catalog_title">
          <h2>Новая сосновка</h2>
          <div className="catalog_card__useperson">
            <IoPersonOutline />
            <span>до 30</span>
          </div>
        </div>

        <div className="catalog_info_texts">
          <div className="catalog_card_home">
            <div>
              <LuBedSingle />
              <p>5 спальных мест</p>
            </div>
            <div>
              <FaShower />
              <p>Баня</p>
            </div>
            <div>
              <FaSwimmingPool />
              <p>Бассейн</p>
            </div>
            <div>
              <IoCubeSharp />
              <p>Развлечения</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="home_costs">
            <div className="catalog_card_home__costs">
              <div>
                <p>Будни</p>
                <h3>от 8000 ₽</h3>
              </div>
              <div>
                <p>Пятница</p>
                <h3>от 10 000 ₽</h3>
              </div>
            </div>
            <div className="catalog_card_home__costs">
              <div>
                <p>Суббота</p>
                <h3>от 12 000 ₽</h3>
              </div>
              <div>
                <p>Воскресенье</p>
                <h3>от 12 000 ₽</h3>
              </div>
            </div>
            <div className="catalog_card_links">
              <a href="pokazats">Показать на карте</a>
              <a href="podrogniy">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogCard;
