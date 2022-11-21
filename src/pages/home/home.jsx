    import React from 'react'
    import { HiChevronRight, HiMenu } from 'react-icons/hi'
    import './home.scss'
    import {Slider} from '../../components/slider/slider'
    import { Block } from '../../components/block/block'
    import { Header } from '../../components/header/header'
import { Footer } from '../../components/footer/footer'

    export const Home = () => {
    return (
        <>
            <Header/>
                <div className="body">
                    <div className="body-container">
                        <div className="body-nav">
                            <div className="content-right">
                                <Slider/>
                                <div className="under">
                                    <div className="under-content">
                                        <h1>Популярные категории</h1>
                                        <Block/>
                                    </div>
                                </div>
                            </div>
                            <div className="catalogs">
                            <div className="content-left" >
                            <div className="catalog">
                                <div className="catalog-container">
                                    <ul className='menu-items'>
                                        <div className="menu-start">
                                            <HiMenu className='menu-icon'/>
                                            <p>КАТАЛОГ ТОВАРОВ</p>
                                        </div>
                                        <li>
                                            <div className="menu-item">
                                                <p>Новинки</p>
                                                <button className='btn'>new</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Аксессуары Apple</p>
                                                <button className='btn-2'>NEW</button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Аксессуары для Фото/Видео</p>
                                                <button className='btn-3'>ХИТ</button>
                                            </div>
                                            <HiChevronRight />
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Смартфоны</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Авто аксессуары</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Мобильные аксессуары</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Аудиотехника</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Встраиваемая техника</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Бытовая техника (Электроника)</p>
                                                <button className='btn-4'>NEW</button>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Товары для дома</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Личные вещи</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Транспорт</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                        <li>
                                            <div className="menu-item">
                                                <p>Компьютеры и ноутбуки</p>
                                            </div>
                                            <HiChevronRight/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
    }
