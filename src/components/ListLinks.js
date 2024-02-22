import React from 'react';
import { useSelector } from 'react-redux';

import '../style/style.css';

const LinkList = () => {
  const links = useSelector((state) => state.links);

  return (
    <div className="container B">
      <h1>Links List</h1>
      <div className="content">
        {links.map((link, index) => (
          <div className='item' key={index}>{link}</div>
        )).reverse()}
      </div>
    </div>
  );
};

export default LinkList;