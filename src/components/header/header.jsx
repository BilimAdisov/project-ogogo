import React from 'react'
import { ImWhatsapp, ImFacebook } from 'react-icons/im'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { IoMdStats } from 'react-icons/io'
import { FaShoppingCart, FaTelegramPlane, FaUser } from 'react-icons/fa'
import { AiOutlineEye, AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { MdCall } from 'react-icons/md'
import './header.scss'

export const Header = () => {
  return (
    <>
                <header className='header'>
                <div className="header-container">
                    <div className="header-nav">
                        <ul>
                            <li className='first'>
                            <HiLocationMarker className='local-icon'/>
                                <div className="text">
                                    <p>Ваш город</p>
                                </div>
                            </li>
                            <li>
                            <HiLocationMarker className='local-icon'/> 
                                <div className="text">
                                    <p>Наш адрес</p>
                                    <span>г. Бишкек. ул. Токтоналиева 6</span>
                                </div>
                            </li>
                            <li>
                            <AiOutlineClockCircle className='local-icon'/>
                                <div className="text">
                                    <p>Режим работы</p>
                                    <span>Пн-Вс 10:00—20:00</span>
                                </div>
                            </li>
                            <li>
                                <MdCall className='call-icon'/>
                                <div className="text">
                                    <p>+996 755 515 000</p>
                                    <span>Отдел продаж</span>
                                </div>
                            </li>
                            <li className='second'>
                                <MdCall className='call-icon'/>
                                <div className="text">
                                    <p>+7 999 333 94 02</p>
                                    <span>Россия и страны СНГ</span>
                                </div>
                            </li>
                            <li>
                                <div className="circle">
                                    <AiOutlineHeart className='last-icon'/>
                                    <span>0</span>
                                </div>
                            </li>
                            <li>
                                <div className="circle">
                                    <IoMdStats className='last-icon'/>
                                    <span>0</span>
                                </div>
                            </li>
                            <li>
                                <div className="circle">
                                    <AiOutlineEye className='last-icon'/>
                                    <span>0</span>
                                </div>
                            </li>
                            <li className='third'>
                                <div className="circle">
                                    <FaUser className='user-icon'/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="under-header">
                <div className="under-header-container">
                    <ul>
                        <li>
                            <img src="https://bobbystore.kg/wa-data/public/site/themes/insales/img/icon.svg?v3.5.0.10" alt="img" />
                        </li>
                        <li>
                            <div className='catalog'>Каталог товаров</div>
                        </li>
                        <li>
                            <div className="header-search">
                                <input type="text" placeholder='Телевизор...' />
                            </div>
                        </li>
                        <li>
                            <div className="cart">
                            <div className="cart-icon">
                                <FaShoppingCart />
                                <span>0</span>
                            </div>
                            <p>Корзина <br /> Пусто</p>
                            </div>
                        </li>
                        <li className='header-icons'>
                            <ImFacebook />
                            <BsInstagram />
                            <BsYoutube />
                            <FaTelegramPlane />
                            <ImWhatsapp />
                        </li>
                    </ul>
                </div>
            </div>
    </>
  )
}
