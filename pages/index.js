import React from 'react';
import {client} from '../lib/client';
import {Product, FooterBanner, HeroBanner, PhotoGallery} from '../components';

const index = ({ galleryData, products, bannerData }) => {
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
      <hr className='gallery-divider'></hr>
      <div className='gallery-container'>
        <PhotoGallery galleryData={galleryData} />
      </div>
    </>
  )
}
export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const galleryQuery = '*[_type == "gallery"]';
  const galleryData = await client.fetch(galleryQuery);

  return {
    props: {products, bannerData, galleryData}
  }
}



export default index