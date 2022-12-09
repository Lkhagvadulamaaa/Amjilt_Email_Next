import React from "react";
// import {a} from "react-router-dom"
import "./header.css";
// import {TiZoomOutline} from 'react-icons'
import { AiFillFolderOpen } from "react-icons/ai";
import {VscAccount} from "react-icons/vsc";
import {VscHeart} from "react-icons/vsc";
const Header = () => {
  return (
    <div>
      <header>
        <div className="h-container">
          <div className="logo">
            <div className="logo-1">
              <img
                src="https://cdn3.shoppy.mn/websites/3/original/next_white_logo.png"
                alt="image"
              />
            </div>
          </div>
          <div className="search">
            <div className="search-1">
              <div className="search-2">
                <input type="search" placeholder="Хайх утгаа оруулна уу..." />
              </div>
              <div className="search-i">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="h-icon">
            <div className="profile">
              <div className="wishlist">
                <div className="w-i">
                  <i className="fa-solid fa-bars"></i>
                </div>
                <div className="wishlist-h">
                  <h1 className="roboto">Нэвтрэх</h1>
                  <VscAccount className="w-i-icon"/>
                </div>
              </div>
              <div className="sags">
                <div className="sags-1">
                  {/* <i className="fa-solid fa-cart-shopping"></i> */}
                  {/* <img src={Image} alt="/" /> */}
                  <AiFillFolderOpen className="Sags-1-icon"/>
                </div>
              </div>
              <div className="me">
                <div className="me-1">
                  {/* <i className="fa-solid fa-user"></i> */}
                  <VscHeart/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-2">
        <div className="h2-container">
          <div className="menu">
            <div className="menu-i">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="menus">
              <ul className="menus-ul roboto">
                <li>
                  <a href="/">Бүх ангилал</a>
                </li>
                <li>
                  <a to="/test">Шинэ</a>
                </li>
                <li>
                  <a href="/">Зээлийн үйлчилгээ</a>
                </li>
                <li>
                  <a to="suurin">Брэнд</a>
                </li>
                <li>
                  <a href="/">Урьдчилсан захиалга</a>
                </li>
                <li>
                  <a href="/">ХЯМДРАЛ</a>
                </li>
                <li>
                  <a href="/">НЕКСТ МЕДИА</a>
                </li>
                <li>
                  <a href="/">БАЙГУУЛЛАГАД</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
