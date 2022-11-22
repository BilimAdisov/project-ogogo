import React from 'react'
import './block.scss'

export const Block = () => {
  return (
    <>
    <div className="under-slider">
    <div className="block-1" data-aos="fade-right">
            <a href="/products" className='main-text'>Аксессуары для Фото/Видео</a>
            <div className="block-link">
                <div className="block-item">
                    <a href="/products" className='left-item'>Оборудование для <br /> мобильной <br /> съемки</a>
                    <a href="/products" className='right-item'>Фотоаппараты</a>
                </div>
                <div className="block-item">
                    <a href="/products" className='left-item'>Ручные стабилизаторы и стедикамы</a>
                    <a href="/products" className='right-item'>Студийный Свет</a>
                </div>
                <div className="block-item">
                    <a href="/products" className='left-item'>Объективы</a>
                    <a href="/products" className='right-item'>Штативы и Треноги</a>
                </div>
                <div className="block-item">
                    <a href="/products" className='left-item'>Микрофоны</a>
                    <a href="/products" className='right-item'>Сумки для фотоаппаратов</a>
                </div>
            </div>
            <img src="https://bobbystore.kg/wa-data/public/shop/skcatimage/144/image_bg-categ-7.png" alt="img" />
    </div>

        <div className="right-block" data-aos="fade-left">
        <div className="blocks-2">
            <div className="on-block-1">
                <div className="block-items">
                    <a href="/products">Мобильные аксессуары</a>
                    <div className="items">
                        <a href="/products">Триггеры и геймпады</a>
                        <a href="/products">Зарядные Устройства</a>
                        <a href="/products">Смарт Часы</a>
                        <a href="/products">Power Bank</a>
                        <a href="/products">USB кабели</a>
                    </div>  
                    <img src="https://bobbystore.kg/wa-data/public/shop/skcatimage/13/image_bg-categ-10.png" alt="img" />
                </div>
            </div>
            <div className="on-block-2">
            <div className="block-items">
                    <a href="/">Бытовая Техника <br /> (Электроника)</a>
                    <div className="items">
                        <a href="/products">Холодильники</a>
                        <a href="/products">Морозильники</a>
                        <a href="/products">Телевизоры</a>
                        <a href="/products">Газовые и электрические плиты</a>
                        <a href="/products">Посудомоечные машины</a>
                    </div>  
                    <img src="https://bobbystore.kg/wa-data/public/shop/skcatimage/234/image_bg-categ-8.png" alt="img" />
                </div>
            </div>
        </div>
        <div className="blocks-3">
        <div className="under-block-1">
                <div className="block-items">
                    <a href="/products">Рюкзаки</a>
                    <div className="items">
                        <a href="/products">Рюкзаки Tangcool</a>
                        <a href="/products">Рюкзаки Tigernu</a>
                        <a href="/products">Рюкзаки Promate</a>
                        <a href="/products">Рюкзаки XD Design</a>
                        <a href="/products">юкзаки Xiaomi</a>
                    </div>  
                    <img src="https://bobbystore.kg/wa-data/public/shop/skcatimage/146/image_bg-categ-6.png" alt="img" />
                </div>
            </div>
            <div className="under-block-2">
                <div className="block-items">
                    <a href="/">Компьютеры и Ноутбуки</a>
                    <div className="items">
                        <a href="/products">Сетевое оборудование</a>
                        <a href="/products">Веб-камеры</a>
                        <a href="/products">Игровые девайсы</a>
                        <a href="/products">Мониторы</a>
                        <a href="/products">Ноутбуки и Ультрабуки</a>
                    </div>  
                    <img src="https://bobbystore.kg/wa-data/public/shop/skcatimage/36/image_bg-categ-3.png" alt="img" />
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
