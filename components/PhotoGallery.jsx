import React from 'react';
import {urlFor} from '../lib/client';
import Link from 'next/link';


const PhotoGallery = ( galleryData ) => {
  const images = galleryData["galleryData"];
  return (
    <div>
      <div className='products-heading'>
          <h2>See My Work on Instagram</h2>
          <p>@ChristyMetzDesign</p>
      </div>
    <div className='products-container'>
        
        {images?.map((item, i) => (
          <div className='product-card'>
              <img
                src={urlFor(item.image[0])}
                key={i}
                className='product-image'
                width={250}
                height={250}
              />
              </div>
            ))}
          
          </div>
          </div>
  )
}

export default PhotoGallery