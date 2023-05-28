import React, { useEffect, useState } from 'react';
import './PriceList.scss';
import { client } from '../../client';

function PriceList() {
  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    const query = '*[_type == "henna"]';

    client.fetch(query).then( (data) => {
      setPriceList(data);
    });

  }, [] );

  return (
    <>
    <h2  id='pricelist-id' className='head-text'>Henna Price List</h2>
      <div className='container'>
        {priceList.map( (pL, index ) => (
          <div key={index} className="item-wrapper">
            <div className="item">
              <div className="title">{ pL.title }</div>
              <div className="space"></div>
              <div className="price">{ pL.price }</div>
            </div>
            <p className="description">{ pL.description }</p>
          </div>
        ) ) }  
      </div>          
    </>
  )
}

export default PriceList;