import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import './products.scss'
import axios from 'axios'
import { AiOutlineHeart , AiOutlineStar , AiFillCheckCircle, AiOutlineEye } from 'react-icons/ai'
import { IoMdStats } from 'react-icons/io'
import { HiChevronRight } from 'react-icons/hi'

const URL = 'https://637b21d06f4024eac204e9ae.mockapi.io/test'

export const Products = () => {
 
const[state, setState] = useState([])

useEffect(() => {
  axios.get(`${URL}`)
  .then(res => {
    setState(res.data)
  })
  .catch(err => {
    console.log(err);
  })
}, [])



  return (
    <>
    <Header/>
        <div className="body">
      <div className="product-info">
        <h1>Наушники</h1>
        <img src="https://bobbystore.kg/wa-data/public/shop/wmimageincatPlugin/categories/1/banner_552.png" alt="img" />
      </div>
      <div className="product">

    {
      state.map(obj => (
    <div className="items">
        <div className="item-on">
          <img src={obj.url} alt="img" />
          <div className="like">
            <AiOutlineHeart />
          </div>
          <div className="compare">
            <IoMdStats/>
          </div>
        </div>
          <div className="middle">
            <div className="rate">
              <AiOutlineStar className='star'/>
              <AiOutlineStar className='star'/>
              <AiOutlineStar className='star'/>
              <AiOutlineStar className='star'/>
              <AiOutlineStar className='star'/>
            </div>
            <a href="/">{obj.name}</a>
            <p>
              <AiFillCheckCircle className='check'/>
              В наличии
            </p>
            <div className="price">
              <h3 className="real-cost">{obj.price} СОМ</h3>
              <h4 className='before-cost'>{obj.discont} СОМ</h4>
            </div>
          </div>
            <div className="item-under">
              <div className="add-cart">
                <div className="item-button">
                  <button className='btn'>В корзину</button>
                  <div className="strelka"> 
                    <HiChevronRight className="right"/>
                  </div> 
                </div>
                <p><AiOutlineEye className='view'/></p>
              </div>
              <button className='btn-fast'>БЫСТРЫЙ ЗАКАЗ</button>
            </div>
      </div>
      ))
    }
    </div>
    </div>
    <Footer/>
    </>
  )
}
