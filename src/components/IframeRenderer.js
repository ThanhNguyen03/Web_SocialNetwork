import React from 'react';
import { useSelector } from 'react-redux';
import { typeLink } from '../redux/actions';

const IframeRenderer = () => {
  const links = useSelector((state) => state.links);
  const typeLinks = links.map(typeLink)
  return (
    <div className='container C'>
      <h2>Embedded Content</h2>
      <div className='content'>
      {typeLinks.map((link, index) => (
          <iframe className='iframe' src={link.link} title={index} data-embed-type={link.type}></iframe>
      )).reverse()}
      </div>
    </div>
  );
};

export default IframeRenderer;