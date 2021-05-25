import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="231"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="432"
            title="Mi Smart Band 5"
            price={25.99}
            image="https://m.media-amazon.com/images/I/719ZywAmvOL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1"
            title="Wings of Fire"
            price={10.99}
            image="https://m.media-amazon.com/images/I/71KKZlVjbwL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Samsung Galaxy M42 5G (Prism Dot Gray, 6GB RAM, 128GB Storage)"
            price={199.9}
            image="https://m.media-amazon.com/images/I/71bmFRQaYCL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="3"
            title="LG 22 inch (55cm) IPS Monitor"
            price={99.99}
            image="https://m.media-amazon.com/images/I/61wFnp19zzL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4"
            title="Samsung Galaxy Tab S7"
            price={999.99}
            image="https://m.media-amazon.com/images/I/81JIEzzsnHL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
