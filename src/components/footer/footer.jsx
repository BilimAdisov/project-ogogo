import React from 'react'
import { AiOutlineClockCircle} from 'react-icons/ai'
import {  HiLocationMarker } from 'react-icons/hi'
import { MdEmail, MdCall } from 'react-icons/md'
import './footer.scss'

export const Footer = () => {
  return (
    <>
                    <footer>
                <div className="footer-container">
                    <div className="footer-nav">
                        <div className="first">
                            <img src="https://bobbystore.kg/wa-data/public/site/themes/insales/img/logo-f.png?v3.5.0.10" alt="" />
                            <p>На данный момент наш интернет-магазин 
                                предоставляет широкий ассортимент 
                                современной продукции и обеспечивает 
                                быструю недорогую доставку по России, 
                                Украине, Казахстану и Кыргызстану. Клиентская 
                                база постоянно растет и насчитывает уже более 
                                10000 счастливых клиентов
                            </p>
                            <div className="link">
                                <a href="/" className='link-after'>Политика персональных данных</a>
                                <a href="/">Карта сайта</a>
                            </div>

                        </div>
                        <div className="second">
                            <ul>
                                <h3>Компания</h3>
                                <li><a href="/">Новинки</a></li>
                                <li><a href="/">Аксессуары Apple</a></li>
                                <li><a href="/">Аксессуары для Фото/Видео</a></li>
                                <li><a href="/">Смартфоны</a></li>
                                <li><a href="/">Авто аксессуары</a></li>
                                <li><a href="/">Мобильные аксессуары</a></li>
                                <li><a href="/">Аудио технологии</a></li>
                                <li><a href="/">Встраиваемая техника</a></li>
                                <li><a href="/">Бытовая техныка (Электроника)</a></li>
                                <li><a href="/">Товары для дома</a></li>
                                <li><a href="/">Личные Вещи</a></li>
                                <li><a href="/">Транспорт</a></li>
                                <li><a href="/">Компьютеры и Ноутбуки</a></li>
                                <li><a href="/">Разное</a></li>
                            </ul>
                        </div>
                        <div className="third">
                            <ul>
                                <h3>ДЛЯ ПОКУПАТЕЛЕЙ</h3>
                                <li><a href="/">Подарочные сертификаты</a></li>
                                <li><a href="/">Для организаций</a></li>
                                <li><a href="/">Доставка</a></li>
                                <li><a href="/">Bobby-Партнеры</a></li>
                                <li><a href="/">Bobby-Ответы</a></li>
                                <li><a href="/">Контакты</a></li>
                                <li><a href="/">Скидки и бонусы</a></li>
                                <li><a href="/">Cashback (Бонусы)</a></li>
                                <li><a href="/">Рассрочка и кредиты</a></li>
                                <li><a href="/">О нас</a></li>
                                <li><a href="/">Политика конфеденциальности</a></li>
                                <li><a href="/">Гарантийная инфоррмация</a></li>
                            </ul>
                            <ul>
                                <h3>Личный кабинет</h3>
                                <li><a href="/">Мой профиль</a></li>
                                <li><a href="/">Мои заказы</a></li>
                                <li><a href="/">Партнерская программа</a></li>
                                <li><a href="/">Мои подписки</a></li>
                            </ul>
                        </div>
                        <div className="fourth">
                            <ul>
                                <h3>Контакты</h3>
                                <li>
                                    <MdCall />
                                        <span>КР +996 755 515-000; РФ +7 999 333-94-02</span>
                                </li>
                                <li>
                                        <HiLocationMarker/>
                                        <span>
                                        (Головной офис) Кыргызстан, г. Бишкек. ул. <br />
                                        Токтоналиева 6, пересекает ул. <br />
                                        Джаманбаева
                                        </span>
                                </li>
                                <li>
                                    <MdEmail/>
                                    <a href="/">bobbystore.kg@gmail.com</a>
                                </li>
                                <li>
                                    <AiOutlineClockCircle/>
                                    <div className="cont">
                                        <span>Режим работы:</span>
                                        <span>Пн-Сб 10:00—20:00; Вс 11:00-20:00</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="footer-icon">
                                <a href="/">
                                    <img src="" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='underest'>
                        <p>©2018-2022 Bobbystore.kg. Все права защищены</p>
                    </div>
                </div>
            </footer>
    </>
  )
}
