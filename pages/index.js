import React from 'react';
import {client} from '../lib/client';
import {Product, FooterBanner, HeroBanner} from '../components';

const index = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='content'>
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Bouqets of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}
export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}



export default index